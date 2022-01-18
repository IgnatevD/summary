/** @format */

function Project({
  title,
  linkGit,
  linkProject,
  description,
  skils,
  newClass,
}) {
  return (
    <div>
      <h3>{title}</h3>
      <a href={linkGit}>{linkGit}</a>
      <a href={linkProject}>{linkProject}</a>
      <p>{skils}</p>
      <p>{description}</p>
    </div>
  );
}

export default Project;
