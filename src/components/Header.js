import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header({ page }) {
  return (
    <header className="section-wrapper">
      {page === "tutors" ? (
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="asveta" />
            </Link>
          </div>
          <div className="nav-bar">
            <div className="header-block">
              <Link to="/" className="nav-bar-link">
                Вернуться на главную
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
      ) : (
        <div className="header-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="asveta" />
            </Link>
          </div>
          <div className="nav-bar">
            <div className="header-block">
              <a href="/" className="nav-bar-link">
                Записаться
              </a>
              <a href="/#about" className="nav-bar-link">
                О проекте
              </a>
              <a href="/#pricing" className="nav-bar-link">
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
      )}
    </header>
  );
}

export default Header;
