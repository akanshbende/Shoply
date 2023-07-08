import React from "react";
import { NavLink, Link, Navigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import CachedIcon from "@mui/icons-material/Cached";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, Chip } from "@mui/material";
import Select, { selectClasses } from "@mui/joy/Select";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Option } from "@mui/joy";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";
import { toast } from "react-toastify";

function Header() {
  const dispatch = useDispatch();

  const authState = useSelector((state) => state.auth);
  console.log(authState);
  const updatedUserState =
    useSelector((state) => state?.auth?.updatedUser) || [];
  console.log(updatedUserState);

  const [total, setTotal] = useState(null);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  // console.log(cartState.length);
  // console.log(cartState);
  // console.log(total);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity * cartState[index].price);
      setTotal(sum);
    }
    // setTimeout(() => {
    //   dispatch(getUserCart());
    // }, 200);
  }, [cartState]);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Sign Out Successfully...");
    window.location.reload();
    Navigate("/");
  };

  return (
    <>
      <header className="header-top-strip py-1 d-none d-xxl-block">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Delivery Over <strong>$ 599</strong> & Free Return{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline <a href="tel:+91 9625845763">+91 9625845763</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="container-xxl">
          <div className="row align-items-center d-flex flex-grow-1">
            <div className="col-lg-2 col-md-12 col-4 mt-xs-2">
              <h1 className="logo">
                <Link
                  to="/"
                  className="text-white py-2 d-flex align-items-center"
                  id="header-logo"
                >
                  <img
                    src="/shoply-logo.png"
                    alt="logo"
                    style={{ width: "50px", height: "50px", padding: 8 }}
                  />
                  <h3 className="mt-2">Shoply</h3>
                </Link>
              </h1>
            </div>
            <div className="col-lg-5 col-md-12 col-8 mt-sm-3 mb-lg-3">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2 "
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mt-sm-3 mb-sm-3">
              <div className="header-upper-links d-flex flex-wrap   m-xxl-0  align-items-center justify-content-xxl-between  justify-content-between">
                <div className="main-func mb-2 mb-xxl-0 ">
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center text-white mt-1"
                  >
                    {/* <img src="images/compare.svg" alt="" /> */}
                    <CachedIcon />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div>
                <div className="main-func mb-2 mb-xxl-0">
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center text-white"
                  >
                    <FavoriteBorderIcon />
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="main-func mb-2 mb-xxl-0">
                  <Link
                    to={authState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center text-white"
                  >
                    <PersonIcon />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Login <br />
                        My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome <br />
                        {updatedUserState?.firstname
                          ? updatedUserState?.firstname
                          : authState?.user?.firstname}
                      </p>
                    )}
                  </Link>
                </div>
                <div className="main-func mb-2 mb-xxl-0">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center text-white"
                  >
                    <div className="d-flex flex-row gap-3 align-items-center ms-2">
                      <Badge
                        color="error"
                        badgeContent={cartState?.length ? cartState?.length : 0}
                        showZero
                      >
                        <ShoppingCartIcon
                          style={{ color: "#febd69", fontSize: 30 }}
                        />
                      </Badge>
                      <Chip
                        variant="outlined"
                        label={`$ ${total ? total : 0}`}
                        sx={{
                          color: "white",
                          fontWeight: 500,
                          fontSize: 15,
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    {/* <ShoppingCartIcon /> */}
                    {/* <div className="d-flex flex-column gap-1">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500 </p>
                    </div> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-1 py-xxl-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex flex-grow-1 flex-wrap align-items-center gap-2 gap-xxl-30  ">
                <div className="d-flex align-items-center gap-10">
                  <div className="dropdown">
                    <Select
                      placeholder="Shop By Category"
                      startDecorator={<LocalMallIcon />}
                      indicator={<KeyboardArrowDown />}
                      size="md"
                      sx={{
                        // width: 200,
                        color: "#ffffff",
                        [`& .${selectClasses.indicator}`]: {
                          transition: "0.2s",
                          [`&.${selectClasses.expanded}`]: {
                            transform: "rotate(-180deg)",
                          },
                        },
                        background: "transparent",
                        outline: "none",
                        border: "none",
                        ":hover": {
                          color: "#16171d",
                          backgroundColor: "#16171d",
                        },
                      }}
                    >
                      <Option value="Mobile">Mobile,Computers</Option>
                      <Option value="tv">TV,Appliances</Option>
                      <Option value="men">Men's Fashion</Option>
                      <Option value="women">Women's Fashion</Option>
                      <Option value="kitchen">Home,Kitchen</Option>
                      <Option value="sports">Sports and Fitness</Option>
                    </Select>
                  </div>
                </div>

                <div className="menu-links mb-2 mb-xxl-0">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="links" to="/">
                      Home
                    </NavLink>
                    <NavLink className="links" to="/product">
                      Our Store
                    </NavLink>
                    <NavLink className="links" to="/my-orders">
                      My Orders
                    </NavLink>
                    <NavLink className="links" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="links" to="/contact">
                      Contact
                    </NavLink>
                    <button
                      className="links border-0 bg-transparent text-white fw-bold"
                      onClick={(e) => handleLogout()}
                      to="/contact"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
