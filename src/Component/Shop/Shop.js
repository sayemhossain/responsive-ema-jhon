import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

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
        <div className="cart-container bg-warning">
          <p>hi</p>
        </div>
      </div>
    </div>
  );
};

export default Shop;
