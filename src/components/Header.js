import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="asveta" />
          </Link>
        </div>
        <div className="nav-bar">
          <div className="header-block">
            <a href="#about" className="nav-bar-link">
              О школе
            </a>
          </div>
          <div className="header-block">
            <a href="#pricing" className="nav-bar-link">
              Стоимость
            </a>
          </div>
          <div className="separator"></div>
          <div className="header-block">
            <Link to="/tutors" className="nav-bar-link">
              Хочу преподавать
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
