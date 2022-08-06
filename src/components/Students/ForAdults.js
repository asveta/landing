import React from "react";

function ForAdults({ title }) {
  return (
    <div className="section-wrapper mt-56">
      <div className="about-section" id="about">
        <h1>{title}</h1>

        <div className="students-languages">
          <div className="container text-center">
            <br/>
            <p className="paragraph">
              Чтобы начать учить на Asvete нужно только освоить онлайн-сервис,
              который мы предложим или использовать уже знакомый вам.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForAdults;
