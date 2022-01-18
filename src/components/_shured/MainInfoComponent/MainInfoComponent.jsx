/** @format */
import Project from "../Project/Project";
import style from "./MainInfoComponent.module.scss";

function MainInfoComponent({ EXPERIENCE, className }) {
  const { title, all } = EXPERIENCE;
  return (
    <div className={style.containerExperience}>
      <h2 className={style.titleExperience}>{title}</h2>
      <ul>
        {all.map((item) => (
          <li key={item.title}>
            <Project item={item} newClass={className} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainInfoComponent;
