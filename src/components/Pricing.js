import React from 'react';
import pricing_img from '../assets/pricing.svg';
import SendRequestCta from './SendRequestCta';

function Pricing({ getFormRequest }) {
  return (
    <div className='section-wrapper bg-grey'>
      <div className='pricing-section' id='pricing'>
        <div className='pricing-wrapper'>
          <h1>Стоимость</h1>
          <h1 className='price'>от 50 BYN / месяц занятий</h1>
          <h2>по выбранному предмету</h2>
          <div className='pricing-points'>
            <p className='paragraph'>- занятия 1-2 раза в неделю</p>
            <p className='paragraph'>- инструкции по работе с интерактивным сервисом для занятий</p>
            <p className='paragraph'>- пробное занятие бесплатно</p>
          </div>
          <SendRequestCta action={getFormRequest} />
          <p className='speechClub'>
            Вы можете также вступить в наш <span>гутарковы клуб па беларускай мове</span>
          </p>
          <p className='speechClub_pay'>
            Поддержать проект можно по реквизитам : <span>1234 5678 9101 2345</span>
          </p>
        </div>
        <div className='pricing-img-wrapper'>
          <img src={pricing_img} alt='pricing' />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
