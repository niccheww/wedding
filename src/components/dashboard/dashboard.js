import React from "react";
import styles from "./dashboard.module.css";
import MessageInput from "../message-input/message-input";

function Dashboard() {
  function scrollToSection(event) {
    if (supportsSmoothScrolling()) {
      return;
    }
    event.preventDefault();
    const scrollToElem = document.getElementById("well-wish");
    SmoothVerticalScrolling(scrollToElem, 300, "top");
  }
  function supportsSmoothScrolling() {
    const body = document.body;
    const scrollSave = body.style.scrollBehavior;
    body.style.scrollBehavior = "smooth";
    const hasSmooth = getComputedStyle(body).scrollBehavior === "smooth";
    body.style.scrollBehavior = scrollSave;
    return hasSmooth;
  }
  function SmoothVerticalScrolling(element, time, position) {
    var eTop = element.getBoundingClientRect().top;
    console.log(eTop);
    var eAmt = eTop / 100;
    var curTime = 0;
    while (curTime <= time) {
      window.setTimeout(SVS_B, curTime, eAmt, position);
      curTime += time / 100;
    }
  }
  function SVS_B(eAmt, position) {
    if (position === "center" || position === "") window.scrollBy(0, eAmt / 2);
    if (position === "top") window.scrollBy(0, eAmt);
  }
  return (
    <div className={styles.mainBody}>
      <div className={styles.section1Body} id="main">
        <div className={styles.section1Line1}>We're getting married</div>
        <div className={styles.section1Line2}>Ben & Swen</div>
        <a
          className={styles.section1ButtonContainer}
          href="#well-wish"
          onClick={(e) => scrollToSection(e)}
        >
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
