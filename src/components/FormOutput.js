import React from "react";

function FormOutput ( {request} ) {

  return (
    <div className="form-output-wrapper mv-24">
      <h3 className="mb-16">Вас интересует:</h3>
      <div className="form-output">
        { request.length && console.log('hey',request.values)}
      </div>
    </div>
  )
}

export default FormOutput;