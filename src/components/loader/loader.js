import React from "react";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.loaderContainer}>
      <div className={style.heart}>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
