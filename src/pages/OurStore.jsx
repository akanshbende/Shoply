import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import ReactStars from "react-rating-stars-component";
import { useState } from "react";

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

function OurStore() {
  const [grid, setGrid] = useState(4);
  const [width, setWidth] = useState(window.innerWidth);

  const productState = useSelector((state) => state.product.product);
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
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
          <div className="col-3 ">
            {/* {(width = {400} ? <LeftPopOver /> : <LeftCategory />)} */}
            {width <= 425 ? <LeftPopOver /> : <LeftCategory />}
          </div>

          {/* Right Side column: Filters etc.. */}
          <div className="col-9 ">
            {/* 4:20 */}
            <div className="filter-sort-grid mb-4">
              <div className="d-flex flex-wrap  justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By :
                  </p>

                  <Select
                    placeholder="Featured"
                    indicator={<KeyboardArrowDown />}
                    size="md"
                    sx={{
                      // width: 200,
                      // backgroundColor: "grey",
                      // color: "#ffffff",
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    <Option value="price-ascending">Price, Iow to high</Option>
                    <Option value="price-descending">Price, high to low</Option>
                    <Option value="created-ascending">Date, old to new</Option>
                    <Option value="created-descending">Date, new to old</Option>
                  </Select>
                </div>
                <div className="d-flex align-items-center gap-10 mt-xxl-0 d-none d-xxl-flex">
                  <p className="totalproducts mb-0">21 Products</p>
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
              <div className="d-flex gap-10 flex-wrap">
                {/* getting props form ProductCard */}
                {/* sending grid as a prop to child */}
                {productState && (
                  <ProductCard
                    grid={grid}
                    data={productState ? productState : []}
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
