import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ForHomework from "../../components/Students/ForHomework";
import ChildEduFilter from "../../components/Filters/ChildEduFilter";

function Homework() {
  return (
    <div className="App">
      <Header page="tutors" />
      <ForHomework title="Поможем с домашней работой школьникам" />

        <div className="inner-page-filter-wrapper">
            <ChildEduFilter/>
        </div>

      <Footer />
    </div>
  );
}

export default Homework;
