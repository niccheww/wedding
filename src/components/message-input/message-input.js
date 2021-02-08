import axios from "axios";
import style from "./message-input.module.css";
import React, { useState } from "react";

function MessageInput() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState("");

  function sendMessage() {
    console.log(name, message);
    let updatedName = name.trim();
    let updatedMessage = message.trim();

    if (updatedName.length === 0) {
      setName("");
      updatedName = "anonymous";
    }
    if (updatedMessage.length === 0) {
      setMessageError("Message is empty");
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
      })
      .catch(() => {
        setMessageError("Sorry, an error occured");
      });
  }
  return (
    <div className={style.messageInputBody}>
      <div className={messageError.length !== 0 ? style.errorContainer : null}>
        <span>{messageError}</span>
      </div>

      <div className={style.inputMainBody}>
        <label className={style.inputLabel}>Name</label>
        <input
          className={style.inputBody}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={style.inputMainBody}>
        <label className={style.inputLabel}>Message</label>
        <textarea
          className={style.textareaBody}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={style.buttonContainer} onClick={sendMessage}>
        <div>Submit</div>
      </div>
    </div>
  );
}
export default MessageInput;
