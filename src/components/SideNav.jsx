import React from "react";
import "../css/SideNav.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineGift, AiOutlineClose } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";

const SideNav = ({ count, handleShowSide }) => {
  return (
    <>
      <div className="dark-bg"></div>
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" /> <h2>Lilies</h2>
          </Link>
          <AiOutlineClose onClick={handleShowSide} />
        </div>
        <ul className="menus">
          <li>
            <Link to="/dashboard">
              <BiHome className="icon" />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <CgProfile className="icon" />
              Your Profile
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <AiOutlineGift className="icon" />
              Orders{" "}
              <div className="x" style={{ background: "#06E775" }}>
                5
              </div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <HiOutlineShoppingCart className="icon" />
              Your Cart{" "}
              <div className="x" style={{ background: "#F3C294" }}>
                {count}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
