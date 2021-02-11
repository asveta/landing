import React from "react";
import CheckboxOption from "./CheckboxOption";

const CheckboxField = ({ options, category, addRequest }) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default CheckboxField;
