/** @format */

import React from "react";
import sprite from "../../../img/sprite.svg";
import styles from "./Svg.module.scss";

export default function Svg({ icon, className = "" }) {
  return (
    <svg className={`${styles.icon} ${className}`}>
      <use href={sprite + icon} />
    </svg>
  );
}
