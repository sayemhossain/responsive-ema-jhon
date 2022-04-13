import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import "./Shipment.css";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  //   this is for name
  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  // this is for password
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  // this is for password
  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { name, email, address, phoneNumber };
    console.log(shipping);
  };

  return (
    <div>
      <div className="signUp-form py-2">
        <div className="row p-5">
          <div className="col-lg-4 col-md-4"></div>
          <div className="col-12 col-md-4 p-4 sign-up px-5">
            <form onSubmit={handleCreateUser}>
              <h3 className="text-center text-uppercase text-success mb-5">
                Shipping Information
              </h3>
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="name"
                  onBlur={handleNameBlur}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  readOnly
                  className="form-control form-control-sm"
                  id="email"
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="inputPassword4" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="text"
                  onBlur={handleAddressBlur}
                  required
                />
              </div>
              <div className="col-12 mt-3">
                <label htmlFor="number" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control form-control-sm"
                  id="number"
                  onBlur={handlePhoneNumberBlur}
                  required
                />
              </div>
              <div className="col-12 col-md-6 mx-auto mt-4">
                <button type="submit" className="btn btn-danger">
                  Add Shipping
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
