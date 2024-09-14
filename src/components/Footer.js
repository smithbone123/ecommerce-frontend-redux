import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
// icons
import newsletter from "../images/icons/newsletter.png";

const Footer = () => {
  return (
    <>
      {/* footer top */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Signup For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer upper */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <address className="text-white">
                No. 1259 Freedom, Jakarta
                <br />
                Indonesia
              </address>

              <a className="text-white d-block mb-2" href="tel:+91-3463476">
                +91-3463476
              </a>
              <a className="text-white d-block" href="mailto:demo@livedemo.com">
                demo@livedemo.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="https://linkedin.com">
                  <BsLinkedin className="fs-4" />
                </a>
                <a className="text-white" href="https://">
                  <BsGithub className="fs-4" />
                </a>
                <a className="text-white" href="https://">
                  <BsYoutube className="fs-4" />
                </a>
                <a className="text-white" href="https://">
                  <BsInstagram className="fs-4" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Informations</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/privacy-policy">
                  Privacy Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/refund-policy">
                  Refund Policy
                </Link>
                <Link className="text-white py-2 mb-1" to="/shipping-policy">
                  Shipping Policy
                </Link>
                <Link
                  className="text-white py-2 mb-1"
                  to="/term-and-conditions"
                >
                  Terms and Conditions
                </Link>
                <Link className="text-white py-2 mb-1" to="/blogs">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/about">
                  About Us
                </Link>
                <Link className="text-white py-2 mb-1" to="/faq">
                  FAQ
                </Link>
                <Link className="text-white py-2 mb-1" to="/contact">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="#">
                  Accessories
                </Link>
                <Link className="text-white py-2 mb-1" to="#">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="#">
                  Handphones
                </Link>
                <Link className="text-white py-2 mb-1" to="#">
                  Smart Watches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer bottom */}
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}, Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
