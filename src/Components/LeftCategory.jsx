import React from "react";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

import ProductCard from "../Components/ProductCard";
import Color from "../Components/Color";
import Container from "../Components/Container";
import LeftPopOver from "../Components/LeftPopOver";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { TextField } from "@mui/material";
function LeftCategory() {
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [colors, setColors] = useState([]);

  //Filter Status
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState(null);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const productState = useSelector((state) => state.product.product);
  // console.log(productState);

  useEffect(() => {
    let newBrands = [];
    let category = [];
    let newTags = [];
    let newColors = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      // console.log(element.brand);
      // console.log(element.category);
      // const brand = element.brand;
      // const categoryOfBrand = element.category;

      newBrands.push(element.brand); //pushing brand in newBrand array
      category.push(element.category);
      newTags.push(element.tags);
      newColors.push(element.color);

      setBrands(newBrands);
      setCategories(category);
      setTags(newTags);
      setColors(newColors);
    }
  }, [productState]);

  // console.log(brands);
  // console.log(categories);
  // console.log(tags);
  // console.log(colors);
  return (
    <>
      {/* Filter Card by categories */}
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
        <div>
          {/* <h5 className="sub-title">Availability</h5>
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
          </div> */}

          {/* <div className="form-check d-flex align-items-center gap-10">
            <input
              className="form-check-input mb-1"
              type="checkbox"
              value=""
              id="defaultCheck2"
            />
            <label className="form-check-label" htmlFor="defaultCheck2">
              Out Of Stock (0)
            </label>
          </div> */}
        </div>
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

        {/* <h5 className="sub-title">Colors</h5>
        <div>
          <Color />
        </div> */}
        {/* <h5 className="sub-title">Size</h5> */}
        {/* <div>
        
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
        </div> */}
        {/* ------------------PUT HERE--------------- */}
      </div>
      {/* Filter product tags */}

      {/* Random Products */}
      {/* <div className="filter-card mb-3">
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
      </div> */}
      {/* Product Brands */}
    </>
  );
}

export default LeftCategory;
