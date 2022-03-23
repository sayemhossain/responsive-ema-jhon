import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //   fetching data form database
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="shop-container">
        <div className=" product-container">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>
        <div className="cart-container">
          <h5 className="cart-header text-center mt-4 text-uppercase">
            Order Summary
          </h5>
          <Cart key={cart.id} cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
