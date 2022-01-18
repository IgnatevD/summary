/** @format */

import Container from "../_shured/Container/Container";
import Experience from "./Experience/Experience";
import InfoAndSkills from "./InfoAndSkills/InfoAndSkills";
import style from "./Main.module.scss";

function Main() {
  return (
    <main className={style.main}>
      <Container>
        <div className={style.containerMain}>
          <InfoAndSkills />
          <Experience />
        </div>
      </Container>
    </main>
  );
}

export default Main;
