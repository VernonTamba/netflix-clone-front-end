import React from "react";
import "./MainPage.css";
import Nav from "./Nav";
import Banner from "./Banner";
import Rows from "./Rows";

const MainPage = () => {
  return (
    <div className="mainPage">
      {/* NAV */}
      <Nav />

      {/* BANNER */}
      <Banner />

      {/* ROWS */}
      <Rows />
    </div>
  );
};

export default MainPage;
