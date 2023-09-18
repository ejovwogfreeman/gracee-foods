import React from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation } from "react-router-dom";

const Navbar = ({ count, showSide, handleShowSide }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/signup" || location.pathname === "/signin" ? (
        ""
      ) : (
        <>
          <nav className={location.pathname === "/" ? "nav" : "nav white"}>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="" />
                <span className="text">
                  <h2>GRACEE</h2>
                  <span className="foods">foods</span>
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
            <div className="side-bar">
              <AiOutlineMenu onClick={handleShowSide} />
            </div>
          </nav>
          {showSide && (
            <SideNav
              showSide={showSide}
              handleShowSide={handleShowSide}
              count={count}
            />
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
