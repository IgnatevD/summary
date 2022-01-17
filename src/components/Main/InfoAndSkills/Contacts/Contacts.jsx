/** @format */


import { useState } from "react";

import style from "./Contacts.module.scss";

function Contacts() {
  const [contact, SetContact] = useState(false)
const handelOpenButton = () => SetContact(!contact);

return (
    <div>
      <button onClick={handelOpenButton}>+</button>
      <h2>CONTACT INFORMATION</h2>
      {contact &&
      <div className={style.contactContainer}>
      <p>(099)63-67-67</p>
      <a href="https://www.linkedin.com/in/ignatevd/" rel="noreferrer">
        linkedin.com
      </a>
      <a href="https://github.com/IgnatevD/">github.com</a>
      </div>
}
    </div>
  );
}

export default Contacts;
