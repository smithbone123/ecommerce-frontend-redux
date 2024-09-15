import React from "react";
import { Link, useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
// images
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-2.jpg";
// icons
import prodcompare from "../images/icons/prodcompare.svg";
import wish from "../images/icons/wish.svg";
import addtocart from "../images/icons/add-cart.svg";
import view from "../images/icons/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      {/* card 1 */}
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to={`${location.pathname === "/" ? "product/:id" : ""}`}
          className="product-card position-relative"
        >
          {/* wishlist icon */}
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>

          {/* image */}
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="Product img" />
            <img className="img-fluid" src={watch2} alt="Product img" />
          </div>

          {/* details */}
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Headphone for students</h5>
            <ReactStars
              count={5}
              //   onChange={ratingChanged}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit consectetur adipisicing elit. Magnam quae,
              velit reprehenderit modi harum beatae earum perspiciatis cumque
              nam distinctio
            </p>
            <p className="price">IDR 100</p>
          </div>

          {/* action bar */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* 1 */}
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              {/* 2 */}
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              {/* 3 */}
              <button className="border-0 bg-transparent">
                <img src={addtocart} alt="add to cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      {/* card 2 */}
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link to="/product/:id" className="product-card position-relative">
          {/* wishlist icon */}
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="wishlist" />
            </button>
          </div>

          {/* image */}
          <div className="product-image">
            <img className="img-fluid" src={watch} alt="Product img" />
            <img className="img-fluid" src={watch2} alt="Product img" />
          </div>

          {/* details */}
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">Headphone for students</h5>
            <ReactStars
              count={5}
              //   onChange={ratingChanged}
              value={4}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit consectetur adipisicing elit. Magnam quae,
              velit reprehenderit modi harum beatae earum perspiciatis cumque
              nam distinctio
            </p>
            <p className="price">IDR 100</p>
          </div>

          {/* action bar */}
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* 1 */}
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              {/* 2 */}
              <button className="border-0 bg-transparent">
                <img src={view} alt="view" />
              </button>
              {/* 3 */}
              <button className="border-0 bg-transparent">
                <img src={addtocart} alt="add to cart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
