import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import NetflixLogo from "../../img/netflix-landing-page-bg.png";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="landingPage__content">
        <h1>NETFLIX CLONE</h1>
        <h3>(Front-End)</h3>
        <div className="landingPage__contentLink">
          <Link className="landingPage__links" to="/login">
            Login Page
          </Link>
          <Link className="landingPage__links" to="/main">
            Netflix Page
          </Link>
        </div>
      </div>
      <img className="landingPage__logo" src={NetflixLogo} alt="Netflix Logo" />
    </div>
  );
};

export default LandingPage;
