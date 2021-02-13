import React, { useState } from "react";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Filter from "../components/Filter";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import { render } from "@testing-library/react";
import firebase from "firebase";

function HomePage() {
  const [request, setRequest] = useState({});
  const addRequest = (id, category) => {
    let updatedRequest = request;
    updatedRequest[category] == id
      ? delete updatedRequest[category]
      : (updatedRequest[category] = id);
    setRequest(updatedRequest);
  };

  const [formRequest, setFormRequest] = useState({ request });
  const getFormRequest = () => {
    setFormRequest(request);
    render(<Modal request={request} />);
    document.body.classList.add("body-modal");
    firebase.analytics().logEvent("open_form");
  };

  return (
    <div className="App">
      <Header page="home" />
      <div className="showcase">
        <Hero />
        <Filter addRequest={addRequest} getFormRequest={getFormRequest} />
      </div>
      <About title="О проекте" />
      <Pricing getFormRequest={getFormRequest} />
      <Footer />
    </div>
  );
}

export default HomePage;
