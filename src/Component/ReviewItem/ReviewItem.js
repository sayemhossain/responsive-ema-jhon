import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveProduct }) => {
  return (
    <div className="review-item">
      <div className="review-card">
        <div className="review-main">
          <div className="review-img">
            <img src={product.img} alt="" />
          </div>
          <div className="review-txt ms-3">
            <h6>{product.name}</h6>
            <p className="my-0">
              Price: <span className="text-danger">${product.price}</span>
            </p>
            <p className="my-0">
              <small>Quantity: {product.quantity}</small>
            </p>
          </div>
        </div>
        <div
          className="review-btn"
          onClick={() => {
            handleRemoveProduct(product);
          }}
        >
          <FontAwesomeIcon className="icon" icon={faTrashCan} />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
