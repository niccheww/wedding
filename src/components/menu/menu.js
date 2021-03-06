import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./menu.module.css";
import Heart from "../../assets/icons/heart.svg";
import Home from "../../assets/icons/home.svg";

function Header() {
  let history = useHistory();
  return (
    <div className={styles.menuContainer}>
      <img
        src={Home}
        className={styles.icon}
        alt="home"
        onClick={() => history.push("/")}
      />
      <img
        src={Heart}
        className={styles.icon}
        alt="heart"
        onClick={() => history.push("/wellwish")}
      />
    </div>
  );
}

export default Header;
