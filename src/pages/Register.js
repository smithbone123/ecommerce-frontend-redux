import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// input
import CustomInput from "../components/CustomInput";

const Register = () => {
  return (
    <>
      <div>
        <Meta title={"Register"} />
        <BreadCrumb title="Register" />
        <Container class1="auth-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-4">Register</h3>
                {/* Form */}
                <form action="" className="d-flex flex-column gap-15">
                  {/* Name */}
                  <CustomInput type="text" name="name" placeholder="Name" />
                  {/* Email */}
                  <CustomInput type="email" name="email" placeholder="Email" />
                  {/* Mobile Number */}
                  <CustomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                  {/* Password */}
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    {/* Button */}
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-2">
                      <button className="button border-0" type="submit">
                        Create
                      </button>
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

export default Register;
