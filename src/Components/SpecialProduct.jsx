import React from "react";
import ReactStars from "react-rating-stars-component";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct, getAllProducts } from "../features/products/productSlice";
import { useEffect } from "react";
function SpecialProduct(props) {
  const { title, brand, totalrating, price, sold, quantity, id } = props;

  return (
    <>
      <div className="col-xxl-3 mb-3">
        <div className="special-product-card">
          <div className="d-flex flex-wrap d-flex align-items-center justify-content-center ">
            <div className="d-flex  ">
              <img className="img-fluid" src="/watch.jpg" alt="watch" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                value={totalrating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ {price}</span>
              </p>
              <div className="discount-till d-flex flex-wrap align-items-center gap-10">
                <p className="mb-0">
                  <b>5 </b>days
                </p>
                <div className="d-flex gap-10 align-items-center">
                  <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span>
                  :
                  <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span>
                  :
                  <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span>
                </div>
              </div>
              <div className="prod-count my-3">
                <p>Products :{quantity}</p>

                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: quantity / sold + quantity * 100 + "%" }}
                    aria-valuenow={sold + quantity * 100}
                    aria-valuemin={quantity}
                    aria-valuemax={sold + quantity}
                  ></div>
                </div>
              </div>
              <Link className="button" to={"/product/" + id}>
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialProduct;
