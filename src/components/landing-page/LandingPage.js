import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

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
      <img
        className="landingPage__logo"
        src="https://proofmart.com/wp-content/uploads/2021/06/598-2-1-2048x1365.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default LandingPage;
