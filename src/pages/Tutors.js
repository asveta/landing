import React from "react";
import firebase from "firebase";

import Header from "../components/Header";
import ForTutors from "../components/ForTutors";
import Footer from "../components/Footer";
import img_arrow from "../assets/arrow.svg";

function TutorsPage() {
  return (
    <div className="App">
      <Header />
      <ForTutors title="Преподавателям" />
      <div className="tutors-cta">
        <h2>Готовы попробовать? Заполните анкету</h2>
        <a
          className="request-button"
          href="https://forms.gle/6WiuEUbp9YEVdT2LA"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            firebase.analytics().logEvent("visit_tutors_form");
          }}
        >
          <span>Заполнить форму</span>
          <img className="arrow-icon" src={img_arrow} alt="" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default TutorsPage;
