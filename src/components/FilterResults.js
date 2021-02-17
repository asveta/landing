import React, { useRef } from "react";
import ClassCard from "./ClassCard";

const FilterResults = ({ classes }) => {
  const resultsRef = useRef(null);
  return classes ? (
    <div ref={resultsRef}>
      <h1>Подходящие уроки</h1>
      <div className="flex">
        {Object.values(classes).map((classEntry) => {
          return <ClassCard classEntry={classEntry} />;
        })}
      </div>
    </div>
  ) : null;
};

export default FilterResults;
