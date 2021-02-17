import React from "react";

const ClassCard = ({ classEntry }) => {
  return (
    <div className="class-card">
      <h2>{classEntry.subject}</h2>
      <h3>Для {classEntry.year} класса</h3>
      <p>
        {classEntry.day}, начало в {classEntry.time}:00
      </p>
      <button>Записаться</button>
    </div>
  );
};

export default ClassCard;
