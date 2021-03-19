import axios from "axios";
import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import style from "./message-board.module.css";

// http://54.169.187.226
// http://localhost:5000/
const URL_ADDRESS = "http://54.169.187.226/";

function MessageBoard() {
  const [messages, setMessages] = useState([]);

  useInterval(() => {
    axios
      .get(`${URL_ADDRESS}message/`)
      .then((result) => {
        setMessages(result.data);
      })
      .catch((error) => {
        console.log("error occured:", error);
      });
  }, 5000);
  const messageContainer = messages.map((message) => {
    return (
      <div className={style.messageBox} key={message.id}>
        <div className={style.messageMessage}>{message.message}</div>
        <div className={style.messageName}>{message.name}</div>
      </div>
    );
  });
  return (
    <div className={style.messageBoardBody}>
      <div className={style.glassContainer}>
        <div className={style.messageTitle}>Well Wishes</div>
        <div className={style.techslideshow}>
          <div className={style.messageContainer}>{messageContainer}</div>
        </div>

        <div className={style.linkTitle}>Link</div>
      </div>
    </div>
  );
}
export default MessageBoard;
