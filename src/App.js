import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

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
  console.log(request);
  return (
    <div className="App">
      <Header />
      <div className="showcase">
        <Hero />
        <Filter addRequest={addRequest} />
      </div>
      <About />
      <Pricing />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
