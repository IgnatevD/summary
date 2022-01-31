/** @format */
import { useEffect, useState } from 'react';
import BtnSvg from '../../../_shured/BtnSvg/BtnSvg';
import Svg from '../../../_shured/Svg/Svg';
import style from './Contacts.module.scss';

function Contacts() {
  const [contact, SetContact] = useState(false);
  const handelOpenButton = () => SetContact(!contact);
  const screenWidth = window.outerWidth;
  useEffect(() => {
    if (screenWidth > 768) {
      SetContact(() => true);
    }
  }, []); /* eslint-disable-line*/

  return (
    <div>
      <div className={style.titleContactContainer}>
        <BtnSvg
          onClick={handelOpenButton}
          classNameIcon={style.iconContact}
          className={style.btnContact}
          icon={contact ? 'minus' : 'plus'}
        />
        <h2 className={style.titleContact}>CONTACT INFORMATION</h2>
      </div>

      {contact && (
        <div className={style.contactContainer}>
          <a href="tel:+380996367677" className={style.contactLink}>
            <Svg className={style.iconSvg} icon={'#icon-mobile'} />
            (099)63-67-677
          </a>

          <a
            href="https://www.linkedin.com/in/ignatevd/"
            target="_blank"
            rel="noreferrer"
            className={style.contactLink}
          >
            <Svg className={style.iconSvg} icon={'#icon-linkedin'} />
            linkedin
          </a>
          <a
            href="https://github.com/IgnatevD/"
            target="_blank"
            rel="noreferrer"
            className={style.contactLink}
          >
            <Svg className={style.iconSvg} icon={'#icon-github'} />
            github.com
          </a>
        </div>
      )}
    </div>
  );
}

export default Contacts;
