import React, { useEffect } from "react";
import Container from "../Components/Container";
import BreadCrumb from "../Components/BreadCrumb";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
// import { updateProfile } from "../features/user/userSlice";
import { useState } from "react";
// import useHistory from "react-router-dom";
// import Container from "@mui/material/Container";
// import { useHistory } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SaveIcon from "@mui/icons-material/Save";
import { updateProfile } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const profileSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email Should be valid")
    .required("Email is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
});

function Profile() {
  const navigateTo = useNavigate();
  // const history = useHistory();

  const [edit, setEdit] = useState(true);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state?.auth?.user);
  const updatedUserState = useSelector((state) => state?.auth?.updatedUser);

  const customerData = localStorage.getItem("customer");
  const getTokenFromLocalStorage = customerData
    ? JSON.parse(customerData)
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
    },
  };
  // console.log(userState);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: userState.firstname,
      lastname: userState.lastname,
      email: userState.email,
      mobile: userState.mobile,
    },
    validationSchema: profileSchema,
    onSubmit: (values) => {
      const data = values;
      const config2_ = config2;
      console.log(values);
      console.log(config2_);
      dispatch(updateProfile({ data, config2_ }));
      // console.log(updateProfile(values));

      setEdit(true);

      // history.push("/");
      navigateTo("/my-profile");
    },
  });
  console.log(userState);
  // console.log(updatedUserState);

  // useEffect(() => {
  //   dispatch(updatedProfile());
  // }, [userState]);

  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="cart-wrapper home-wrapper-2 py-3">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="col-12 ">
              <div className="d-flex align-items-center justify-content-center mb-3 gap-2">
                <h3>Update Profile</h3>
              </div>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-center">
              <Box
                sx={{
                  // backgroundColor: "#ffd458",
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <form action="" onSubmit={formik.handleSubmit}>
                  <FormControl>
                    <Box sx={{ marginBottom: 3 }}>
                      <TextField
                        name="firstname"
                        disabled={edit}
                        size="small"
                        id="outlined-basic"
                        label="First Name"
                        variant="outlined"
                        value={formik.values.firstname}
                        onChange={formik.handleChange("firstname")}
                        onBlur={formik.handleBlur("firstname")}
                        fullWidth
                        required
                      />
                      <div className="error ms-3">
                        {formik.touched.firstname && formik.errors.firstname}
                      </div>
                    </Box>

                    <Box sx={{ marginBottom: 3 }}>
                      <TextField
                        name="lastname"
                        disabled={edit}
                        size="small"
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        value={formik.values.lastname}
                        onChange={formik.handleChange("lastname")}
                        onBlur={formik.handleBlur("lastname")}
                        required
                      />
                      <div className="error ms-3">
                        {formik.touched.lastname && formik.errors.lastname}
                      </div>
                    </Box>
                    <Box sx={{ marginBottom: 3 }}>
                      <TextField
                        name="email"
                        disabled={edit}
                        size="small"
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        required
                      />
                      <div className="error ms-3">
                        {formik.touched.email && formik.errors.email}
                      </div>
                    </Box>
                    <Box sx={{ marginBottom: 3 }}>
                      <TextField
                        name="mobile"
                        disabled={edit}
                        size="small"
                        id="outlined-basic"
                        label="Mobile"
                        variant="outlined"
                        value={formik.values.mobile}
                        onChange={formik.handleChange("mobile")}
                        onBlur={formik.handleBlur("mobile")}
                        required
                      />
                      <div className="error ms-3">
                        {formik.touched.mobile && formik.errors.mobile}
                      </div>
                    </Box>
                    <Box className="d-flex align-items-center justify-content-between">
                      {edit === false && (
                        <Button variant="contained" type="submit">
                          <SaveIcon /> Save
                        </Button>
                      )}
                      {
                        <Button
                          variant="contained"
                          onClick={() => setEdit(false)}
                        >
                          <EditNoteIcon /> Edit
                        </Button>
                      }
                      {console.log(edit)}
                    </Box>
                  </FormControl>
                </form>
              </Box>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;
