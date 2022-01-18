/** @format */

import MainInfoComponent from "../../_shured/MainInfoComponent/MainInfoComponent";
import { EXPERIENCE } from "../../../DB/DB";
import style from "./Experience.module.scss";

function Experience() {
  return (
    <div className={style.conteinerExperience}>
      <MainInfoComponent
        EXPERIENCE={EXPERIENCE.PROJECT}
        className={style.project}
      />

      <MainInfoComponent EXPERIENCE={EXPERIENCE.WORK} className={style.work} />

      <MainInfoComponent
        EXPERIENCE={EXPERIENCE.EDUCATION}
        className={style.education}
      />
    </div>
  );
}

export default Experience;
