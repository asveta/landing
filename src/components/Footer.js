import React from "react";
import logo from "../assets/logo_white.png";
import telegram from "../assets/telegram_logo.png";
import firebase from "firebase";

function Footer() {
  return (
    <div className="section-wrapper bg-black">
      <div className="footer">
        <img src={logo} alt="asveta" className="footer-logo" />
        <div className="footer-links">
            <a
                href="mailto:info@asveta.by"
                className="telegram-link"
                target="_blank"
                onClick={() => {
                    firebase.analytics().logEvent("visit_mailto");
                }}
            >
                <span className="telegram-text">info@asveta.by</span>
            </a>

            <a
                href="https://t.me/asvetaby"
                className="telegram-link"
                target="_blank"
                onClick={() => {
                    firebase.analytics().logEvent("visit_tg_channel");
                }}
            >
                <span className="telegram-text">Tg-канал</span>
            </a>

            <a
                href="https://www.instagram.com/asvetaorg"
                className="telegram-link"
                target="_blank"
                onClick={() => {
                    firebase.analytics().logEvent("visit_instagram");
                }}
            >
                <span className="telegram-text">Instagram</span>
            </a>

            <a
                href="https://t.me/Asvetabot"
                className="telegram-link"
                target="_blank"
                onClick={() => {
                    firebase.analytics().logEvent("visit_tg_bot");
                }}
            >
                <img src={telegram} alt="telegram" />
                <span className="telegram-text">Чат с командой</span>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
