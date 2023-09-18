import React from "react";
import "../css/Cart.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";

const Cart = ({ meals }) => {
  const totalPrice = meals.reduce((a, c) => a + c.price * c.quantity, 0);
  return (
    <div className="cart-container">
      <ScrollToTop />
      <div className="top-bar">
        <Link to="/dashboard">
          <AiOutlineArrowLeft className="go-back" />
        </Link>
        <p className="total">
          Total: &nbsp;{" "}
          <strong className="t-amnt">₦{totalPrice.toFixed(2)}</strong>{" "}
        </p>
      </div>
      <h3>Your Orders</h3>
      <table>
        <tr>
          <th>MEAL</th>
          <th>QUANTITY</th>
          <th>SUB TOTAL</th>
          <th>STATUS</th>
        </tr>
        {meals.map((meal) => {
          return (
            <tr key={meal.id}>
              <td className="image">
                <img src={meal.image} alt="" />
                <div className="title">
                  <h5>{meal.title}</h5>
                </div>
              </td>
              <td>3</td>
              <td>₦{meal.quantity * meal.price}</td>
              <td
                className={
                  meal.status === "Delivered" ? "delivered" : "cooking"
                }
              >
                {meal.status}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Cart;
