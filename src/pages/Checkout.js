import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
// icons
import { BiArrowBack } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// images
import watch from "../images/watch.jpg";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Checkout = () => {
  return (
    <>
      <div>
        <Meta title={"Checkout"} />
        {/* <BreadCrumb title="Checkout" /> */}
        <Container class1="checkout-wrapper py-5 home-wrapper-2">
          <div className="row">
            {/* Left */}
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Checkout</h3>
                {/* Nav */}
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol
                    className="breadcrumb d-flex flex align-items-center gap-10"
                    style={{ borderBottom: "none" }}
                  >
                    <li className="breadcrumb-item">
                      <Link to="/cart" className="text-dark">
                        Cart
                      </Link>
                    </li>
                    <MdOutlineKeyboardArrowRight />
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    <MdOutlineKeyboardArrowRight />
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    <MdOutlineKeyboardArrowRight />
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                {/* Contact Information */}
                <h4 className="title">Contact Information</h4>
                {/* user details */}
                <p className="user-details">John Smith, Smith@gmail.com</p>
                {/* Shipping Address */}
                <div className="mt-0">
                  <h4 className="title mb-3">Shipping Address</h4>
                  {/* form */}
                  <form
                    action=""
                    className="d-flex flex-wrap gap-15 justify-content-between"
                  >
                    {/* Country */}
                    <div className="w-100">
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option value="" selected disabled>
                          Select Country
                        </option>
                      </select>
                    </div>
                    {/* First name */}
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    {/* Last name */}
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                    {/* Address */}
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    {/* Suite */}
                    <div className="w-100">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Apartment, Suite, etc"
                      />
                    </div>
                    {/* City */}
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="City"
                      />
                    </div>
                    {/* State */}
                    <div className="flex-grow-1">
                      <select
                        name=""
                        id=""
                        className="form-control form-select"
                      >
                        <option value="" selected disabled>
                          Select State
                        </option>
                      </select>
                    </div>
                    {/* Zip Code */}
                    <div className="flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ZipCode"
                      />
                    </div>
                    {/* Button */}
                    <div className="w-100 mt-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to="/cart"
                          className="text-dark d-flex flex align-items-center gap-10"
                        >
                          <BiArrowBack className="me-2" />
                          Return to Cart
                        </Link>
                        <Link to="/shipping" className="button">
                          Continue to Shipping
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-5">
              <div className="border-bottom py-4 d-flex flex-column ">
                {/* Product 1 */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* details */}
                  <div className="checkout-col-1 d-flex align-items-center gap-15">
                    <div className="w-25 position-relative">
                      <span className="checkout-badge">1</span>
                      <img className="img-fluid" src={watch} alt="Product" />
                    </div>
                    <div className="checkout-title w-75">
                      <h4>Product Name</h4>
                      <div className="d-flex gap-3">
                        <p>S / #fsdgjm</p>
                      </div>
                    </div>
                  </div>
                  {/* price */}
                  <div className="checkout-col-2 text-end">
                    <h5>IDR 1.000.000</h5>
                  </div>
                </div>
                {/* Product 2 */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {/* details */}
                  <div className="checkout-col-1 d-flex align-items-center gap-15">
                    <div className="w-25 position-relative">
                      <span className="checkout-badge">1</span>
                      <img className="img-fluid" src={watch} alt="Product" />
                    </div>
                    <div className="checkout-title w-75">
                      <h4>Product Name</h4>
                      <div className="d-flex gap-3">
                        <p>S / #fsdgjm</p>
                      </div>
                    </div>
                  </div>
                  {/* price */}
                  <div className="checkout-col-2 text-end">
                    <h5>IDR 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                {/* Subtotal */}
                <div className="d-flex justify-content-between align-items-center">
                  <p>Subtotal</p>
                  <p>IDR 100</p>
                </div>
                {/* Shipping */}
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">IDR 100</p>
                </div>
              </div>
              {/* total */}
              <div className="d-flex justify-content-between align-items-center pt-4 pb-2">
                <h4>Total</h4>
                <h5>IDR 100</h5>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Checkout;
