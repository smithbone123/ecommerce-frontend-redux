import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Wishlist = () => {
  return (
    <>
      <div>
        <Meta title={"Wishlist"} />
        <BreadCrumb title="Wishlist" />
        <Container class1="wishlist-wrapper py-5 home-wrapper-2">
          <div className="row">
            {/* Wishlist 1 */}
            <div className="col-3">
              {/* compare product card */}
              <div className="wishlist-card position-relative">
                {/* cross */}
                <img
                  className="position-absolute cross img-fluid"
                  src="/images/icons/cross.svg"
                  alt="cross"
                />
                {/* image */}
                <div className="product-card-image">
                  <img src="/images/watch.jpg" alt="compare product" />
                </div>
                {/* info */}
                <div className="wishlist-details">
                  <h5 className="title">Lorem ipsum dolor sit consectetur</h5>
                  <h6 className="price mb-3 mt-3">IDR 100</h6>
                  {/*  */}
                </div>
              </div>
            </div>
            {/* Wishlist 2 */}
            <div className="col-3">
              {/* compare product card */}
              <div className="wishlist-card position-relative">
                {/* cross */}
                <img
                  className="position-absolute cross img-fluid"
                  src="/images/icons/cross.svg"
                  alt="cross"
                />
                {/* image */}
                <div className="product-card-image">
                  <img src="/images/watch.jpg" alt="compare product" />
                </div>
                {/* info */}
                <div className="wishlist-details">
                  <h5 className="title">Lorem ipsum dolor sit consectetur</h5>
                  <h6 className="price mb-3 mt-3">IDR 100</h6>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Wishlist;
