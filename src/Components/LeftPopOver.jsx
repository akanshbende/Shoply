import React from "react";
import { Helmet } from "react-helmet";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

import ReactStars from "react-rating-stars-component";
import { useState } from "react";

import ProductCard from "../Components/ProductCard";
import Color from "../Components/Color";
import Container from "../Components/Container";

import { Link } from "react-router-dom";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import LeftCategory from "./LeftCategory";
function LeftPopOver() {
  return (
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
            <h4 className="filter-title">Shop By Categories</h4>
            <div>
              <ul className="ps-0">
                {categories &&
                  [...new Set(categories)].map((item, index) => {
                    return (
                      <li key={index} onClick={() => setCategory(item)}>
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
        </div>
      </div>
    </>
  );
}

export default LeftPopOver;
