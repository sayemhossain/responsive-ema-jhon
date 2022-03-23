import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;
  return (
    <div className="product">
      <div className="card bg-light">
        <div className="text-center mt-2">
          <img src={img} className="card-img-top img-fluid" alt="" />
        </div>
        <div className="card-body ms-2">
          <h6 className="card-title">{name}</h6>
          <p>Price: ${price}</p>
          <div className="card-text">
            <p className=" mb-0">Manufacturer: {seller}</p>
            <p>Rating: {ratings} stars</p>
          </div>
          <button className="btn-cart bg-success">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
