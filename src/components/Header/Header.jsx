/** @format */
import style from "./Header.module.scss";
import myPhoto from "../../img/ignatev.jpg";
import Container from "../_shured/Container/Container";

function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContainer}>
          <div className={style.photoContainer}>
            <img src={myPhoto} alt="Ignatev" />
          </div>
          <div>
            <h1 className={style.titleName}>Ignatev Dmitro</h1>
            <p className={style.titlePosition}>Fron and developer</p>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header
