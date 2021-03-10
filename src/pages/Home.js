import React, { useRef, useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { render } from "@testing-library/react";
import firebase from "firebase";
import FilterResults from "../components/FilterResults";

function HomePage() {
  const [request, setRequest] = useState({});
  const addRequest = (id, category) => {
    let updatedRequest = request;
    updatedRequest[category] == id
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
      <Header page="home" />
      <div className="showcase">
        <Hero />
        <Filter
          addRequest={addRequest}
          getFormRequest={getFormRequest}
          filterClasses={filterClasses}
        />
      </div>
      <div ref={resultsRef}></div>
      <FilterResults classes={filteredClases} getFormRequest={getFormRequest} />
      <About title="О проекте" />
      <Pricing getFormRequest={getFormRequest} />
      <Footer />
    </div>
  );
}

export default HomePage;
