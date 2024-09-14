import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const CompareProduct = () => {
  return (
    <>
      <div>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            {/* Compare product 1 */}
            <div className="col-3">
              {/* compare product card */}
              <div className="compare-product-card position-relative">
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
                <div className="compare-product-details">
                  <h5 className="title">Lorem ipsum dolor sit consectetur</h5>
                  <h6 className="price mb-3 mt-3">IDR 100</h6>
                  {/*  */}
                  <div>
                    {/* Brand */}
                    <div className="product-detail">
                      <h5>Brand :</h5>
                      <p>Havels</p>
                    </div>
                    {/* Type */}
                    <div className="product-detail">
                      <h5>Type :</h5>
                      <p>Computers</p>
                    </div>
                    {/* SKU */}
                    {/* <div className="product-detail">
                        <h5>SKU :</h5>
                        <p>SKU033</p>
                      </div> */}
                    {/* Availability */}
                    <div className="product-detail">
                      <h5>Availability :</h5>
                      <p>In Stock</p>
                    </div>
                    {/* Color */}
                    <div className="product-detail">
                      <h5>Color :</h5>
                      <Color />
                    </div>
                    {/* Size */}
                    <div className="product-detail">
                      <h5>Size :</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Compare product 2 */}
            <div className="col-3">
              {/* compare product card */}
              <div className="compare-product-card position-relative">
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
                <div className="compare-product-details">
                  <h5 className="title">Lorem ipsum dolor sit consectetur</h5>
                  <h6 className="price mb-3 mt-3">IDR 100</h6>
                  {/*  */}
                  <div>
                    {/* Brand */}
                    <div className="product-detail">
                      <h5>Brand :</h5>
                      <p>Havels</p>
                    </div>
                    {/* Type */}
                    <div className="product-detail">
                      <h5>Type :</h5>
                      <p>Computers</p>
                    </div>
                    {/* SKU */}
                    {/* <div className="product-detail">
                        <h5>SKU :</h5>
                        <p>SKU033</p>
                      </div> */}
                    {/* Availability */}
                    <div className="product-detail">
                      <h5>Availability :</h5>
                      <p>In Stock</p>
                    </div>
                    {/* Color */}
                    <div className="product-detail">
                      <h5>Color :</h5>
                      <Color />
                    </div>
                    {/* Size */}
                    <div className="product-detail">
                      <h5>Size :</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                        <p>L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CompareProduct;
