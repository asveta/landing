import React from 'react';
import logo from '../assets/logo.png';

function Header () {

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="asveta" />
        </div>
        <div className="nav-bar">
          <div className="header-block"><a href="#" className="nav-bar-link">О школе</a></div>
          <div className="header-block"><a href="#" className="nav-bar-link">Преподаватели</a></div>
          <div className="header-block"><a href="#" className="nav-bar-link">Стоимость</a></div>
          <div className="separator"></div>
          <div className="header-block"><a href="#" className="nav-bar-link">Хочу преподавать</a></div>
        </div>
      </div>
    </header>
  );
}

export default Header;