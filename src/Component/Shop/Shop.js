import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  //   fetching data form database

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedProduct = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedProduct.push(addedProduct);
      }
    }
    setCart(savedProduct);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id != selectedProduct.id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
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
