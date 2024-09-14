import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";

// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const SingleProduct = () => {
  const props = {
    zoomWidth: 650,
    img: "/images/shirt.png",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <div>
        <Meta title={"Single Product"} />
        <BreadCrumb title="Single Product" />
        {/* Product detail */}
        <Container class1="main-product-wrapper py-5 home-wrapper-2">
          <div className="row">
            {/* Left */}
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="/images/shirt.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/shirt.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/shirt.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="/images/shirt.png"
                    alt="images"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-6">
              <div className="main-product-details">
                {/* Title */}
                <div className="border-bottom">
                  <h3 className="title">
                    Ullamco esse amet dolore occaecat ad nostrud
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  {/* Price */}
                  <p className="price">IDR 100</p>
                  {/* Rating */}
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={4}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">2 Reviews</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>

                {/* Form */}
                <div className="py-3">
                  <form action="">
                    {/* Type */}
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Type :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    {/* Brand */}
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Brand :</h3>
                      <p className="product-data">Havels</p>
                    </div>
                    {/* Category */}
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Category :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    {/* Tags */}
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Tags :</h3>
                      <p className="product-data">Watch</p>
                    </div>
                    {/* Availability */}
                    <div className="d-flex gap-10 align-items-center my-2">
                      <h3 className="product-heading">Availability :</h3>
                      <p className="product-data">In Stock</p>
                    </div>
                    {/* Size */}
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Size :</h3>
                      <div className="d-flex flex-wrap gap-10">
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          S
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          M
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XL
                        </span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">
                          XXL
                        </span>
                      </div>
                    </div>
                    {/* Color */}
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <Color />
                    </div>
                    {/* Quantity */}
                    <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                      <h3 className="product-heading">Quantity :</h3>
                      {/* input */}
                      <div className="">
                        <input
                          type="number"
                          name=""
                          id=""
                          min={1}
                          max={10}
                          placeholder="1"
                          style={{ width: "70px" }}
                          className="form-control"
                        />
                      </div>
                      {/* button */}
                      <div className="d-flex align-items-center gap-15">
                        <button className="button border-0" type="submit">
                          Add to Cart
                        </button>
                        <button to="/register" className="button signup">
                          Buy it Now
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* Wishlist / Compare */}
                  <div className="d-flex align-items-center gap-15 ">
                    <div>
                      <a href="/">
                        <img
                          className="fs-5 me-2"
                          src="/images/icons/heart.png"
                          alt="Compare"
                          width={16}
                          height={16}
                        />
                        Add to Wishlist
                      </a>
                    </div>
                    <div>
                      <a href="/">
                        <img
                          className="fs-5 me-2"
                          src="/images/icons/swap.png"
                          alt="Compare"
                          width={16}
                          height={16}
                        />
                        Add to Compare
                      </a>
                    </div>
                  </div>
                  {/* Shipping & Returns */}
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Qui cupidatat id et excepteur. Proident eiusmod pariatur
                      sit cillum excepteur aliqua voluptate ex ad. Elit
                      cupidatat <b>consectetur tempor</b>
                    </p>
                  </div>
                  {/* Copy Product Link */}
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <a
                      href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard("/images/shirt.png");
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/* Descriptions */}
        <Container class1="description-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Descriptions</h4>
              <div className="bg-white p-5">
                <p>
                  Lorem ipsum dolor sit consectetur adipisicing elit. Magnam
                  quae, velit reprehenderit modi harum beatae earum perspiciatis
                  cumque nam distinctio, vero ipsam ullam eum eligendi animi
                  nostrum
                </p>
              </div>
            </div>
          </div>
        </Container>
        {/* Reviews */}
        <Container id="review" class1="reviews-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  {/* Customer Reviews */}

                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        value={4}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {/* Write a Review */}
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>

                {/* Review Form */}
                <div className="review-form py-4">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    {/* Write a Review */}
                    <div>
                      <textarea
                        name=""
                        placeholder="Comment"
                        className="form-control w-100"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    {/* button */}
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>

                {/* Reviews */}
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">John Smith</h6>
                      <ReactStars
                        count={5}
                        value={4}
                        edit={true}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Elit pariatur nulla qui labore. Anim aliquip nostrud eu
                      eiusmod anim officia. Mollit do enim ex qui aliqua eu
                      tempor velit sint esse dolore ea. Nostrud excepteur
                      aliquip ut proident. Sint dolor anim eu ullamco do nisi.
                      Ullamco irure aliqua eiusmod do irure aliqua. Qui non enim
                      aute
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/* Related products */}
        <Container class1="popular-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Related Products</h3>
            </div>
          </div>
          <div className="row">
            {/* Product card 1 */}
            <ProductCard />
            {/* Product card 2 */}
            <ProductCard />
            {/* Product card 3 */}
            <ProductCard />
            {/* Product card 4 */}
            <ProductCard />
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleProduct;
