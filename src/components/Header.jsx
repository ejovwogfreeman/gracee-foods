import React from "react";
import "../css/Header.css";
// import img from "../assets/header-img.png";
// import img1 from "../assets/googleplay.png";
// import img2 from "../assets/appstore.png";
import Slider from "./Slider";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-text">
        <h1>
          Order <span style={{ color: "#E2B887" }}>food</span> anytime, <br />{" "}
          anywhere
        </h1>
        <p>
          Browse from our list of specials to place your orders and have food{" "}
          <br />
          delivered to you in no time. Affordable, tasty and fast!
        </p>
        <Link to="/">Buy Now</Link>
      </div>
      <div className="header-img">
        <Slider />
        {/* <img src={img} alt="food" /> */}
      </div>
    </header>
  );
};

export default Header;
