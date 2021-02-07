import axios from "axios";
import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";
import style from "./message-board.module.css";

function MessageBoard() {
  const [messages, setMessages] = useState([]);

  useInterval(() => {
    console.log("enter");
    axios
      .get(`http://localhost:5000/message/`)
      .then((result) => {
        console.log(result);
        setMessages(result.data);
      })
      .catch((error) => {
        console.log("error occured:", error);
      });
  }, 5000);
  // console.log(messages);
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
