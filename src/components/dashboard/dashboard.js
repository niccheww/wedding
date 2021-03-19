import React from "react";
import styles from "./dashboard.module.css";
import MessageInput from "../message-input/message-input";

function Dashboard() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.section1Body} id="main">
        <div className={styles.section1Line1}>We're getting married</div>
        <div className={styles.section1Line2}>Ben & Swen</div>
        <a className={styles.section1ButtonContainer} href="#well-wish">
          Send well wishes
        </a>
      </div>
      <div className={styles.section2Body} id="well-wish">
        <MessageInput />
      </div>
    </div>
  );
}
export default Dashboard;
