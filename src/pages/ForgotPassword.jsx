import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordToken } from "../features/user/userSlice";

const emailSchema = yup.object({
  email: yup
    .string()
    .email("Email Should be valid")
    .required("Email is Required"),
});

function ForgotPassword() {
  const navigate = useNavigate();
  const getToken = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
    },
    validationSchema: emailSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(forgotPasswordToken(values));
      navigate("/");
    },
  });

  return (
    <>
      {/* Tab heading */}
      <Meta title={"Forgot Password"} />
      {/* Home / Forgot Password*/}
      <BreadCrumb title="Forgot Password" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex flex-column gap-3"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error ms-3 text-center">
                  {formik.touched.email && formik.errors.email}
                </div>
                <div>
                  <div className="d-flex  flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>

                    <Link to="/login" className="mt-10">
                      Cancel
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

export default ForgotPassword;
