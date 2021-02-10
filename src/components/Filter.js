import React from "react";
import CheckboxField from "./CheckboxField";

function Filter() {
  return (
    <div className="filter-wrapper">
      <h1>Подобрать урок</h1>
      <div>
        <CheckboxField
          name="Предмет"
          options={[
            "Английский",
            "Белорусский",
            "Русский",
            "Математика",
            "Физика",
          ]}
        />
        <CheckboxField
          name="Класс"
          options={["5", "6", "7", "8", "9", "10", "11", "12"]}
        />
        <CheckboxField
          name="Удобное время"
          options={["9:00 - 13:00", "13:00 - 17:00", "17:00 - 22:00"]}
        />
      </div>

      <div className="request-button">
        <span>Оставить заявку →</span>
      </div>
    </div>
  );
}

export default Filter;
