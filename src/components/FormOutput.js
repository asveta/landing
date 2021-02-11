import React from "react";
import CheckboxOption from "./CheckboxOption";

function FormOutput ( {options} ) {

  return (
    <div className="form-output-wrapper mv-24">
      <h3 className="mb-16">Вас интересует:</h3>
      <div className="form-output">
        {options.map( option => <CheckboxOption name={option} />)}
      </div>
    </div>
  )
}

export default FormOutput;