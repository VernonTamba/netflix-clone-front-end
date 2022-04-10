import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginPage">
      <img
        className="loginPage__logo"
        src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
        alt="Netflix Logo"
      />
      {/* div can be changed to form */}
      <div className="loginPage__form">
        <h1>Sign in</h1>
        <input type="text" placeholder="Email or phone number" />
        <input type="password" placeholder="Password" />
        {/* Link can be changed to button */}
        <Link className="loginPage__link" to="/main">
          Sign In
        </Link>
        <Link className="loginPage__backlink" to="/">
          Back
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
