import React from "react";
import { ReactComponent as CalendarSvg } from "../assets/calendar.svg";
import { ReactComponent as ClockSvg } from "../assets/clock.svg";

const ClassCard = ({ classEntry }) => {
  return (
    <div className="class-card">
      <h3 className="mb-8">
        <span className="text-grey">{classEntry.subject} / </span>
        {classEntry.year} класс
      </h3>
      <div className="flex between mb-16 ">
        <div className="flex align-center">
          <CalendarSvg className="mr-4" />
          <p className="text-bold">{classEntry.day}</p>
        </div>
        <div className="flex align-center ">
          <ClockSvg className="mr-4" />
          <p>
            Начало в <span className="text-bold">{classEntry.time}:00</span>
          </p>
        </div>
      </div>
      <button className="button-secondary-small">Записаться</button>
    </div>
  );
};

export default ClassCard;
