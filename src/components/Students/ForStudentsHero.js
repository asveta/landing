import React from "react";
import img_teachers from "../../assets/img_teachers.png";
import img_cheap from "../../assets/img_cheap.png";
import img_online from "../../assets/img_online.png";

function ForStudentsHero({ title }) {
  return (
    <div className="section-wrapper mt-56">
      <div className="about-section" id="students-hero">
        <h1>{title}</h1>
        <div className="about">
          <a href="/students/homework">
            <div className="about-card">
              <div className="text-center">
                <img src={img_teachers} alt=""/>
              </div>
              <h2 className="card-header">Помощь с домашкой</h2>
              <p className="paragraph">
                Сделаем домашку с Вашим Ребёнком! Поможем изучить школьную программу и подготовим его к олимпиаде.
              </p>
            </div>
          </a>

          <a href="/students/adults">
            <div className="about-card">
              <div className="text-center">
                <img src={img_cheap} alt=""/>
              </div>
              <h2 className="card-header">Обучение для взрослых</h2>
              <p className="paragraph">
                Иностранные языки и не только.
                Мы поможем вам подобрать программу обучения для взрослых.
                Поможем вам подобрать программу обучения для взрослых.
              </p>
            </div>
          </a>

          <a href="/students/school">
            <div className="about-card">
              <div className="text-center">
                <img src={img_online} alt=""/>
              </div>
              <h2 className="card-header">Программа школы</h2>
              <p className="paragraph">
                Помощь с освоением школьной программы.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ForStudentsHero;
