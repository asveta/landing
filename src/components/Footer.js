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
          href="https://t.me/Asvetabot"
          className="telegram-link"
          target="_blank"
          onClick={() => {
            firebase.analytics().logEvent("visit_telegram");
          }}
        >
          <img src={telegram} alt="telegram" />
          <span className="telegram-text">Чат с командой</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
