import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import ReactStars from "react-rating-stars-component";
import { useState } from "react";
import { IconButton } from "@mui/material";

import ProductCard from "../Components/ProductCard";
import Color from "../Components/Color";
import Container from "../Components/Container";
import LeftPopOver from "../Components/LeftPopOver";
import LeftCategory from "../Components/LeftCategory";
import Select, { selectClasses } from "@mui/joy/Select";
import { Option } from "@mui/joy";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { TextField, Tooltip } from "@mui/material";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";
function OurStore() {
  const [grid, setGrid] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  //Filter Status
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const [sort, setSort] = useState(null);
  const productsState = useSelector((state) => state?.product?.product);
  console.log(productsState);

  const [restoreState, setRestoreState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setRestoreState(productsState);
    }, 500);
  }, []);
  console.log(restoreState);
  // const options = [
  //   { name: "One", assigned: true },
  //   { name: "Two", assigned: false },
  //   { name: "Three", assigned: true },
  // ];

  // const filtered = options.reduce(
  //   (result, { name, name="One" }) =>
  //     assigned ? result.push(name) && result : result,
  //   []
  // );

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, brand, category, minPrice, maxPrice]);

  const getProducts = () => {
    dispatch(
      getAllProducts({ sort, tag, brand, category, minPrice, maxPrice })
    );
  };

  const getWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [width]);

  // console.log(productsState);

  // const allProductState = useSelector((state) => state?.product?.allProducts);
  // console.log(allProductState);

  console.log(restoreState);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    // let newColors = [];

    for (let index = 0; index < productsState?.length; index++) {
      const element = productsState[index];

      newBrands.push(element.brand); //pushing brand in newBrand array
      category.push(element.category);
      newTags.push(element.tags);
      // newColors.push(element.color);

      setBrands(newBrands);
      setCategories(category);
      setTags(newTags);
      // setColors(newColors);
    }
  }, [productsState]);

  const navigate = useNavigate();

  console.log(productsState);
  console.log(brands);
  console.log(tags);
  console.log(categories);

  const resetProducts = () => {
    dispatch(getAllProducts());
    // navigate("/product");
  };

  return (
    <>
      {/* Tab heading */}
      <Meta title={"Our Store"} />
      {/* Home / Our Store */}
      <BreadCrumb title="Our Store" />
      {/* <h1>{width}</h1> */}
      <Container class1="store-wrapper home-wrapper-2 py-4">
        <div className="row d-flex flex-wrap">
          {/* d-flex align-items-center justify-content-center */}
          {/* Left Side column: Filters etc.. */}
          <div className="col-xxl-3 col-1">
            {/* {(width = {400} ? <LeftPopOver /> : <LeftCategory />)} */}
            {width <= 425 ? (
              <>
                <Link
                  data-bs-toggle="offcanvas"
                  to="#offcanvasExample"
                  role="button"
                  aria-controls="offcanvasExample"
                >
                  <Tooltip title="Delete">
                    <IconButton>
                      <DensityMediumIcon />
                    </IconButton>
                  </Tooltip>
                </Link>

                <div
                  className="offcanvas offcanvas-start"
                  tabindex="-1"
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasExampleLabel">
                      Extras
                    </h3>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    {/* Filter Card by categories */}
                    {/* <LeftCategory />
                     */}

                    <div className="filter-card mb-3">
                      <button
                        className="mb-3 w-50 p-2 rounded  "
                        style={{
                          backgroundColor: "#000000",
                          color: "white",
                          border: "none",
                          outline: "none",
                        }}
                        onClick={resetProducts}
                      >
                        <RotateLeftIcon /> Reset Filter
                      </button>
                      <h4 className="filter-title">Shop By Categories</h4>
                      <div>
                        <ul className="ps-0">
                          {categories &&
                            [...new Set(categories)].map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  onClick={() => setCategory(item)}
                                >
                                  {item}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                    {/* Filtwr bt availability, color,size */}
                    <div className="filter-card mb-3">
                      <h4 className="filter-title">Filter By</h4>
                      <div></div>
                      <h5 className="sub-title">Price</h5>
                      <div className="d-flex align-items-center gap-10">
                        <div className="form-floating">
                          <TextField
                            id="outlined-number"
                            variant="outlined"
                            label="From"
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) => {
                              setMinPrice(e.target.value);
                            }}
                          />
                          {/* <label htmlFor="floatingInput">From</label> */}
                        </div>
                        <div className="form-floating">
                          <TextField
                            id="outlined-number"
                            label="To"
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            variant="outlined"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) => {
                              setMaxPrice(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="mt-4 mb-3">
                        <h4 className="sub-title">Product Tags</h4>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                          {/* tags:headphone,laptop,Mobile,Wire */}
                          {tags &&
                            [...new Set(tags)].map((item, index) => {
                              return (
                                <span
                                  key={index}
                                  className="badge bg-light text-secondary rounded-3 py-2 px-3"
                                  onClick={() => setTag(item)}
                                >
                                  {item}
                                </span>
                              );
                            })}
                        </div>
                      </div>
                      <div className="mt-4 mb-3">
                        <h4 className="sub-title">Product Brands</h4>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                          {/* tags:headphone,laptop,Mobile,Wire */}
                          {/* {console.log(brands)} */}
                          {brands &&
                            [...new Set(brands)].map((item, index) => {
                              return (
                                <span
                                  key={index}
                                  className="badge bg-light text-secondary rounded-3 py-2 px-3"
                                  onClick={() => setBrand(item)}
                                >
                                  {item}
                                </span>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button
                  className="mb-3 w-50 p-2 rounded  "
                  style={{
                    backgroundColor: "#000000",
                    color: "white",
                    border: "none",
                    outline: "none",
                  }}
                  onClick={resetProducts}
                >
                  <RotateLeftIcon /> Reset Filter
                </button>
                <div className="filter-card mb-3">
                  <h4 className="filter-title">Shop By Categories</h4>
                  <div>
                    <ul className="ps-0">
                      {/* # BUG -other options are not rendering on clicking
                      particular option */}
                      {categories &&
                        [...new Set(categories)].map((item, index) => {
                          return (
                            <li
                              className=" align"
                              key={index}
                              onClick={() => {
                                setCategory(item);
                              }}
                            >
                              <h5>{item}</h5>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </div>
                {/* Filtwr bt availability, color,size */}
                <div className="filter-card mb-3">
                  <h4 className="filter-title">Filter By</h4>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <TextField
                        id="outlined-number"
                        variant="outlined"
                        label="From"
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setMinPrice(e.target.value);
                        }}
                      />
                      {/* <label htmlFor="floatingInput">From</label> */}
                    </div>
                    <div className="form-floating">
                      <TextField
                        id="outlined-number"
                        label="To"
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        variant="outlined"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => {
                          setMaxPrice(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="sub-title">Product Tags</h4>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {/* tags:headphone,laptop,Mobile,Wire */}
                      {tags &&
                        [...new Set(tags)].map((item, index) => {
                          return (
                            <span
                              key={index}
                              className="badge bg-light text-secondary rounded-3 py-2 px-3"
                              onClick={() => setTag(item)}
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                  <div className="mt-4 mb-3">
                    <h4 className="sub-title">Product Brands</h4>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {/* tags:headphone,laptop,Mobile,Wire */}
                      {/* {console.log(brands)} */}
                      {brands &&
                        [...new Set(brands)].map((item, index) => {
                          return (
                            <span
                              key={index}
                              className="badge bg-light text-secondary rounded-3 py-2 px-3"
                              onClick={() => setBrand(item)}
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Side column: Filters etc.. */}
          <div className="col-9 ">
            <div className="filter-sort-grid mb-4 ms-4">
              <div className="d-flex flex-wrap  justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ maxWidth: "100px" }}>
                    Sort By :
                  </p>
                  {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
                  <select
                    // id="demo-select-small"
                    placeholder="Featured"
                    label="Featured"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    style={{
                      padding: 5,
                      borderRadius: "5px",
                      outline: "none",
                      border: "none",
                      backgroundColor: "#4d5765",
                      color: "#FFFFFF",
                    }}
                  >
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, Iow to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 mt-xxl-0 mt-3 mt-xxl-0  d-xxl-flex d-none">
                  <p className="totalproducts mb-0">
                    {productsState.length}
                    {productsState.length === 1 ? `Product` : `Products`}
                  </p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="product-list pb-5">
              <div className="d-flex col-12 gap-10 flex-wrap">
                {/* getting props form ProductCard */}
                {/* sending grid as a prop to child */}
                {productsState?.length === 0 && (
                  <div className="col-12 d-flex flex-column  align-items-center justify-content-center gap-5 justify-content-center ">
                    <img
                      src="\no-product.png"
                      // width={400}
                      alt=""
                      className="col-12 col-xxl-6"
                    />
                    <h1> No Product Found</h1>
                  </div>
                )}
                {productsState && (
                  <ProductCard
                    grid={grid}
                    data={productsState ? productsState : []}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default OurStore;
