import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
function SignUp() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Sign Up"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                />
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />

                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Sign Up</button>
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

export default SignUp;
