import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import SendRequestCta from "./components/SendRequestCta";
import { render } from "@testing-library/react";

function App() {
  const [request, setRequest] = useState({});
  const addRequest = (id, category) => {
    let updatedRequest = request;
    updatedRequest[category] == id
      ? delete updatedRequest[category]
      : (updatedRequest[category] = id);
    console.log(updatedRequest);
    setRequest(updatedRequest);
  };

  const [formRequest, setFormRequest] = useState({ request });
  const getFormRequest = () => {
    setFormRequest(request);
    console.log("form:" + formRequest.Предмет);
    render(<Modal request={request} />);
  };

  return (
    <div className="App">
      <Header />
      <div className="showcase">
        <Hero />
        <Filter addRequest={addRequest} getFormRequest={getFormRequest} />
      </div>
      <About />
      <Pricing />
      <Footer />
      <SendRequestCta getFormRequest={getFormRequest} />
    </div>
  );
}

export default App;
