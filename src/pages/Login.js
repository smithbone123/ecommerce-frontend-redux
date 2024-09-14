import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// input
import CustomInput from "../components/CustomInput";

const Login = () => {
  return (
    <>
      <div>
        <Meta title={"Login"} />
        <BreadCrumb title="Login" />
        <Container class1="auth-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-4">Login</h3>
                {/* Form */}
                <form action="" className="d-flex flex-column gap-15">
                  {/* Email */}
                  <CustomInput type="email" name="email" placeholder="Email" />
                  {/* Password */}

                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div>
                    {/* Forgor Password */}
                    <Link to="/forgot-password">
                      <p>Forgor Password</p>
                    </Link>
                    {/* Button */}
                    <div className="d-flex justify-content-center align-items-center gap-15 mt-2">
                      <button className="button border-0" type="submit">
                        Login
                      </button>
                      <Link to="/register" className="button signup">
                        Register
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

export default Login;
