import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <div>
        <Meta title={"Store"} />
        <BreadCrumb title="Store" />
        <Container class1="store-wrapper home-wrapper-2 py-5">
          <div className="row">
            {/* Left */}
            <div className="col-3">
              {/* Shop By Categories */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>
                      <Link to="/">Watch</Link>
                    </li>
                    <li>
                      <Link to="/">Camera</Link>
                    </li>
                    <li>
                      <Link to="/">Laptop</Link>
                    </li>
                    <li>
                      <Link to="/">Shoe</Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Filter By */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  {/* Availability */}
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    {/* First Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    {/* Second Checkbox */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out od Stock (0)
                      </label>
                    </div>
                  </div>
                  {/* Price */}
                  <h5 className="sub-title">Price</h5>
                  <div>
                    {/* <div className="d-flex align-items-center gap-10"> */}
                    {/* From */}
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        style={{
                          height: "35px",
                          marginBottom: "10px",
                        }}
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    {/* To */}
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        style={{ height: "35px" }}
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  {/* Colors */}
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  {/* Size */}
                  <h5 className="sub-title">Size</h5>
                  <div>
                    {/* Size 1 */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (2)
                      </label>
                    </div>
                    {/* Size 2 */}
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Product Tags */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Speaker
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Tablet
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Gears
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Monitor
                    </span>
                    <span className="badge bg-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              {/* Random Products */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  {/* random 1 */}
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="/images/watch.jpg"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5 className="product-title">
                        Kids Headphones bulk 10 pack multi color for students
                      </h5>
                      <ReactStars
                        count={5}
                        //   onChange={ratingChanged}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b className="price">IDR 100</b>
                    </div>
                  </div>
                  {/* random 2 */}
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        className="img-fluid"
                        src="/images/watch.jpg"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5 className="product-title">
                        Kids Headphones bulk 10 pack multi color for students
                      </h5>
                      <ReactStars
                        count={5}
                        //   onChange={ratingChanged}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b className="price">IDR 100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-9">
              {/* Sort Filter */}
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  {/* left */}
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By :
                    </p>
                    <select
                      name=""
                      defaultValue={"manual"}
                      //
                      className="form-control form-select"
                      id=""
                    >
                      {/* <option disabled value="DEFAULT">
                        Select
                      </option> */}
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabetically, A - Z
                      </option>
                      <option value="title-descending">
                        Alphabetically, Z - A
                      </option>
                      <option value="price-ascending">Price, Low - High</option>
                      <option value="price-descending">
                        Price, High - Low
                      </option>
                      <option value="created-ascending">Date, Old - New</option>
                      <option value="created-descending">
                        Date, New - Old
                      </option>
                    </select>
                  </div>
                  {/* Right */}
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        className="d-block img-fluid"
                        src="/images/icons/gr4.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        className="d-block img-fluid"
                        src="/images/icons/gr3.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        className="d-block img-fluid"
                        src="/images/icons/gr2.svg"
                        alt="grid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        className="d-block img-fluid"
                        src="/images/icons/gr.svg"
                        alt="grid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Product List */}
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default OurStore;
