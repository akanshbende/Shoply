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
          <LeftCategory />
        </div>
      </div>
    </>
  );
}

export default LeftPopOver;
