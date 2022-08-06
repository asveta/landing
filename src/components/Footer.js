import React from "react";
import logo from "../assets/logo_white.png";
import telegram from "../assets/telegram_logo.png";
import firebase from "firebase";

function Footer() {
  return (
    <div className="section-wrapper bg-black">
      <div className="footer">
        <img src={logo} alt="asveta" className="footer-logo" />
        <a
          href="https://t.me/asvetaorg"
          className="telegram-link"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            firebase.analytics().logEvent("visit_telegram");
          }}
        >
          <img src={telegram} alt="telegram" />
          <span className="telegram-text">Наш Telegram канал</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
