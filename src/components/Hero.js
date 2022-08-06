import React from "react";
import hero_img from "../assets/hero.svg";

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero-img-wrapper">
          <img src={hero_img} alt="Asveta" />
        </div>
        <h1>Онлайн обучение для всех</h1>
      </div>
    </div>
  );
}

export default Hero;
