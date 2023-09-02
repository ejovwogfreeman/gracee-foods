import React, { useEffect, Suspense, lazy } from "react";
// import "../css/Home.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Meals from "../components/Meals";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Header />
      <Meals />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
