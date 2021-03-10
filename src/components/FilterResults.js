import React from "react";
import ClassCard from "./ClassCard";
import SendRequestCta from "./SendRequestCta";

const FilterResults = ({ classes, getFormRequest }) => {
  const resultsRef = React.createRef();
  return classes ? (
    <div className="section-wrapper mt-56">
      <div className="results" ref={resultsRef}>
        <h1 className="mb-24">Подходящие уроки</h1>
        <div className="flex mb-32">
          {Object.values(classes).map((classEntry) => {
            return <ClassCard classEntry={classEntry} />;
          })}
        </div>
        <div className="column align-center">
          <h3>Нет подходящего варианта?</h3>
          <p>Оставьте заявку и мы с вами свяжемся</p>
          <SendRequestCta title="Оставить Заявку" action={getFormRequest} />
        </div>
      </div>
    </div>
  ) : null;
};

export default FilterResults;
