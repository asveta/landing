import React from "react";
import img_arrow from "../assets/arrow.svg";

const SendRequestCta = ({ action }) => {
  return (
    <div
      className="request-button"
      onClick={() => {
        action();
      }}
    >
      <span>Оставить заявку</span>
      <img className="arrow-icon" src={img_arrow} alt="" />
    </div>
  );
};

export default SendRequestCta;
