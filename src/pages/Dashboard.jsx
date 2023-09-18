import React, { useState } from "react";
import "../css/Dashboard.css";
import ScrollToTop from "../components/ScrollToTop";

const Dashboard = ({ meals, onAdd, count, openSingleFoodModal }) => {
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
              <img
                src={meal.image}
                alt=""
                onClick={() => openSingleFoodModal(meal)}
              />
              <h5>{meal.title}</h5>
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
