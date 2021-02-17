import React from "react";

const ClassCard = ({ classEntry }) => {
  return (
    <div>
      <h1>{classEntry.subject}</h1>
      <h3>Для {classEntry.year} класса</h3>
      <p>
        {classEntry.day}, начало в {classEntry.time}:00
      </p>
    </div>
  );
};

export default ClassCard;
