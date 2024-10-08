import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex justify-content-bteween">
            <div>
              <img
                className="img-fluid"
                src="/images/watch.jpg"
                alt="Special Product"
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">Havels</h5>
              <h6 className="title">Samsung Galaxy Mobile Phone</h6>
              <ReactStars
                count={5}
                value={4}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">IDR 100</span>&nbsp;
                <strike>IDR 200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>Days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span
                    className="badge bg-danger"
                    style={{
                      padding: "10px 12px",
                      placeContent: "center",
                    }}
                  >
                    1
                  </span>
                  :
                  <span
                    className="badge bg-danger"
                    style={{
                      padding: "10px 12px",
                      placeContent: "center",
                    }}
                  >
                    1
                  </span>
                  :
                  <span
                    className="badge bg-danger"
                    style={{
                      padding: "10px 12px",
                      placeContent: "center",
                    }}
                  >
                    1
                  </span>
                </div>
              </div>
              <div className="product-count my-3">
                <p>Products: 5</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link className="button">Add to Cart</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialProduct;
