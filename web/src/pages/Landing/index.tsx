import "./styles.scss";

import React, { useEffect, useState } from "react";

import GiveClassesIcon from "../../assets/images/icons/give-classes.svg";
import LandingImg from "../../assets/images/landing.svg";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import PurpleHearIcon from "../../assets/images/icons/purple-heart.svg";
import StudyIcon from "../../assets/images/icons/study.svg";
import { api } from "../../services/api";

export function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={LogoImg} alt="Logo Proffy" />
          <h2>Your online study platform.</h2>
        </div>

        <img src={LandingImg} alt="Study platform" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="To study" />
            I want to study
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Give classes" />
            Give classes
          </Link>
        </div>

        <span className="total-connections">
          Total of {totalConnections} connections already made
          <img src={PurpleHearIcon} alt="Purple Heart" />
        </span>
      </div>
    </div>
  );
}
