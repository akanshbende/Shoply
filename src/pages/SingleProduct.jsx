import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";
// https://www.npmjs.com/package/react-image-magnify?activeTab=readme
import applegear from "/applegear.webp";

import Color from "../Components/Color";
import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AlertBar from "../Components/AlertBar";
import Container from "../Components/Container";
import ImgMagnifiHover from "../Components/ImgMagnifiHover";
import ReactImageMagnify from "react-image-magnify";
import { useEffect } from "react";
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";
import {
  MagnifierContainer,
  SideBySideMagnifier,
} from "react-image-magnifiers";
// import ReactImageMagnify from "react-image-magnify";

// import ReactImageZoom from "react-image-zoom";

function SingleProduct() {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  // console.log("Color : " + color);
  const [quantity, setQuantity] = useState(1);
  // console.log(quantity);
  const [orderedProduct, setOrderedProduct] = useState(true);

  const [stars, setStars] = useState(null);
  const [comments, setComments] = useState(null);

  const [popularProduct, setPopularProduct] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const getProductId = location.pathname.split("/")[2];
  console.log(getProductId);
  const productState = useSelector((state) => state?.product?.singleproduct);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const productsState = useSelector((state) => state?.product?.product);
  console.log(productState);
  console.log(cartState);
  // console.log(productState?.images[0]);
  // console.log(productState.color);
  const rating = productState?.totalrating;
  console.log(rating);

  useEffect(() => {
    dispatch(getAProduct(getProductId));
    // console.log(getAProduct(getProductId));
    // dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  //For bottom popular products
  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productState]);

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      const productId = productState?._id;
      const price = productState?.price;
      // console.log(productId);
      dispatch(
        addProdToCart({
          productId,
          quantity,
          color,
          price,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart(config2));
      }, 200);

      // navigate("/cart");
    }
  };

  const props = {
    width: 400,
    height: 250,
    zoomWidth: 500,
    img: applegear,
  };
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const addRatingToProduct = () => {
    if (stars === null) {
      toast.error("Please add star rating");
      return false;
    } else if (comments === null) {
      toast.error("Please Review about the Product");
      return false;
    } else {
      const star = stars;
      const comment = comments;
      const prodId = getProductId;
      dispatch(addRating({ star, comment, prodId }));

      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
      return false;
    }
  };
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
  const [visible, setVisible] = useState(true);
  const visibleRotate = () => {
    setTimeout(() => {
      setVisible(false);
    }, 500);
  };

  useEffect(() => {
    visibleRotate();
  }, []);

  return (
    <>
      {/* Tab heading */}
      <Meta title={"Product Name"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title={productState?.title} />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-xxl-6">
            <div className="product-images-wrapper">
              <div className="main-product-image">
                <div className="d-flex align-items-center justify-content-center position-relative">
                  {console.log(productState?.images[0])}
                  {/* <MagnifierContainer>
                    <SideBySideMagnifier
                      imageSrc={productState?.images[0]}
                      imageAlt="Example"
                      largeImageSrc={productState?.images[0]} // Optional
                      // alwaysInPlace="false"
                      // fillAvailableSpace="true"
                      fillAlignTop={true}
                      fillGapLeft={50}
                      fillAvailableSpace={false}
                    />
                  </MagnifierContainer> */}
                  <MutatingDots
                    height="200"
                    width="200"
                    color="#ffaa48"
                    secondaryColor="#ffaa48"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={visible}
                  />
                  <ReactImageMagnify
                    style={{ zIndex: 1000 }}
                    {...{
                      smallImage: {
                        isFluidWidth: true,
                        src: productState?.images[0],
                      },
                      largeImage: {
                        src: productState?.images[0],
                        width: 1600,
                        height: 1500,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 d-none d-xxl-flex">
                {/* {console.log(productState?.images)} */}
                {productState &&
                  productState?.images?.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item} className="img-fluid rounded" alt="" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="col-xxl-6 mt-3 mt-xxl-0">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">₹ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10 ">
                  {console.log(productState?.totalrating)}
                  <ReactStars
                    count={5}
                    value={rating}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Type : </h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Brand : </h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Category : </h3>
                  <p className="product-data">{productState?.catagory}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tags : </h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Availability : </h3>
                  <p className="product-data">In Stock</p>
                </div>
                {/* <div className="d-flex  flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div> */}
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex flex-column gap-10  mt-2 mb-3">
                      <h3 className="product-heading">Color : </h3>
                      <Color
                        colorData={productState?.color}
                        setColor={setColor}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex flex-row flex-wrap align-items-center gap-15 mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <TextField
                          sx={{ marginTop: 1, width: 70 }}
                          size="small"
                          id="outlined-number"
                          label="Qty"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                          InputProps={{ inputProps: { min: 0, max: 10 } }}
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  {/* buy item and addd to cart button */}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + " d-flex gap-30 align-items-center ms-5 "
                    }
                  >
                    <button
                      onClick={(e) => {
                        alreadyAdded
                          ? navigate("/cart")
                          : uploadCart(productState?._id);
                      }}
                      className="button border-0"
                    >
                      {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                    </button>
                    <Link
                      to="/cart"
                      className={
                        alreadyAdded
                          ? "d-none"
                          : " button signup d-flex gap-30 align-items-center  "
                      }
                    >
                      Buy Item Now
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="">
                    <Link>
                      <AiOutlineHeart /> Add to Compare
                    </Link>
                  </div>
                  <div className="">
                    <Link to="">
                      <TbGitCompare /> Add to Wishlist
                    </Link>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Shipping and Returns </h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders!
                    <br /> We ship all US domestic orders within{" "}
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Shipping and Returns </h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders!
                    <br /> We ship all US domestic orders within{" "}
                    <b> 5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Copy Product Link : </h3>
                  <Link
                    to=""
                    onClick={(e) => {
                      copyToClipboard(window.location.href);
                      // showAlert();
                      toast.success("Copied to Clipboard");
                    }}
                  >
                    <Button variant="contained" size="small">
                      Copy
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="description-text bg-white p-3">
              <p>{productState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {console.log(orderedProduct)}
                {orderedProduct && (
                  <div>
                    <Link className="text-dark text-decoration-underline" to="">
                      Write a Review
                    </Link>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>

                <div>
                  <ReactStars
                    count={5}
                    value={stars}
                    edit={true}
                    size={24}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      setStars(e);
                    }}
                  />
                  {/* {console.log(stars)} */}
                </div>
                <div>
                  <textarea
                    className="form-control w-100"
                    name=""
                    id=""
                    placeholder="Comments"
                    cols="30"
                    rows="4"
                    value={comments}
                    onChange={(e) => {
                      // console.log(e);
                      setComments(e.target.value);
                    }}
                  ></textarea>
                  {/* {console.log(comments)} */}
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    className="button border-0 mt-3"
                    type="button"
                    onClick={addRatingToProduct}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="reviews mt-4 ">
                {productState &&
                  productState?.ratings?.map((item, index) => {
                    return (
                      <div key={index} className="review ">
                        <div className="d-flex gap-10 align-items-center">
                          <h6 className="mb-0">Akansh</h6>
                          <ReactStars
                            count={5}
                            value={item?.star}
                            edit={false}
                            size={24}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-3">{item?.comment}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12 ">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
