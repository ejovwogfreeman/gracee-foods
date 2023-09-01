import React from "react";
import "../css/Navbar.css";
import MuiDrawer from "./MuiDrawer";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
          <span>
            <h2>GRACEE</h2>
            <span>foods</span>
          </span>
        </Link>
      </div>
      <div className="links">
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/signin" style={{ marginRight: "10px" }}>
          Login
        </Link>
        <Link
          to="/signup"
          style={{
            marginRight: "10px",
            backgroundColor: "#E2B887",
            color: "black",
          }}
        >
          Sign Up
        </Link>
      </div>
      <div className="mui-drawer">
        <MuiDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
