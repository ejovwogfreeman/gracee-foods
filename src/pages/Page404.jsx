import React from "react";
import "../css/Cart.css";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Page404 = () => {
  return (
    <div className="cart-container">
      <ScrollToTop />
      <div className="bg-color"></div>
      <div className="cart-box">
        <h3>Uh Oooh ;-( Your way?...</h3>
        <Link to="/" className="lost">
          click here to go back home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
