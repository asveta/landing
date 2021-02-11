import React from "react";
import pricing_img from "../assets/hero_img.png";
import img_arrow from "../assets/arrow.svg";

function Pricing() {
  return (
    <div className="pricing-section" id="pricing">
      <div className="pricing-wrapper">
        <h1>Стоимость</h1>
        <h1 className="price">50 BYN / месяц занятий</h1>
        <h2>по выбранному уроку</h2>
        <div className="pricing-points">
          <p>- занятия проходят дважды в неделю</p>
          <p>- доступ к интерактивным сервисам для занятий</p>
          <p>- в 2,5 раза дешевле услуг опытного репетитора</p>
        </div>
        <div className="request-button">
          <span>Оставить заявку</span>
          <img className="arrow-icon" src={img_arrow} alt="" />
        </div>
      </div>
      <div className="pricing-img-wrapper">
        <img src={pricing_img} alt="pricing" />
      </div>
    </div>
  );
}

export default Pricing;
