/** @format */

import React from "react";
import Svg from "../Svg/Svg";

export default function BtnSvg({
  icon,
  onClick,
  className,
  classNameIcon,
  type = "button",
}) {
  return (
    <button type={type} onClick={onClick} className={className}>
      <Svg icon={`#icon-${icon}`} className={classNameIcon} />
    </button>
  );
}
