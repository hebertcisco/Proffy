import "./index.css";

import { Link } from "react-router-dom";
import React from "react";
import giveClassIcon from "../../assets/images/icons/study.svg";
import landingImg from "../../assets/images/landing.svg";
import logoImg from "../../assets/images/logo.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import studyIcon from "../../assets/images/icons/give-classes.svg";

export function Landing() {
  return (
    <div data-js="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="" />
          <h2>Your online study platform.</h2>
        </div>

        <img src={landingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <Link to="study" className="study">
            <img src={studyIcon} alt="Study" />
            Study
          </Link>
          <Link to="give-classes" className="give-class">
            <img src={giveClassIcon} alt="Give class" />
            Give class
          </Link>
        </div>

        <span className="total-connections">
          Total of {200} connections already.{" "}
          <img src={purpleHeartIcon} alt="Purple Heart Icon" />
        </span>
      </div>
    </div>
  );
}
