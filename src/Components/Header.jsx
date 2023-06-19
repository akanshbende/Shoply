import React from "react";
import { NavLink, Link } from "react-router-dom";
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

function Header() {
  return (
    <>
      <header className="header-top-strip py-3 d-none d-xxl-block">
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
            <div className="col-lg-2 col-md-12 col-sm-12 mt-xs-2">
              <h1>
                <Link to="/" className="text-white py-2" id="header-logo">
                  <img
                    src="/shoply-logo.png"
                    alt="logo"
                    style={{ width: "50px", height: "50px", padding: 8 }}
                  />
                  Shoply
                </Link>
              </h1>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mt-sm-3 mb-lg-3">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
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
              <div className="header-upper-links d-flex flex-wrap m-2 m-xxl-0  align-items-center justify-content-between">
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
                    to="/login"
                    className="d-flex align-items-center text-white"
                  >
                    <PersonIcon />
                    <p className="mb-0">
                      Login <br />
                      My Account
                    </p>
                  </Link>
                </div>
                <div className="main-func mb-2 mb-xxl-0">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center text-white"
                  >
                    <div className="d-flex flex-row gap-3 align-items-center ms-2">
                      <Badge color="error" badgeContent={0} showZero>
                        <ShoppingCartIcon
                          style={{ color: "#febd69", fontSize: 30 }}
                        />
                      </Badge>
                      <Chip
                        variant="outlined"
                        label="$ 500"
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

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex flex-grow-1 flex-wrap align-items-center gap-30 ">
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
                    <NavLink className="links" to="/blogs">
                      Blogs
                    </NavLink>
                    <NavLink className="links" to="/contact">
                      Contact
                    </NavLink>
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
