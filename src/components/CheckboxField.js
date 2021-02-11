import React, { useState } from "react";
import CheckboxOption from "./CheckboxOption";

const CheckboxField = ({ options, category, addRequest }) => {
  const [activeCheckbox, setActiveCheckbox] = useState(null);
  const changeActive = (name) => {
    activeCheckbox == name ? setActiveCheckbox(null) : setActiveCheckbox(name);
  };
  console.log(activeCheckbox);
  return (
    <div className="filter-section">
      <h2>{category}</h2>
      <div className="options-wrapper">
        {options.map((option) => {
          return (
            <CheckboxOption
              name={option}
              category={category}
              addRequest={addRequest}
              changeActive={changeActive}
              active={activeCheckbox == option ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxField;
