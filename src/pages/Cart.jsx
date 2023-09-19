import React from "react";
import "../css/Cart.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop.jsx";
// import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const Cart = ({ meals, onRemove, openSingleFoodModal }) => {
  const totalPrice = meals.reduce((a, c) => a + c.price * c.quantity, 0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/checkout");
  };

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
      <h3>Your Cart</h3>
      {meals.length > 0 ? (
        <>
          <div className="table">
            <table>
              <tr>
                <th>MEAL</th>
                <th>QUANTITY</th>
                <th>UNIT PRICE</th>
                <th>SUB TOTAL </th>
                <th>ACTION</th>
              </tr>

              {meals.map((meal) => {
                return (
                  <tr key={meal.id}>
                    <td className="image">
                      <img
                        src={meal.image}
                        alt=""
                        onClick={() => openSingleFoodModal(meal)}
                      />
                      <div className="title">
                        <h5>{meal.title}</h5>
                      </div>
                    </td>
                    <td>{meal.quantity}</td>
                    <td>₦{meal.price}</td>
                    <td>₦{meal.quantity * meal.price}</td>
                    <td>
                      <button onClick={() => onRemove(meal)}>REMOVE</button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
          <button className="button" onClick={handleSubmit}>
            Checkout
          </button>
        </>
      ) : (
        "Your cart is crrently empty..."
      )}
    </div>
  );
};

export default Cart;
