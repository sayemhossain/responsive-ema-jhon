import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import googleImg from "../../images/google.svg";

const Login = () => {
  return (
    <div>
      <div className=" my-2">
        <div className="row p-5">
          <div className="col-md-4"></div>
          <div className="col-12 col-md-4 p-5 login px-5">
            <form>
              <h3 className="text-center">Login</h3>
              <div className="col-12">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="email"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  id="password"
                  required
                />
              </div>
              <div className="col-12 col-md-6 mx-auto mt-4">
                <button className="btn btn-danger">Login</button>
              </div>
            </form>
            <p className="text-center mt-2">
              New to Ema-john?
              <Link className="ms-1 signup-link" to="/signup">
                Create New Account
              </Link>
            </p>
            <div className="d-flex justify-content-center px-5">
              <hr className="w-50" /> <p className="px-2">or</p>
              <hr className="w-50" />
            </div>
            <div className="text-center w-100">
              <button className="btn">
                <img src={googleImg} alt="" /> Continue with Google
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
