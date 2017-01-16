import React from 'react';
import logoStyle from './resources/logo.scss';
const Logo = () => {
  return (
    <div id={logoStyle.logo}>
      <div className={logoStyle.react_logo}>
        <div></div>
        <div></div>
        <div></div>
        <span></span>
      </div>
    </div>
  )
}
export default Logo;
