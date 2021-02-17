import React from "react";
import ClassCard from "./ClassCard";

const FilterResults = ({ classes }) => {
  return (
    <div>
      {classes
        ? Object.values(classes).map((classEntry) => {
            return <ClassCard classEntry={classEntry} />;
          })
        : null}
    </div>
  );
};

export default FilterResults;
