import React from "react";
import images from "../../constants/images";
import "./Navbar.css";
import {FiDownload} from 'react-icons/fi'

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navabr-content_first"></div>
    <div className="app__navbar-logo">
      <img className="app__navbar-logo_img" src={images.logo} alt="Logo" />
    </div>
    <div className="app__navabr-content_second">
      <div></div>
      <a className="app__navabr-content_second-download" href="." download>
        <p>Curriculum</p>
        <FiDownload/>
      </a>
    </div>
  </nav>
);

export default Navbar;
