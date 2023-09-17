import React, { useState } from "react";
import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import img7 from "../assets/profile.png";
import ScrollToTop from "../components/ScrollToTop";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";

const Dashboard = ({ meals, onAdd, count }) => {
  let user = JSON.parse(sessionStorage.getItem("user"));
  let timeDay = new Date().getHours();
  let timeGreet = null;
  if (timeDay < 12) {
    timeGreet = "Good Morinng";
  } else if (timeDay < 16) {
    timeGreet = "Good Afternoon";
  } else if (timeDay < 21) {
    timeGreet = "Good Evening";
  } else {
    timeGreet = "Good Night";
  }

  return (
    <div className="dashboard-container">
      <ScrollToTop count={count} />
      {/* <Navbar /> */}
      {user ? (
        <div className="profile-head">
          <div className="user-name">
            <h3>
              {timeGreet}, {user?.name}!
            </h3>
            <p>What delicious meal are you craving today?</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="meals-box">
        {meals.map((meal) => {
          return (
            <div key={meal.id} className="meals">
              <Link to={`/meal/${meal.id}`}>
                <img src={meal.image} alt="" />
              </Link>
              <Link to={`/meal/${meal.id}`} className="h5-link">
                <h5>{meal.title}</h5>
              </Link>
              <p>{meal.description}</p>
              <div className="price-action">
                <strong>₦{meal.price}</strong>
                <button onClick={() => onAdd(meal)}>{meal.action}</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
