import React, {useRef, useState} from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import img_arrow from "../../assets/arrow.svg";
import ForStudentsHero from "../../components/Students/ForStudentsHero";
import {render} from "@testing-library/react";
import Modal from "../../components/Modal";
import firebase from "firebase";

function StudentsIndex() {
    const [request, setRequest] = useState({});
    const addRequest = (id, category) => {
        let updatedRequest = request;
        updatedRequest[category] === id
            ? delete updatedRequest[category]
            : (updatedRequest[category] = id);
        setRequest(updatedRequest);
    };

    const getFormRequest = () => {
        render(<Modal request={request} />);
        document.body.classList.add("body-modal");
        firebase.analytics().logEvent("open_form");
    };

    const resultsRef = useRef(null);

    const getInitialData = async () => {
        firebase
            .database()
            .ref("Classes/")
            .once("value")
            .then((snapshot) => {
                setFilteredClasses(snapshot.val());
            });
    };

    const [filteredClases, setFilteredClasses] = useState(null);
    const filterClasses = () => {
        getInitialData().then(resultsRef.current.scrollIntoView());
        console.log(filteredClases);

        // firebase.analytics().logEvent("filter_classes");
    };

  return (
    <div className="App">
      <Header page="tutors" />
      <ForStudentsHero title="Ученикам" />

      <div className="tutors-cta">
        <h2>Ответим на любые ваши вопросы</h2>
          <p>
              Мы отвечаем всем. На любые вопросы. Даже, если вы спросите, как называется самый большой ледник Исландии, мы ответим на ваш вопрос.
          </p>
        <a
          className="request-button"
          href="https://forms.gle/6WiuEUbp9YEVdT2LA"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            //firebase.analytics().logEvent("visit_tutors_form");
          }}
        >
          <span>Написать боту</span>
          <img className="arrow-icon" src={img_arrow} alt="" />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default StudentsIndex;
