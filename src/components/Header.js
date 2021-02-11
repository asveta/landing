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
            <Link to="/" className="nav-bar-link">
              Хочу учиться
            </Link>
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
