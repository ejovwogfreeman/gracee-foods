import React from "react";
import "../css/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ count, showSide, handleShowSide, user }) => {
  const location = useLocation();
  const logout = () => {
    sessionStorage.removeItem("user");
    toast.success("You Logged Out");
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  };
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
              {user ? (
                <>
                  {" "}
                  <Link to="/" style={{ marginRight: "10px" }}>
                    Home
                  </Link>
                  <Link to="/dashboard" style={{ marginRight: "10px" }}>
                    Dashboard
                  </Link>
                  <Link to="/profile" style={{ marginRight: "10px" }}>
                    Profile
                  </Link>
                  <Link to="/orders" style={{ marginRight: "10px" }}>
                    Orders
                  </Link>
                  <Link
                    to="/cart"
                    className="cart-comp"
                    style={{ marginRight: "10px" }}
                  >
                    <AiOutlineShoppingCart />
                    <span className="badge">{count}</span>
                  </Link>
                  <span
                    to=""
                    style={{
                      marginRight: "10px",
                      backgroundColor: "#E2B887",
                      color: "black",
                      cursor: "pointer",
                    }}
                    className="logout"
                    onClick={logout}
                  >
                    Logout
                  </span>
                </>
              ) : (
                <>
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
                </>
              )}
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
              user={user}
              logout={logout}
            />
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
