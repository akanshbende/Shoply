import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
function Login() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Login"} />
      {/* Home / Login*/}
      <BreadCrumb title="Login" />

      <Container class1="login-wrapper py-5 home-wrapper-2  ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Login</button>

                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
