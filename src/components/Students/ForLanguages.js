import React from "react";
import img_teachers from "../../assets/img_teachers.png";
import img_cheap from "../../assets/img_cheap.png";
import img_online from "../../assets/img_online.png";

function ForLanguages({ title }) {
  return (
    <div className="section-wrapper mt-56">
      <div className="about-section" id="about">
        <h1>{title}</h1>

        <div className="students-languages">
          <div className="container text-center">
            <h2 className="card-header">В удобное время</h2>
            <h2 className="card-header">В удобное время</h2>
            <h2 className="card-header">В удобное время</h2>
          </div>
        </div>

        <div className="about">
          <div className="about-card">
            <img src={img_teachers} alt=""/>
            <h2 className="card-header">В удобное время</h2>
            <p className="paragraph">
              Чтобы начать учить на Asvete нужно только освоить онлайн-сервис,
              который мы предложим или использовать уже знакомый вам.
            </p>
          </div>

          <div className="about-card">
            <img src={img_cheap} alt=""/>
            <h2 className="card-header">В любом месте</h2>
            <p className="paragraph">
              После заполнения анкеты на вашу почту будут отправлены все
              необходимые инструкции, пройдя которые можно будет спокойно
              проводить занятия онлайн по своей специализации.
            </p>
          </div>

          <div className="about-card">
            <img src={img_online} alt=""/>
            <h2 className="card-header">Надёжные преподаватели</h2>
            <p className="paragraph">
              На площадке у вас нет начальников, не нужно заполнять отчеты, нет
              нужды строго придерживаться учебного плана. Вы сами устанавливаете
              удобное время проведения уроков.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForLanguages;
