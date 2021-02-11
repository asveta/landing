import React from 'react';
import pricing_img from '../assets/hero_img.png';

function Pricing () {

  return (
    <div className="pricing-section" id="pricing">
      <div className="pricing-wrapper">
        <h1>Стоимость</h1>
        <h0 className="price">50 BYN / месяц занятий</h0>
        <h2>по выбранному уроку</h2>
        <div className="pricing-points">
          <h3>- занятия проходят дважды в неделю</h3>
          <h3>- доступ к интерактивным сервисам для занятий</h3>
          <h3>- в 2,5 раза дешевле услуг опытного репетитора</h3>
        </div>
        <div className="request-button" onClick={() => {
          document.querySelector("#modal").classList.remove('hide')
          document.body.classList.add("body-modal")
        }}>
          <span>Оставить заявку →</span>
        </div>
      </div>
      <div className="pricing-img-wrapper">
        <img src={pricing_img} alt="pricing"/>
      </div>
    </div>
  )
}

export default Pricing;