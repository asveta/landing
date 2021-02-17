import React from "react";
import { ReactComponent as ArrowSvg } from "../assets/arrow.svg";

const SendRequestCta = ({ title, action, primary }) => {
  return (
    <div
      className={primary ? "request-button" : "button-secondary mr-16"}
      onClick={() => {
        action();
      }}
    >
      <span>{title}</span>
      <ArrowSvg
        className="arrow-icon"
        fill={primary ? "#fff" : "#6746ec"}
        alt=""
      />
    </div>
  );
};

export default SendRequestCta;
