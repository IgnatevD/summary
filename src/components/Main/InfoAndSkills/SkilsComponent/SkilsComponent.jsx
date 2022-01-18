/** @format */

import { useEffect, useState } from "react";
import BtnSvg from "../../../_shured/BtnSvg/BtnSvg";
import style from "./SkilsComponent.module.scss";

function SkilsComponent({ title, data, newClass }) {
  const [contact, SetContact] = useState(false);
  const handelOpenButton = () => SetContact(!contact);
  const screenWidth = window.outerWidth;
  useEffect(() => {
    if (screenWidth > 768) {
      SetContact(() => true);
    }
  }, []); /* eslint-disable-line*/
  return (
    <div className={style.skillsContainer}>
      <div className={style.titleContainer}>
        <BtnSvg
          onClick={handelOpenButton}
          classNameIcon={style.iconContact}
          className={style.btnContact}
          icon={contact ? "minus" : "plus"}
        />
        <h2>{title}</h2>
      </div>
      {contact && (
        <ul>{data && data.map((item) => <li key={item}>{item}</li>)}</ul>
      )}
    </div>
  );
}

export default SkilsComponent;
