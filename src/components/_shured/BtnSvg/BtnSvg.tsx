/** @format */

import React from 'react';
import Svg from '../Svg/Svg';
interface Props {
  icon?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  classNameIcon?: string;
  type: 'button' | 'submit';
}

function BtnSvg({ icon, onClick, className, classNameIcon, type = 'button' }: Props) {
  return (
    <button type={type} onClick={onClick} className={className}>
      <Svg icon={`#icon-${icon}`} className={classNameIcon} />
    </button>
  );
}

export default BtnSvg;
