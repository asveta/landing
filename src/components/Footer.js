import React from "react";
import logo from "../assets/logo_white.png"
import telegram from "../assets/telegram_logo.png"

function Footer () {

  return (
    <div className="footer">
      <img src={logo} alt="asveta" className="footer-logo" />
      <a className="telegram-link">
        <img src={telegram} alt="telegram" />
        <span className="telegram-text">Наш Telegram канал</span>
      </a>
    </div>
  )
}

export default Footer;