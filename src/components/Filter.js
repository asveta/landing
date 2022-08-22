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
            "Беларуская",
            "Гісторыя",
            "География",
            "Математика",
            "Физика",
            "Химия",
          ]}
        />
        <CheckboxField
          addRequest={addRequest}
          category="Класс"
          options={["1-4", "5", "6", "7", "8", "9", "10-11"]}
        />
        <CheckboxField
          addRequest={addRequest}
          category="Удобное время"
          options={["8:30 - 13:00", "13:00 - 18:00", "18:00 - 22:00"]}
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
