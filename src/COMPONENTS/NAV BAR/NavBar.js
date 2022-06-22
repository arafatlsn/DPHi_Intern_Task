import React from "react";
import { Link } from "react-router-dom";
import logoImg from '../../Assets/images/main_logo_with_darktext_dphi 1.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav-parent">
      <Link to={'/'}><img className="nav-img" src={logoImg} alt="dphi-logo" /></Link>
    </div>
  );
};

export default NavBar;
