import React from "react";
import CheckboxField from "./CheckboxField";

const Filter = ({ addRequest }) => {
  return (
    <div className="filter-wrapper">
      <h1>Подобрать урок</h1>
      <div>
        <CheckboxField
          addRequest={addRequest}
          category="Предмет"
          options={[
            "Английский",
            "Белорусский",
            "Русский",
            "Математика",
            "Физика",
          ]}
        />
        <CheckboxField
          addRequest={addRequest}
          category="Класс"
          options={["5", "6", "7", "8", "9", "10", "11", "12"]}
        />
        <CheckboxField
          addRequest={addRequest}
          category="Удобное время"
          options={["9:00 - 13:00", "13:00 - 17:00", "17:00 - 22:00"]}
        />
      </div>

      <div className="request-button">
        <span>Оставить заявку →</span>
      </div>
    </div>
  );
};

export default Filter;
