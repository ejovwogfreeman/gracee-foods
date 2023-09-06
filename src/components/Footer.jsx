import React, { useState, useEffect } from "react";
import "../css/Footer.css";
// import img1 from "../assets/googleplay.png";
// import img2 from "../assets/appstore.png";
import {
  // AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  let year = new Date().getFullYear();
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  }, []);
  return (
    <footer>
      <Link
        to="https://wa.me/+2348164471007"
        className={show ? "showwhatsapp" : "whatsapp"}
      >
        <AiOutlineWhatsApp />
      </Link>

      <div className="main-footer">
        <div>
          <h5>Company</h5>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Career</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Safety Center</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Legal</h5>
          <ul>
            <li>
              <a href="">Cookies Policy</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms of Service</a>
            </li>
            <li>
              <a href="">Dispute resolution</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Food Card</h5>
          <ul>
            <li>
              <a href="">Get Food Card</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="sub-footer">
        <p>&copy; {year} GRACEE FOODS, All rights reserved.</p>
        <div className="icons">
          {/* <a href="" className="icon">
            <AiOutlineFacebook />
          </a> */}
          <a href="https://www.instagram.com/graceefoods/" className="icon">
            <AiOutlineInstagram />
          </a>
          <a href="https://twitter.com/graceefoods" className="icon">
            <AiOutlineTwitter />
          </a>
          <a href="https://www.youtube.com/@graceefoods " className="icon">
            <AiFillYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
