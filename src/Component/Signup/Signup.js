import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import googleImg from "../../images/google.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // this is for email
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  // this is for password
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  // this is for password
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    console.log(confirmPassword);
  };
  return (
    <div>
      <div className="signUp-form py-2">
        <div className="row p-5">
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-12 col-md-4 p-4 sign-up px-5">
            <form onSubmit={handleCreateUser}>
              <h3 className="text-center">Sign Up</h3>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control form-control-sm"
                  id="email"
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              <div class="col-12 mt-3">
                <label for="inputPassword4" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="password"
                  onBlur={handlePasswordBlur}
                  required
                />
              </div>
              <div class="col-12 mt-3">
                <label for="inputPassword4" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control form-control-sm"
                  id="password"
                  onBlur={handleConfirmPasswordBlur}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mx-auto mt-4">
                <button type="submit" className="btn btn-danger">
                  Sign Up
                </button>
              </div>
            </form>
            <p className="text-center mt-2">
              Already have an account?
              <Link className="ms-1 login-link" to="/login">
                Login
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

export default Signup;
