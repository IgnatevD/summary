/** @format */

import Container from "../_shured/Container/Container";
import Experience from "./Experience/Experience";
import InfoAndSkills from "./InfoAndSkills/InfoAndSkills";
import style from "./Main.module.scss";

function Main() {
  return (
    <main className={style.main}>
      <Container> 
        <InfoAndSkills />
        <Experience />
      </Container>

    </main>
  );
}

export default Main;
