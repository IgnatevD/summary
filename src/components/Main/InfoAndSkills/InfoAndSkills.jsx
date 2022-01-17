/** @format */

import Contacts from "./Contacts/Contacts";
import SkilsComponent from "./SkilsComponent/SkilsComponent";

function InfoAndSkills() {
  return (
    <div>
      <Contacts />
      <SkilsComponent title={"TECH SKILLS"} />
      <SkilsComponent title={"SOFTSKILLS"} />
      <SkilsComponent title={"LANGUAGES"} />
    </div>
  );
}

export default InfoAndSkills;
