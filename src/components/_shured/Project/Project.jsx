/** @format */

import style from "./Project.module.scss";

function Project({ item, newClass = null }) {
  return (
    <div className={style.containerItem}>
      <h3 className={style.titleItem}>{item.title}</h3>
      {item.year && <p>{item.year}</p>}
      {item.yearStart && (
        <p>
          c {item.yearStart} по {item.yearEnd}
        </p>
      )}

      {item.github && (
        <a href={item.github} className={style.linkItem}>
          {item.github}
        </a>
      )}
      {item.linkProgect && (
        <a href={item.linkProgect} className={style.linkItem}>
          {item.linkProgect}
        </a>
      )}
      {item.techSkills && (
        <ul className={style.experienceList}>
          {item.techSkills.map((i) => (
            <li key={i} className={`${style.experienceItem} ${newClass}`}>
              {i}
            </li>
          ))}
        </ul>
      )}

      <p className={style.descriptionItem}>{item.description}</p>
    </div>
  );
}

export default Project;
