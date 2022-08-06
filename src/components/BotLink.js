import React from "react";
import telegram from "../assets/telegram_logo.png";

function BotLink() {
    return (
        <div className="bot-link-wrapper">
            <a
                href="https://t.me/asvetaorg"
                className="bot-link bg-bot-anime"
                target="_blank"
                rel="noreferrer"
            >
                <div className="bot-link-icon">
                    <img src={telegram} alt="telegram" />
                </div>
                <span className="bot-link-text">
                    Чат-бот
                </span>
            </a>
        </div>
    );
}

export default BotLink;
