import React from "react";
import "./Navbar.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
            <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
              <Link className="me-3 nav-item" to="/shop">
                Shop
              </Link>
              <Link className="me-3 nav-item" to="/orders">
                Order
              </Link>
              <Link className="me-3 nav-item" to="/inventory">
                Inventory
              </Link>
              <Link className="nav-item me-3 " to="/about">
                About
              </Link>
              {user ? (
                <button onClick={handleSignOut} className="btn btn-danger py-1">
                  Sign out
                </button>
              ) : (
                <Link className="nav-item" to="/login">
                  Login
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
