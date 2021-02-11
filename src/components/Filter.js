import React from "react";
import CheckboxField from "./CheckboxField";
import img_arrow from "../assets/arrow.svg";
import SendRequestCta from "./SendRequestCta";

const Filter = ({ addRequest, getFormRequest }) => {
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

      <SendRequestCta action={getFormRequest} />
      {/* 
      <div
        className="request-button"
        onClick={() => {
          document.querySelector("#modal").classList.remove("hide");
          document.body.classList.add("body-modal");
        }}
      >
        <span>Оставить заявку →</span>
        <img className="arrow-icon" src={img_arrow} alt="" />
      </div> */}
    </div>
  );
};

export default Filter;
