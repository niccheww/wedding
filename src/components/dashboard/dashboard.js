import React, { useEffect } from "react";
import style from "./dashboard.module.css";

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
};

function Dashboard() {
  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
    return () => {
      window.removeEventListener("resize", appHeight);
    };
  }, []);
  return <div className={style.mainBody}></div>;
}
export default Dashboard;
