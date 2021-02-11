import React from "react";
import pricing_img from "../assets/hero_img.png";
import img_arrow from "../assets/arrow.svg";
import SendRequestCta from "./SendRequestCta";

function Pricing({ getFormRequest }) {
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
        <SendRequestCta action={getFormRequest} />
      </div>
      <div className="pricing-img-wrapper">
        <img src={pricing_img} alt="pricing" />
      </div>
    </div>
  );
}

export default Pricing;
