// import React from "react";
// import styles from "./dashboard.module.css";

// function Dashboard() {
//   return (
//     <div className={styles.mainBody}>
//       <div className={styles.mainTitle}>Ben & Swen</div>
//       <div className={styles.mainTitle2}>Invitation</div>
//     </div>
//   );
// }
// export default Dashboard;

import React from "react";
import styles from "./dashboard.module.css";
import MessageInput from "../message-input/message-input";

function Dashboard() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.section1Body} id="section1">
        <div className={styles.section1Line1}>We're getting married</div>
        <div className={styles.section1Line2}>Ben & Swen</div>
        <a className={styles.section1ButtonContainer} href="#section2">
          Send well wishes
        </a>
      </div>
      <div className={styles.section2Body} id="section2">
        <MessageInput />
      </div>
    </div>
  );
}
export default Dashboard;
