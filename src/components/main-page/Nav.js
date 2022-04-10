import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
// import LoginIcon from "@mui/icons-material/Login";
// import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  const [showDarkNavBar, setShowDarkNavBar] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      setShowDarkNavBar(true);
    } else {
      setShowDarkNavBar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${showDarkNavBar && "nav--dark"}`}>
      <div className="nav__left">
        <img
          className="nav__logo"
          src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
          alt="Netflix Logo"
        />
        {/* Todo: Make use of the active class for chosen links */}
        <Link
          to="/main"
          className={`nav__links ${activeLink === "home" && "active"}`}
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        {}
        <Link
          to="/main"
          className={`nav__links ${activeLink === "series" && "active"}`}
          onClick={() => setActiveLink("series")}
        >
          Series
        </Link>
        <Link
          to="/main"
          className={`nav__links ${activeLink === "films" && "active"}`}
          onClick={() => setActiveLink("films")}
        >
          Films
        </Link>
      </div>
      <div className="nav__right">
        <Link
          to="/"
          className={`nav__links  nav__iconsRoute`}
          onClick={() => setActiveLink("recently added")}
        >
          Home Page
        </Link>
        <Link
          to="/login"
          className={`nav__links 
          nav__iconsRoute`}
          onClick={() => setActiveLink("my list")}
        >
          Login Page
        </Link>
        <SearchIcon className="nav__icons " />
        <NotificationsIcon className="nav__icons" />
        <img
          className="nav__profileIcon"
          src="https://ih0.redbubble.net/image.618385909.1713/flat,1000x1000,075,f.u1.jpg"
          alt="Neflix Profile Icon"
        />
      </div>
    </div>
  );
};

export default Nav;
