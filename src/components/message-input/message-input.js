import axios from "axios";
import style from "./message-input.module.css";
import React, { useState } from "react";

import Loader from "../loader/loader";

function MessageInput() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = () => {
    setIsLoading(true);
    let updatedName = name.trim();
    let updatedMessage = message.trim();

    if (updatedName.length === 0) {
      setName("");
      updatedName = "anonymous";
    }
    if (updatedMessage.length === 0) {
      setMessageError("Message is empty");
      setIsLoading(false);
      return;
    }

    axios
      .post(`http://localhost:5000/message/`, {
        message: updatedMessage,
        name: updatedName,
      })
      .then(() => {
        setName("");
        setMessage("");
        setMessageError("");
        setIsLoading(false);
      })
      .catch(() => {
        setMessageError("Sorry, an error occured");
        setIsLoading(false);
      });
  };
  return (
    <div className={style.messageInputBody}>
      {isLoading && <Loader />}
      <div className={messageError.length !== 0 ? style.errorContainer : null}>
        <span>{messageError}</span>
      </div>

      <div className={style.inputMainBody}>
        <label className={style.inputLabel}>Name</label>
        <input
          className={style.inputBody}
          placeholder="optional"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={style.inputMainBody}>
        <label className={style.inputLabel}>Message</label>
        <textarea
          className={style.textareaBody}
          placeholder="your well wishes"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={style.buttonContainer} onClick={sendMessage}>
        <div>SEND</div>
      </div>
    </div>
  );
}
export default MessageInput;
