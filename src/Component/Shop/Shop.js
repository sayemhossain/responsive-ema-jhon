import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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
  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
  }, []);
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="container-fluid">
      <div className="shop-container">
        <div className=" product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={() => handleAddToCart(product)}
            ></Product>
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
