import React from "react";
import logoImg from '../../Assets/images/main_logo_with_darktext_dphi 1.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-parent">
      <img className="nav-img" src={logoImg} alt="dphi-logo" />
    </div>
  );
};

export default NavBar;
