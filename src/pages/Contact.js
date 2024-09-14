import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FiInfo } from "react-icons/fi";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Contact = () => {
  return (
    <>
      <div>
        <Meta title={"Contact"} />
        <BreadCrumb title="Contact" />
        <Container class1="contact-wrapper home-wrapper-2 py-5">
          <div className="row">
            {/* maps */}
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2767579149363!2d106.7944367750377!3d-6.227195293760903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1485e476a65%3A0x300c043104acc004!2sSenayan%20City!5e0!3m2!1sen!2sid!4v1721395767826!5m2!1sen!2sid"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="maps"
              ></iframe>
            </div>
            {/* form and information */}
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                {/* contact form */}
                <div>
                  <h3 className="contact-title mb-4">Contact Form</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    {/* name */}
                    <div>
                      <input
                        name=""
                        placeholder="Name"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    {/* email */}
                    <div>
                      <input
                        name=""
                        placeholder="Email"
                        className="form-control"
                        type="email"
                      />
                    </div>
                    {/* mobile number */}
                    <div>
                      <input
                        name=""
                        placeholder="Mobile Number"
                        className="form-control"
                        type="tel"
                      />
                    </div>
                    {/* message */}
                    <div>
                      <textarea
                        name=""
                        placeholder="Message"
                        className="form-control w-100"
                        cols="30"
                        rows="5"
                      ></textarea>
                    </div>
                    {/* button */}
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                {/* information */}
                <div>
                  <h3 className="contact-title mb-4">Get in touch</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex flex-row gap-15">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Senayan City, Jakarta Indonesia
                        </address>
                      </li>
                      <li className="mb-3 d-flex flex-row gap-15">
                        <FiPhone className="fs-5" />
                        <a href="tel:+021 39574394987">Tel 39574394987</a>
                      </li>
                      <li className="mb-3 d-flex flex-row gap-15">
                        <MdMailOutline className="fs-5" />
                        <a href="mailto:mail@gmail.com">mail@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex flex-row gap-15">
                        <FiInfo className="fs-5" />
                        <p className="mb-0">Monday - Friday 10am - 8pm</p>
                      </li>
                    </ul>
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

export default Contact;
