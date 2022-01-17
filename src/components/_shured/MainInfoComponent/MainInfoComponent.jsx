/** @format */

function MainInfoComponent({ title, children, newClass }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {children?.map((item) => (
          <li key={item.key}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default MainInfoComponent;
