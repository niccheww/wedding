import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import { use100vh } from "react-div-100vh";

function Dashboard() {
  const height = use100vh() - 61;
  console.log(height);
  return (
    <div style={{ height: `${height}px` }} className={styles.mainBody}></div>
  );
}
export default Dashboard;
