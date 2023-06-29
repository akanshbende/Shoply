import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email Should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

function Login() {
  // console.log(email, password);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
    },
  });
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
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-2"
              >
                <CustomInput
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  value={formik.values.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />
                <div className="error ms-3">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  value={formik.values.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                />
                <div className="error ms-3">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>

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
