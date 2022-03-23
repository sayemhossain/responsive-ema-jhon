import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  return (
    <div className="p-3">
      <p>Selected Items: {cart.legth}</p>
      <p>Total Price: ${cart.legth}</p>
      <p>Total Shipping Charge: ${cart.legth}</p>
      <p>Tax: ${cart.legth}</p>
      <h4>Grand Total: ${cart.legth}</h4>
      <div className="btn btn-one">Clear Cart</div>
      <div className="btn btn-two">Review Order</div>
    </div>
  );
};

export default Cart;
