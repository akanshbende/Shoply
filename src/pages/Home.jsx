import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
// import { Link } from "react-router-dom";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
import SpecialProduct from "../Components/SpecialProduct";
import Container from "../Components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment/moment";
import { getAllProducts } from "../features/products/productSlice";
import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addTooWishlist } from "../features/products/productSlice";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Carousel from "react-bootstrap/Carousel";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NorthIcon from "@mui/icons-material/North";
//2.08 hr
function Home() {
  const blogState = useSelector((state) => state?.blog.blog);
  const productState = useSelector((state) => state?.product.product);
  // console.log(productState);
  // console.log(blogState);
  const dispatch = useDispatch();
  const addToWish = (id) => {
    console.log("Product Card > id : ", id);
    dispatch(addTooWishlist(id));
    // console.log("Product Card : ", addToWishlist(id));
    // console.log("Product Card : ", dispatch(addToWishlist(id)));
  };

  const navigate = useNavigate();

  useEffect(() => {
    getblogs();
    getallProducts();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };
  const getallProducts = () => {
    dispatch(getAllProducts()); //max cll stack exceed means fun call itself infinite i.e if used same fun name
  };

  return (
    <>
      {/* large images and small images */}
      {/* Tab heading */}
      {/* <Meta title={"Shoply"} />
      {/* Home / Login*/}
      {/* <BreadCrumb title="Shoply" />  */}

      <Container class1="home-wrapper-1 py-5">
        {/* <div
          className="up"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "90%",
            zIndex: 10000,
          }}
        >
          <NorthIcon />
        </div> */}
        <div className="row">
          <div className="carosal-main col-lg-6 col-md-12 col-sm-12 ">
            <Carousel controls={false}>
              <Carousel.Item interval={2000}>
                <div className="main-banner position-relative ">
                  <img
                    className="rounded-3  img-fluid "
                    src={"/vp-8.webp"}
                    // height="420px"
                    alt="main banner"
                  />
                  <div
                    className="main-banner-content  position-absolute ms-5  "
                    style={{ top: 10, left: "25%" }}
                  >
                    <h4 style={{ marginLeft: 5, color: "#ffbf01" }}>
                      AUGMENTED REALITY HEADSET
                    </h4>

                    <h5 style={{ color: "white" }}>Apple Vision Pro</h5>
                    <p style={{ color: "white" }}>
                      From ₹3,00,000 or ₹30,000/mo.
                    </p>
                    <Link className="button ">Buy Now</Link>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="main-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src={"/ip1.webp"}
                    alt="main banner"
                  />
                  <div className="main-banner-content  position-absolute">
                    <h4 style={{ color: "#ffbf01" }}>
                      THERE IS ALWAYS MORE TO EXPLORE
                    </h4>

                    <h5 style={{ color: "#eee0d7" }}>iPad Pro</h5>
                    <p style={{ color: "#ffeee5", fontWeight: 500 }}>
                      From ₹81,900 or ₹13,150/mo.
                    </p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="main-banner position-relative ">
                  <img
                    className="img-fluid rounded-3"
                    src={"/jbl-speaker-1.jpg"}
                    alt="main banner"
                  />
                  <div
                    className="main-banner-content  position-absolute "
                    style={{ top: 10, left: 10 }}
                  >
                    <h4>SUPERCHARGED FOR PROS</h4>

                    <h5 style={{ color: "#797966" }}>JBL Pary Box 100</h5>
                    <p className="fw-bold">From ₹9,999</p>
                    <Link className="button">Buy Now</Link>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className=" col-xxl-6 col-lg-6  co-md-12 col-sm-12 col-12 col-12 mt-sm-3 mt-lg-0">
            <div className="d-flex mt-3 mt-xxl-0 flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative ">
                <img
                  className="img-fluid rounded-3"
                  src={"/catbanner-01.jpg"}
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>

                  <h5>MacBook Air</h5>
                  <p>
                    From ₹89,999 <br /> or ₹4999/mo.
                  </p>
                  {/* <Link className="button">Buy Now</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={"/catbanner-02.jpg"}
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>

                  <h5> Apple Watch Pro</h5>
                  <p>
                    From ₹29,999 <br /> or ₹1499/mo.
                  </p>
                  {/* <Link className="button">Buy Now</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={"/catbanner-03.jpg"}
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>

                  <h5>IPad Air</h5>
                  <p>
                    From ₹49,999 <br /> or ₹2999/mo.
                  </p>
                  {/* <Link className="button">Buy Now</Link> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src={"/catbanner-04.jpg"}
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>

                  <h5>Headphone Max</h5>
                  <p>
                    From ₹39,999 <br /> or ₹1999/mo.
                  </p>
                  {/* <Link className="button">Buy Now</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Services like free shipping etc */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex flex-wrap flex-column flex-xxl-row   justify-content-between ">
              {services?.map((i, j) => {
                return (
                  <div
                    key={j}
                    className="d-flex align-items-center mb-4 mb-xxl-0  gap-15 "
                  >
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      {/* Categories : Camera,watch,headphones */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories col-12 d-flex flex-wrap justify-content-xxl-between align-items-center">
              <div className="d-flex align-items-center gap-10">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <div>
                  <img src="/ctrl.webp" alt="camera" className="img-fluid " />
                </div>
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <div>
                  <img src="camera.webp" alt="camera" className="img-fluid " />
                </div>
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <div>
                  <img src="/tv.webp" alt="camera" className="img-fluid " />
                </div>
              </div>
              <div className="d-flex  align-items-center ">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <div>
                  <img
                    src="/applewatch.jpg"
                    alt="camera"
                    className="img-fluid "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured Collection  */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div
                    key={index}
                    className={"col-12 col-xxl-3 col-xl-6 mb-3 mb-xxl-0 "}
                  >
                    <div
                      className="product-card position-relative "
                      style={{ height: "510px" }}
                    >
                      <div
                        className="wishlist-icon position-absolute "
                        onClick={() => {
                          addToWish(item._id);
                        }}
                      >
                        <Tooltip
                          title="Add to Wishlist"
                          arrow
                          placement="right-end"
                        >
                          <IconButton aria-label="fav">
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                      {/* Product image */}
                      <div className="product-image d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={item?.images[0]}
                          alt="product image"
                        />
                        <img
                          className="img-fluid"
                          src={item?.images[1]}
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title ">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p
                          className={`description`}
                          // dangerouslySetInnerHTML={{ __html: item?.description }}
                        >
                          {item?.description}
                        </p>
                        <p className="price fw-bold">{item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute ">
                        <div className="d-flex flex-column gap-15">
                          <Link
                            to={"/product/" + item?._id}
                            className="border-0 bg-transparent"
                          >
                            <Tooltip
                              className="product-btn"
                              title="View Product"
                              arrow
                              placement="right-end"
                            >
                              <IconButton aria-label="fav">
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>

                            {/*  <img src="/view.svg" alt="add cart" /> */}
                          </Link>
                          {/* <button className="border-0 bg-transparent">
                            <img src="/prodcompare.svg" alt="add cart" />
                          </button> */}
                          {/* <button className="border-0 bg-transparent">
                            <img src="/add-cart.svg" alt="add cart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2 d-flex align-items-center justify-content-between flex-sm-wrap">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mt-xxl-0 d-flex align-items-center justify-content-center">
            <div className="famous-card position-relative ">
              {/* d-flex  align-items-center justify-content-center */}
              <img className="img-fluid" src="/famous-1.png" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series</h6>
                <p>From ₹399 or ₹16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-sm-3 mt-3 mt-xxl-0 d-flex align-items-center justify-content-center">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="/famous-2.png" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-sm-3 mt-3 mt-xxl-0 d-flex align-items-center justify-content-center">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="/famous-3.png" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">SMARTPHONES</h5>
                <h6 className="text-dark">Smartphone 13 Pro.</h6>
                <p className="text-dark">
                  Now in Green. From ₹999.00 or ₹41.62/mo. for 24 mo. Footnote*
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mt-sm-3 mt-3 mt-xxl-0 d-flex align-items-center justify-content-center">
            <div className="famous-card position-relative">
              <img className="img-fluid" src="/famous-4.png" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HOME SPEAKERS</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">
                  From ₹699 or ₹116.58/mo. for 12 mo.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Special Products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {productState &&
              productState?.map((item, index) => {
                if (item.tags === "special") {
                  return (
                    <SpecialProduct
                      title={item?.title}
                      id={item?._id}
                      brand={item?.brand}
                      key={index}
                      totalrating={item?.totalrating}
                      price={item?.price}
                      sold={item?.sold}
                      quantity={item?.quantity}
                      image={item?.images[0]}
                    />
                  );
                }
              })}
          </div>
        </div>
      </Container>

      {/* Ppopular Products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        {/* <div className="container-xxl"> */}
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>

          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div
                    key={index}
                    className={"col-12 col-xxl-3 col-xl-6 mb-4 mb-xxl-0"}
                  >
                    <div
                      className="product-card position-relative "
                      style={{ height: "510px" }}
                    >
                      <div
                        className="wishlist-icon position-absolute cursor-pointer"
                        onClick={(e) => {
                          addToWish(item?._id);
                        }}
                      >
                        <Tooltip
                          title="Add to Wishlist"
                          arrow
                          placement="right-end"
                        >
                          <IconButton aria-label="fav">
                            <FavoriteBorderIcon />
                          </IconButton>
                        </Tooltip>
                      </div>
                      {/* Product image */}
                      <div className="product-image d-flex align-items-center justify-content-center">
                        <img
                          className="img-fluid"
                          src={item?.images[0]}
                          alt="product image"
                        />
                        <img
                          className="img-fluid"
                          src={item?.images[1]}
                          alt="product image"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title ">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          value={3}
                          edit={false}
                          size={24}
                          activeColor="#ffd700"
                        />
                        <p
                          className={`description`}
                          // dangerouslySetInnerHTML={{ __html: item?.description }}
                        >
                          {item?.description}
                        </p>
                        <p className="price fw-bold">₹ {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute ">
                        <div className="d-flex flex-column gap-15">
                          <Link
                            to={"/product/" + item?._id}
                            className="border-0 bg-transparent"
                          >
                            <Tooltip
                              className="product-btn"
                              title="View Product"
                              arrow
                              placement="right-end"
                            >
                              <IconButton aria-label="fav">
                                <VisibilityIcon />
                              </IconButton>
                            </Tooltip>

                            {/*  <img src="/view.svg" alt="add cart" /> */}
                          </Link>

                          {/* <button className="border-0 bg-transparent">
                            <img src="/prodcompare.svg" alt="add cart" />
                          </button> */}
                          {/* <button className="border-0 bg-transparent">
                            <img src="/add-cart.svg" alt="add cart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>

        {/* </div> */}
      </Container>

      {/* marquee of different companies */}
      <Container class1="marque-wrapper py-5">
        {/* <div className="container-xxl"> */}
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/brand-03.png" alt="brand" />
                </div>
                <div>
                  <img src="/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/brand-05.png" alt="brand" />
                </div>
                <div>
                  <img src="/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Container>

      {/* 4 Blog Cards  */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        {/* <div className="container-xxl"> */}
        <div className="row ">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        {console.log(blogState)}
        <div className="row d-flex flex-wrap">
          {/* <div className="col-12"> */}
          {blogState &&
            blogState?.map((item, index) => {
              return (
                <div key={index} className="col-xxl-3 col-lg-6 col-12 mb-3">
                  <BlogCard
                    id={item?._id}
                    title={item?.title}
                    description={item?.description}
                    image={item?.images}
                    date={moment(item?.created_At).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  />
                </div>
              );
            })}
        </div>
        {/* </div> */}
        {/* </div> */}
      </Container>
    </>
  );
}

export default Home;
