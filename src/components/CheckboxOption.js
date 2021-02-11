import React from "react";

const CheckboxOption = ({ name, category, addRequest }) => {
  return (
    <button
      className="filter-button"
      id={name}
      onClick={() => addRequest(name, category)}
    >
      {name}
    </button>
  );
};

export default CheckboxOption;
