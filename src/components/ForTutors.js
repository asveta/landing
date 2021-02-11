import React from "react";
import img_teachers from "../assets/img_teachers.png";
import img_cheap from "../assets/img_cheap.png";
import img_online from "../assets/img_online.png";

function ForTutors({ title }) {
  return (
    <div className="section-wrapper">
      <div className="about-section" id="about">
        <h1>{title}</h1>
        <div className="about">
          <div className="about-card">
            <img src={img_teachers} />
            <h2 className="card-header">Просто начать</h2>
            <p className="paragraph">
              Чтобы начать учить на Asvete нужно только освоить онлайн-сервис,
              который мы предложим или использовать уже знакомый вам.
            </p>
            <p className="paragraph">
              Дополнительные сертификации не нужны, достаточно подтверждения
              образования или стажа. Ученики делают оплату напрямую учителю, вы
              можете заранее планировать доход от каждой группы.
            </p>
          </div>
          <div className="about-card">
            <img src={img_cheap} />
            <h2 className="card-header">Поддержка</h2>
            <p className="paragraph">
              Важно, чтобы вы доверяли нам и и чувствовали себя уверенно.
            </p>
            <p className="paragraph">
              После заполнения анкеты на вашу почту будут отправлены все
              необходимые инструкции, пройдя которые можно будет спокойно
              проводить занятия онлайн по своей специализации.
            </p>
            <p className="paragraph">
              Мы будем поддерживать на каждом этапе и начнем с обучения работе
              онлайн.
            </p>
          </div>
          <div className="about-card">
            <img src={img_online} />
            <h2 className="card-header">Свобода и самостоятельность</h2>
            <p className="paragraph">
              На площадке у вас нет начальников, не нужно заполнять отчеты, нет
              нужды строго придерживаться учебного плана. Вы сами устанавливаете
              удобное время проведения уроков.
            </p>
            <p className="paragraph">
              Вы вправе использовать привычные инструменты вроде журнала и
              дневника, но это не обязательно. Онлайн-обучение дает возможность
              проявить творческий подход.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForTutors;
