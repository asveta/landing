import React from 'react';
import img_teachers from '../assets/teachers.svg';
import img_cheap from '../assets/pricy.svg';
import img_online from '../assets/flexibility.svg';

function About({ title }) {
  return (
    <div className='section-wrapper'>
      <div className='about-section' id='about'>
        <h1>{title}</h1>
        <div className='about'>
          <div className='about-card'>
            <div className='text-center'>
              <img src={img_teachers} />
            </div>
            <h2 className='card-header'>Учителя</h2>
            <p className='paragraph'>
              Нам важно, кто будет обучать на <span className='bold'>Asveta</span>.
            </p>
            <p className='paragraph'>
              Мы приглашаем и регистрируем мотивированных учителей, которые дают знания и прививают правильные ценности
              ученикам.
            </p>
            <p className='paragraph'>
              Чтобы уроки были простыми и комфортными, мы обучаем учителей работе с сервисами онлайн-обучения.
            </p>
          </div>

          <div className='about-card'>
            <div className='text-center'>
              <img src={img_cheap} alt='' />
            </div>
            <h2 className='card-header'>Полезность и выгода</h2>
            <p className='paragraph'>
              Обучение в мини-группах от 5 до 10 человек удобный вариант для обеих сторон. Учитель может уделить
              внимание всем ученикам, а групповой формат позволяет снизить стоимость обучения.
            </p>
            <p className='paragraph'>Полезно как индивидуальные занятия, выгодно как групповые.</p>
          </div>

          <div className='about-card'>
            <div className='text-center'>
              <img src={img_online} />
            </div>
            <h2 className='card-header'>Гибкость</h2>
            <p className='paragraph'>
              Пользователи <span className='bold'>Asveta</span> сами выбирают предмет, уровень/класс и время обучения.
            </p>
            <p className='paragraph'>
              Если ученик с учителем не подошли друг другу по итогам первого бесплатного урока, будет предложен другой
              вариант из имеющихся.
            </p>
            <p className='paragraph'>
              Если пока на площадке мало предложений по интересующему предмету, мы внесем ученика в лист ожидания.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
