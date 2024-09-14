import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
// images
import watch from "../images/watch.jpg";
// icons
import { RiDeleteBin6Line } from "react-icons/ri";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Cart = () => {
  return (
    <>
      <div>
        <Meta title={"Cart"} />
        <BreadCrumb title="Cart" />
        <Container class1="cart-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              {/* cart header */}
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {/* cart data 1 */}
              <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                {/* Product */}
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img className="img-fluid" src={watch} alt="Product" />
                  </div>
                  <div className="w-75">
                    <h5>Product Name</h5>
                    <div className="d-flex gap-3">
                      <p>color: Green</p>
                      <p>Size: medium</p>
                    </div>
                  </div>
                </div>
                {/* Price */}
                <div className="cart-col-2">
                  <h5 className="price">IDR 500</h5>
                </div>
                {/* Quantity */}
                <div className="cart-col-3 d-flex flex-row align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      placeholder="1"
                    />
                  </div>
                  <div>
                    <RiDeleteBin6Line className="text-danger" />
                  </div>
                </div>
                {/* Total */}
                <div className="cart-col-4">
                  <h5 className="price">IDR 500</h5>
                </div>
              </div>
            </div>
            {/* Link - Continue Shopping */}
            <div className="cart-checkout col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to="/store" className="button">
                  Continue Shopping
                </Link>

                <div className="d-flex flex-column align-items-end">
                  <h5>Subtotal : IDR 500</h5>
                  <p>Taxes and Shipping Calculated at Checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
