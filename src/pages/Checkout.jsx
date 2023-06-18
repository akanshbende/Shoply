import {
  Badge,
  Breadcrumbs,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import ButtonMui from "../Components/ButtonMui";
import newipad from "../../public/images/newipad.jpg";
import applewatch from "../../public/images/applewatch.jpg";
import Container from "../Components/Container";

function Checkout() {
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
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* --------------------------------------------------LEFT SIDE---------------------------------------- */}
          <div className="col-7">
            <div className="checkout-left-data">
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
                className="d-flex flex-wrap  gap-15 justify-content-between"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment ,Lane ,etc."
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select
                    name=""
                    id=""
                    placeholder="First Name"
                    className="form-control form-select"
                  >
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                  />
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
                    <Link to="/cart">
                      <ButtonMui
                        text={"Continue Shopping"}
                        startIcon={<AddShoppingCartIcon />}
                      />
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* --------------------------------------------------RIGHT SIDE---------------------------------------- */}
          <div className="right-side col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 align-items-center">
                <div className="w-75 d-flex gap-30">
                  <div className="w-25 rounded">
                    <Badge badgeContent={2} color="primary">
                      <img src={newipad} alt="" className="img-fluid rounded" />
                    </Badge>
                  </div>
                  <div className="title">
                    <h5 className="total">hafbfahfb</h5>
                    <p className="total-price">s / vsvsv</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
              <div></div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className=" total">SubTotal</p>
                <p className=" total-price ">$ 1000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price ">$ 1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4>Total</h4>
              <h5>$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
