import React from "react";
import pricing_img from "../assets/pricing.svg";
import SendRequestCta from "./SendRequestCta";

function Pricing({ getFormRequest }) {
  return (
    <div className="section-wrapper bg-grey">
      <div className="pricing-section" id="pricing">
        <div className="pricing-wrapper">
          <h1>Стоимость</h1>
          <h1 className="price">50 BYN / месяц занятий</h1>
          <h2>по выбранному предмету</h2>
          <div className="pricing-points">
            <p className="paragraph">- занятия дважды в неделю</p>
            <p className="paragraph">
              - инструкции по работе с интерактивным сервисом для занятий
            </p>
            <p className="paragraph">- пробное занятие бесплатно</p>
          </div>
          <SendRequestCta title="Оставить заявку" action={getFormRequest} />
        </div>
        <div className="pricing-img-wrapper">
          <img src={pricing_img} alt="pricing" />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
