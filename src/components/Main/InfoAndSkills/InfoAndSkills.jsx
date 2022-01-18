/** @format */

import Contacts from "./Contacts/Contacts";
import SkilsComponent from "./SkilsComponent/SkilsComponent";
import { SKILS } from "../../../DB/DB";

function InfoAndSkills() {
  return (
    <div>
      <Contacts />
      <SkilsComponent title={"TECH SKILLS"} data={SKILS.TECH} />
      <SkilsComponent title={"SOFT SKILLS"} data={SKILS.SOFT} />
      <SkilsComponent title={"LANGUAGES"} data={SKILS.LANGUAGES} />
    </div>
  );
}

export default InfoAndSkills;
