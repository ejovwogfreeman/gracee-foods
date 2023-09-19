import React from "react";
import "../css/SideNav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineGift,
  AiOutlineClose,
  AiOutlineShoppingCart,
  AiOutlineDashboard,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const SideNav = ({ count, handleShowSide, user, logout }) => {
  return (
    <>
      <div className="dark-bg" onClick={handleShowSide}></div>
      <div className="sidebar">
        <div className="logo-cont">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
              <span className="text">
                <h2>GRACEE</h2>
                <span className="foods">foods</span>
              </span>
            </Link>
          </div>
          <AiOutlineClose onClick={handleShowSide} />
        </div>
        <ul className="menus">
          {user ? (
            <>
              <li>
                <Link to="/" onClick={handleShowSide}>
                  <BiHome className="icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" onClick={handleShowSide}>
                  <AiOutlineDashboard className="icon" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" onClick={handleShowSide}>
                  <CgProfile className="icon" />
                  Your Profile
                </Link>
              </li>
              <li>
                <Link to="/orders" onClick={handleShowSide}>
                  <AiOutlineGift className="icon" />
                  Orders{" "}
                  <div className="x" style={{ background: "#06E775" }}>
                    5
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/cart" onClick={handleShowSide}>
                  <AiOutlineShoppingCart className="icon" />
                  Your Cart{" "}
                  <div className="x" style={{ background: "#F3C294" }}>
                    {count}
                  </div>
                </Link>
              </li>
              <li onClick={logout} className="logout-mobile">
                <BiLogOutCircle className="icon" />
                <span>Logout</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" onClick={handleShowSide}>
                  <BiHome className="icon" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/signin" onClick={handleShowSide}>
                  <AiOutlineLogin className="icon" />
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={handleShowSide}>
                  <AiOutlineUserAdd className="icon" />
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
