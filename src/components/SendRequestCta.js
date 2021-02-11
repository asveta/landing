import React from "react";
import Modal from "./Modal";
import img_arrow from "../assets/arrow.svg";

const SendRequestCta = ({ getFormRequest }) => {
  return (
    <div
      className="request-button"
      onClick={() => {
        getFormRequest();
      }}
    >
      <span>Оставить заявку</span>
      <img className="arrow-icon" src={img_arrow} alt="" />
    </div>
  );
};

export default SendRequestCta;
