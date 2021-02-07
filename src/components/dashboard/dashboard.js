import React from "react";
import style from "./dashboard.module.css";

function Dashboard() {
  return (
    <div className={style.mainBody}>
      <span>Welcome</span>
      <span>to the</span>
      <span>Wedding Inviatation</span>
      <span>of</span>
      <span>Name</span>
      <span>&</span>
      <span>Name</span>
      <div className={style.buttonContainer}>
        <div>Details</div>
        <div>Checkin</div>
      </div>
    </div>
  );
}
export default Dashboard;
