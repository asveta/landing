import React from "react";
import img_teachers from "../assets/img_teachers.png";
import img_cheap from "../assets/img_cheap.png";
import img_online from "../assets/img_online.png";

function About({ title }) {
  return (
    <div className="about-section" id="about">
      <h1>{title}</h1>
      <div className="about">
        <div className="about-card">
          <img src={img_teachers} />
          <h2 className="card-header">Топ преподаватели</h2>
          <p>
            Невероятно волшебно потрясно умопомрачительно неповторимо уникально
            превосходно изумитенько волнующе авангардно современно феноменально
          </p>
        </div>
        <div className="about-card">
          <img src={img_cheap} />
          <h2 className="card-header">Неприлично дешево</h2>
          <p>
            Невероятно волшебно потрясно умопомрачительно неповторимо уникально
            превосходно изумитенько волнующе авангардно современно феноменально
          </p>
        </div>
        <div className="about-card">
          <img src={img_online} />
          <h2 className="card-header">Онлайн обучение по топ практикам</h2>
          <p>
            Невероятно волшебно потрясно умопомрачительно неповторимо уникально
            превосходно изумитенько волнующе авангардно современно феноменально
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
