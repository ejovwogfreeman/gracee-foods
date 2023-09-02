import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "../assets/header-img.png";
import img2 from "../assets/pasta.png";
import img3 from "../assets/meat.png";
import img4 from "../assets/burger.png";
import "../css/Slider.css";
// import { Link } from "react-router-dom";

const Slider = () => {
  const options = {
    loop: true,
    nav: true,
    navText: ["&#x2770;", "&#x2771;"],
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };

  return (
    <div className="slider-cont">
      <div className="shadow-cont">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="item">
            <img src={img1} alt="" />
            <div className="text">
              <h3>Noodles</h3>
              {/* <Link to="/">View More</Link> */}
            </div>
          </div>
          <div className="item">
            <img src={img2} alt="" />
            <div className="text">
              <h3>Stir Fry Pasta</h3>
              {/* <Link to="/">View More</Link> */}
            </div>
          </div>
          <div className="item">
            <img src={img3} alt="" />
            <div className="text">
              <h3>Meat Balls</h3>
              {/* <Link to="/">View More</Link> */}
            </div>
          </div>
          <div className="item">
            <img src={img4} alt="" />
            <div className="text">
              <h3>Burger</h3>
              {/* <Link to="/">View More</Link> */}
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Slider;
