import React from "react";
import "./Navbar.css";
import logo from "../../images/Logo.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Inventory</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
