import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

function Dashboard() {
  const { height } = useWindowDimensions();

  return (
    <div
      style={{ height: `calc(${height}px - 61px)` }}
      className={styles.mainBody}
    ></div>
  );
}
export default Dashboard;
