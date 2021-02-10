import React from "react";

const CheckboxOption = ({ name }) => {
  return (
    <div className="filter-button" id={name}>
      {name}
    </div>
  );
};

export default CheckboxOption;
