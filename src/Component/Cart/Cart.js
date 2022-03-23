import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  let quantity = 0;
  let total = 0;
  let shippingCost = 0;
  let tax = 0;
  let grandTotal = 0;

  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shippingCost += product.shipping;
  }

  //this is for tax
  tax = parseFloat(((total * 5) / 100).toFixed(2));
  //this is for grand total
  grandTotal = total + shippingCost + tax;

  return (
    <div className="p-3">
      <p>Selected Items: {cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shippingCost}</p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal}</h4>
      <div className="btn btn-one">Clear Cart</div>
      <div className="btn btn-two">Review Order</div>
    </div>
  );
};

export default Cart;
