import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

const signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup.string().email("Email Should be Valid").required("Email Required"),

  mobile: yup.string().required("Mobile No is Required"),
  password: yup.string().required("Password is Required"),
});

function SignUp() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
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
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-1"
              >
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  className="form-control"
                  values={formik.values.firstname}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />
                <div className="error ms-3">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="form-control"
                  values={formik.values.lastname}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error ms-3">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  values={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error ms-3">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  className="form-control"
                  values={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error ms-3">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  values={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error ms-3">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Sign Up
                    </button>
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
