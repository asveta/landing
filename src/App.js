import './App.css';

import Header from "./components/Header"
import Hero from "./components/Hero"
import Filter from "./components/Filter"
import About from "./components/About"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import Modal from "./components/Modal"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="showcase">
        <Hero />
        <Filter />
      </div>
      <About />
      <Pricing />
      <Footer />
      <Modal />
    </div>
  );
}

export default App;
