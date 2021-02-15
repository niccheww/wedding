import React from "react";
import style from "./yamseng.module.css";

function YamSeng() {
  return (
    <div className={style.yamsengBody}>
      <a
        className={style.yamsengLink}
        href="http://djbeng.com/yamseng.html"
        target="_blank"
        rel="noreferrer"
      >
        YAMSENG
      </a>
      <span>Please join us in wishing a toast</span>
    </div>
  );
}
export default YamSeng;
