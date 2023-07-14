import React from "react";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
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
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { toast } from "react-toastify";
import { getAProduct } from "../features/products/productSlice";
import { getUserCart } from "../features/user/userSlice";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import StoreIcon from "@mui/icons-material/Store";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactMailIcon from "@mui/icons-material/ContactMail";
function Header() {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([]);
  // const options = range(0, 1000).map((o) => `Item ${o}`);
  const Navigate = useNavigate();
  const authState = useSelector((state) => state?.auth);
  // console.log(authState);

  const updatedUserState =
    useSelector((state) => state?.auth?.updatedUser) || [];
  // console.log(updatedUserState);

  const cartState = useSelector((state) => state?.auth?.cartProducts);
  console.log(cartState);
  // console.log(cartState.length);
  // console.log(cartState);
  // console.log(total);

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

  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  const productState = useSelector((state) => state?.product?.product);
  // console.log(productState);
  useEffect(() => {
    let sum = 0;
    let totalProduct = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index]?.quantity * cartState[index]?.price);
      totalProduct = totalProduct + Number(cartState[index]?.quantity);
      setTotal(sum);
      setTotalProducts(totalProduct);
    }
  }, [cartState]);
  // console.log(cartState);
  // console.log(cartState?.length);

  // console.log(total);
  // console.log(totalProducts);

  const badgeMark = cartState?.length === 0 ? 0 : totalProducts;
  // console.log(badgeMark);

  const totalMoney = cartState?.length === 0 ? 0 : total;
  // console.log(totalMoney);
  //Search Functionality
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index];
      let id = index;
      let prodId = element?._id;
      let name = element?.title;
      data.push({ id, prodId, name });
    }
    setProductOpt(data);
    // console.log(productOpt);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Sign Out Successfully...");
    window.location.reload();
    Navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className="header-top-strip py-1 d-none d-xxl-block">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Delivery Over <strong>₹ 599</strong> & Free Return{" "}
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
                {/* Search functonality */}
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  options={productOpt} //array of productOpt
                  onChange={(selected) => {
                    Navigate(`/product/${selected[0]?.prodId}`);
                    dispatch(getAProduct(selected[0]?.prodId));
                  }}
                  minLength={2}
                  paginate={paginate}
                  labelKey={"name"}
                  placeholder="Search For Products Here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mt-sm-3 mb-sm-3">
              <div className="header-upper-links d-flex flex-wrap   m-xxl-0  align-items-center justify-content-xxl-between  justify-content-between">
                {/* <div className="main-func mb-2 mb-xxl-0 ">
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center text-white mt-1"
                  >
                    <CachedIcon />
                    <p className="mb-0">
                      Compare <br />
                      Products
                    </p>
                  </Link>
                </div> */}
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
                    to={authState?.user === null ? "/login" : ""}
                    className="d-flex align-items-center text-white"
                  >
                    <PersonIcon />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Login <br />
                        My Account
                      </p>
                    ) : (
                      <>
                        <div>
                          <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <h6 className="text-white text-capitalize mb-0">
                              Welcome <br />
                              {authState?.user?.firstname}
                            </h6>
                          </Button>
                          <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem onClick={handleClose}>
                              <Link
                                className="links border-0 bg-transparent"
                                to="/my-profile"
                              >
                                Profile
                              </Link>
                            </MenuItem>

                            <MenuItem onClick={handleClose}>
                              <button
                                className="links border-0 bg-transparent fw-bold"
                                onClick={(e) => handleLogout()}
                              >
                                Logout
                              </button>
                            </MenuItem>
                          </Menu>
                        </div>
                      </>
                      // updatedUserState?.firstname
                      // ? updatedUserState?.firstname
                      // :
                    )}
                  </Link>
                </div>
                <div className="main-func mb-2 mb-xxl-0">
                  <Link
                    to="/cart"
                    className="d-flex align-items-center text-white"
                  >
                    <div className="d-flex flex-row gap-3 align-items-center ms-2">
                      {/* {console.log(cartState)} */}
                      <Badge color="error" badgeContent={badgeMark} showZero>
                        <ShoppingCartIcon
                          style={{ color: "#febd69", fontSize: 30 }}
                        />
                      </Badge>
                      <Chip
                        variant="outlined"
                        label={`₹ ${totalMoney}`}
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
                    <NavLink className="links align-items-center" to="/">
                      <HomeIcon /> Home
                    </NavLink>
                    <NavLink
                      className="links align-items-center "
                      to="/product"
                    >
                      <StoreIcon /> Our Store
                    </NavLink>
                    <NavLink
                      className="links align-items-center "
                      to="/my-orders"
                    >
                      <AssignmentTurnedInIcon /> My Orders
                    </NavLink>
                    <NavLink className="links align-items-center " to="/blogs">
                      <LibraryBooksIcon /> Blogs
                    </NavLink>
                    <NavLink
                      className="links align-items-center "
                      to="/contact"
                    >
                      <ContactMailIcon /> Contact
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
