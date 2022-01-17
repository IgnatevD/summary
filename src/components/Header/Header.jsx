/** @format */
import style from "./Header.module.scss";
import myPhoto from "../../img/ignatev.jpg";

function Header() {
  return (
    <header>
      <div className={style.photo}>
        <img src={myPhoto} alt="Ignatev" />
      </div>

      <h1>Ignatev Dmitro</h1>
      <p>Fron and developer</p>
    </header>
  );
}

export default Header;
