/** @format */

function SkilsComponent({ title, children, newClass }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>{children && children.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
}

export default SkilsComponent;
