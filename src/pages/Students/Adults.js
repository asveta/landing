import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ForAdults from "../../components/Students/ForAdults";
import ChildEduFilter from "../../components/Filters/ChildEduFilter";

function Adults() {
  return (
    <div className="App">
      <Header page="tutors" />
      <ForAdults title="Образовательные курсы для взрослых" />

        <div className="inner-page-filter-wrapper">
            <ChildEduFilter/>
        </div>

      <Footer />
    </div>
  );
}

export default Adults;
