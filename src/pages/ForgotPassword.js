import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// input
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
  return (
    <>
      <div>
        <Meta title={"Forgot Password"} />
        <BreadCrumb title="Forgot Password" />
        <Container class1="auth-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-4">Forgot Password</h3>
                <p className="text-center mb-4">
                  Type your email address below, We will send you an Email to
                  reset your password
                </p>
                {/* Form */}
                <form action="" className="d-flex flex-column gap-15">
                  {/* Email */}
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />

                  <div>
                    {/* Button */}
                    <div className="d-flex flex-column justify-content-center align-items-center gap-15 mt-2">
                      <button className="button border-0" type="submit">
                        Submit
                      </button>
                      {/* Forgor Password */}
                      <Link to="/login">
                        <p>Cancel</p>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ForgotPassword;
