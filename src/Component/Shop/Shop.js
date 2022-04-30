import React, { useEffect } from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { deleteShoppingCart } from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // this is for pagination
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, []);
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product._id != selectedProduct._id);
      exists.quantity += 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  // this is clear cart and also remove cart from localStorage
  const handleDeleteBtn = () => {
    deleteShoppingCart();
    setCart([]);
  };

  return (
    <div className="container-fluid">
      <div className="shop-container">
        <div className=" product-container mx-auto">
          {products.map((product) => (
            <Product
              key={product._id}
              product={product}
              handleAddToCart={() => handleAddToCart(product)}
            ></Product>
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                className={page == number ? "selected" : ""}
                onClick={() => setPage(number)}
              >
                {number}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container">
          <h5 className="cart-header text-center mt-4 text-uppercase">
            Order Summary
          </h5>
          <Cart key={cart._id} cart={cart} handleDeleteBtn={handleDeleteBtn}>
            <Link className="review-order" to="/orders">
              Review Order
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
