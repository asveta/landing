import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ForSchool from "../../components/Students/ForSchool";
import ChildEduFilter from "../../components/Filters/ChildEduFilter";

function Homework() {
  return (
    <div className="App">
      <Header page="tutors" />
      <ForSchool title="Подготовка по школьной программе" />

        <div className="inner-page-filter-wrapper">
            <ChildEduFilter/>
        </div>

      <Footer />
    </div>
  );
}

export default Homework;
