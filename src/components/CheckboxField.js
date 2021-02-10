import React from "react";
import CheckboxOption from "./CheckboxOption";

const CheckboxField = ({ options }) => {
  return (
    <div className="filter-section">
      <h2>Предмет</h2>
      <div className="options-wrapper">
        {options.map((option) => {
          return <CheckboxOption name={option} />;
        })}
      </div>
    </div>
  );
};

export default CheckboxField;
