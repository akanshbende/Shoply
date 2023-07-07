import {
  Badge,
  Breadcrumbs,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import ButtonMui from "../Components/ButtonMui";
import newipad from "/newipad.jpg";
import applewatch from "/applewatch.jpg";
import Container from "../Components/Container";
import { useDispatch, useSelector } from "react-redux";
import { createAnOrder, getUserCart } from "../features/user/userSlice";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { config } from "../utils/axiosConfig";

const shippingSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details are Required"),
  city: yup.string().required("City is Required"),
  state: yup.string().required("State is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup.number().required("Country is Required"),
  other: yup.string(),
});

function Checkout() {
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  console.log(paymentInfo);
  console.log(shippingInfo);

  const [cartProductState, setCartProductState] = useState([]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values));
      setShippingInfo(values);

      setTimeout(() => {
        checkOutHandler();
      }, 300);
      // console.log("Checkout :" + values);
    },
  });

  const dispatch = useDispatch();

  const cartState = useSelector((state) => state.auth.cartProducts) || [];
  console.log(cartState);
  const shippingCharges = 5;

  // console.log(totalAmount);
  const userCartState = useSelector((state) => state.auth.cartProducts);
  // console.log(userCartState);
  useEffect(() => {
    let sum = 0;

    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;

      setTotalAmount(sum);
    }
  }, [userCartState]);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      key="1"
      color="inherit"
      href="/cart"
      className="text-dark"
      onClick={handleClick}
    >
      Cart
    </Link>,
    <Link
      key="2"
      color="inherit"
      href=""
      className="breadcrumb-item active"
      onClick={handleClick}
    >
      Information
    </Link>,
    <Link
      key="3"
      color="inherit"
      href=""
      className="breadcrumb-item active"
      onClick={handleClick}
    >
      Shipping
    </Link>,
    <Link className="breadcrumb-item active" to="" key="4" color="text.primary">
      Payment
    </Link>,
  ];

  useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState.length; index++) {
      items.push({
        product: cartState[index].productId._id,
        quantity: cartState[index].quantity,
        color: cartState[index].color._id,
        price: cartState[index].price,
      });
      setCartProductState(items);
    }
  }, []);
  console.log(cartProductState);

  //PAyment Integration
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const checkOutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("RazorPay SDK failed to load");
      return;
    }

    const result = await axios.post(
      "http://localhost:5000/api/user/order/checkout",
      { amount: totalAmount + shippingCharges },
      config
    );
    if (!result) {
      alert("Something Went Wrong");
      return;
    }

    // console.log(process.env.RazorPay_KEY_ID);
    const { amount, id: order_id, currency } = result.data.order; //need from result data
    const options = {
      key: "rzp_test_LQrr88PSMVVSej", // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: currency,
      name: "Shoply Ltd.",
      description: "Test Transaction",
      // image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        };

        const result = await axios.post(
          "http://localhost:5000/api/user/order/paymentVerification",
          data,
          config
        );

        setPaymentInfo({
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
        });
        // console.log("ID :::" + response.razorpay_payment_id);
        dispatch(
          createAnOrder({
            totalPrice: totalAmount,
            totalPriceAfterDiscount: totalAmount,
            orderItems: cartProductState,
            paymentInfo,
            shippingInfo,
          })
        );
      },
      prefill: {
        name: "Shoply",
        email: "shoply@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Shoply Avenue, IT Park,Nagpur",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Container class1="checkout-wrapper py-2  py-xxl-5 home-wrapper-2">
        <div className="row d-flex flex-column-reverse flex-xxl-row">
          {/* --------------------------------------------------LEFT SIDE---------------------------------------- */}
          <div className="col-xxl-7 ">
            <div className="checkout-left-data ">
              <h3 className="website-name">Shoply</h3>
              <Stack spacing={2}>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <h4 className="title">Contact Information</h4>
              <p className="user-details">
                Akansh Bende (akanshbende29@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-wrap  gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                    id=""
                    className="form-control form-select"
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="India">India</option>
                  </select>
                  <div className="error ms-3 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error ms-3 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error ms-3 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-3 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment ,Lane ,etc."
                    className="form-control"
                    name="other"
                    value={formik.values.other}
                    onChange={formik.handleChange("other")}
                    onBlur={formik.handleBlur("other")}
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-3 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    id=""
                    placeholder="Select State"
                    className="form-control form-select"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                    <option value="Maharashtra">Maharashtra</option>
                  </select>
                  <div className="error ms-3 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="number"
                    placeholder="Zip Code"
                    className="form-control"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error ms-3 my-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link to="/cart">
                      <Chip
                        icon={<KeyboardBackspaceIcon sx={{ left: 100 }} />}
                        label="Return to Cart"
                        sx={{
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link to="/cart" className="button">
                      <AddShoppingCartIcon /> Continue Shopping
                    </Link>
                    <button className="button" type="submit">
                      Place Order
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* --------------------------------------------------RIGHT SIDE---------------------------------------- */}
          <div className="right-side col-xxl-5 mt-3 mb-3   my-xxl-0 mt-xxl-0">
            <div className="border-bottom py-4 ">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 align-items-center"
                    >
                      <div className="w-75 d-flex gap-30">
                        <div className="w-25 rounded">
                          <Badge badgeContent={item?.quantity} color="primary">
                            <img
                              src={newipad}
                              // src={item?.item?.productId.images[0].url}
                              alt=""
                              className="img-fluid rounded"
                            />
                          </Badge>
                        </div>
                        <div className="title">
                          <h5 className="total">{item?.productId.title}</h5>
                          <p className="total-price"> {item?.color.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          $ {item?.price * item?.quantity}
                        </h5>
                      </div>
                    </div>
                  );
                })}

              <div></div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className=" total">SubTotal</p>
                <p className=" total-price ">
                  $ {totalAmount ? totalAmount : "0"}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price ">$ {shippingCharges}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Total</h4>
              <h5>$ {totalAmount ? totalAmount + shippingCharges : "0"}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
