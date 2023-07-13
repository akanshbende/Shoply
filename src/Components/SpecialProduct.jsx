import React from "react";
import ReactStars from "react-rating-stars-component";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProduct, getAllProducts } from "../features/products/productSlice";
import { useEffect } from "react";
import { useTimer } from "react-timer-hook";
import ExpiryTimestamp from "./ExpiryTimestamp";
function SpecialProduct(props) {
  const { title, brand, totalrating, price, sold, quantity, id, image } = props;

  const ratings = parseInt(totalrating);
  return (
    <>
      <div className="col-xxl-3  mb-3">
        <div className="special-product-card " style={{ height: "570px" }}>
          <div className="d-flex flex-wrap d-flex align-items-center justify-content-center ">
            <div className="d-flex">
              <img
                className="img-fluid rounded-3"
                style={{ height: "200px" }}
                src={image}
                alt="watch"
              />
            </div>
            <div className="special-product-content mt-3 ms-3 w-100">
              <h5 className="brand">{brand}</h5>
              {/* {console.log(totalrating)} */}
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                value={ratings}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p fw-bold">$ {price}</span>
              </p>
              <div className="discount-till d-flex flex-wrap align-items-center gap-3 ">
                <p className="">
                  <b>1 </b>day
                </p>
                <div className="d-flex ">
                  {/* <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span>
                  :
                  <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span>
                  :
                  <span className="badge rounded-circle p-xxl-3 p-sm-2 bg-danger">
                    1
                  </span> */}
                  <ExpiryTimestamp />
                </div>
                <p> left</p>
              </div>
              <div className="prod-count my-3">
                <p>Products Left : {quantity}</p>

                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: (quantity / (sold + quantity)) * 100 + "%",
                    }}
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
