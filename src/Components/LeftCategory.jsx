import React from "react";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

import ProductCard from "../Components/ProductCard";
import Color from "../Components/Color";
import Container from "../Components/Container";
import LeftPopOver from "../Components/LeftPopOver";
function LeftCategory() {
  return (
    <>
      {/* Filter Card by categories */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Shop By Categories</h3>
        <div>
          <ul className="ps-0">
            <li>Watch</li>
            <li>TV</li>
            <li>Camera</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
      {/* Filtwr bt availability, color,size */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Filter By</h3>
        <div>
          <h5 className="sub-title">Availability</h5>
          <div className="form-check d-flex align-items-center gap-10">
            <input
              className="form-check-input mb-1"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              In Stock (1)
            </label>
          </div>

          <div className="form-check d-flex align-items-center gap-10">
            <input
              className="form-check-input mb-1"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label className="form-check-label" htmlFor="defaultCheck2">
              Out Of Stock (0)
            </label>
          </div>
        </div>
        <h5 className="sub-title">Price</h5>
        <div className="d-flex align-items-center gap-10">
          <div className="form-floating">
            <input
              type="email"
              className="form-control py-1"
              id="floatingInput"
              placeholder="From"
            />
            <label htmlFor="floatingInput">From</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control py-1"
              id="floatingInput"
              placeholder="To"
            />
            <label htmlFor="floatingInput">To</label>
          </div>
        </div>
        <h5 className="sub-title">Colors</h5>
        <div>
          {/* Can change with props */}
          {/* Coloured Products */}
          <Color />
        </div>
        <h5 className="sub-title">Size</h5>
        <div>
          {/* checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="color-1"
            />
            <label className="form-check-label" htmlFor="color-1">
              S (2)
            </label>
          </div>
          {/* checkbox */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="color-2"
            />
            <label className="form-check-label" htmlFor="color-2">
              M (1)
            </label>
          </div>
        </div>
      </div>
      {/* Filter product tags */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Product Tags</h3>
        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
            Headphone
          </span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
            Laptop
          </span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
            Mobile
          </span>
          <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
            Wire
          </span>
        </div>
      </div>

      {/* Random Products */}
      <div className="filter-card mb-3">
        <h3 className="filter-title">Random Product</h3>
        <div>
          <div className="random-products mb-3 d-flex">
            <div className="w-50">
              <img className="img-fluid" src="/watch.jpg" alt="watch" />
            </div>
            <div className="w-50">
              <h5>Kids headphones bulk 10 pack multi colored for students</h5>
              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <b>$300</b>
            </div>
          </div>
          <div className="random-products d-flex">
            <div className="w-50">
              <img className="img-fluid" src="/watch.jpg" alt="watch" />
            </div>
            <div className="w-50">
              <h5>Kids headphones bulk 10 pack multi colored for students</h5>
              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <b>$300</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftCategory;
