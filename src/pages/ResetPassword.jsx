import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
function ResetPassword() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Reset Password"} />
      {/* Home / Reset Password*/}
      <BreadCrumb title="Reset Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                  className="form-control"
                />

                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0">Reset</button>
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

export default ResetPassword;
