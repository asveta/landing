import React from "react";
import CheckboxField from "./CheckboxField";
import SendRequestCta from "./SendRequestCta";

const Filter = ({ addRequest, getFormRequest, filterClasses }) => {
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
      <div className="flex">
        <SendRequestCta title="Подобрать урок" action={filterClasses} />
        <SendRequestCta
          title="Оставить заявку"
          action={getFormRequest}
          primary
        />
      </div>
    </div>
  );
};

export default Filter;
