import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "../Components/Container";
import CustomInput from "../Components/CustomInput";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { resetPassword } from "../features/user/userSlice";

const passwordSchema = yup.object({
  password: yup.string().required("Password is Required"),
});

function ResetPassword() {
  const navigate = useNavigate();
  // console.log(email, password);
  const location = useLocation();
  const getToken = location.pathname.split("/")[2];
  console.log(getToken);
  // const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: passwordSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(resetPassword({ token: getToken, password: values.password }));
      // console.log("login clicked");

      navigate("/login");
    },
  });
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
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-2"
              >
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />{" "}
                <div className="error ms-3">
                  {formik.touched.password && formik.errors.password}
                </div>
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
