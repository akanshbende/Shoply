import React from "react";
import ReactStars from "react-rating-stars-component";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { addTooWishlist } from "../features/products/productSlice";
function ProductCard(props) {
  const { grid, data } = props;
  // console.log(data);
  let location = useLocation();
  const dispatch = useDispatch();
  // console.log(data);

  const addToWish = (id) => {
    console.log("Product Card > id : ", id);
    dispatch(addTooWishlist(id));
    // console.log("Product Card : ", addToWishlist(id));
    // console.log("Product Card : ", dispatch(addToWishlist(id)));
  };
  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname == "/product" ? `gr-${grid}` : "col-xxl-3"
            } col-12 `}
          >
            <div className="product-card position-relative ">
              <div
                className="wishlist-icon position-absolute cursor-pointer"
                onClick={() => {
                  addToWish(item?._id);
                }}
              >
                {/* <Link> */}
                {/* <img src="/wish.svg" alt="" /> */}
                <IconButton aria-label="delete">
                  <FavoriteBorderIcon />
                </IconButton>
                {/* </Link> */}
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
                  width={269}
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
                  className={`description ${grid == 12 ? "d-block" : "d-none"}`}
                  // dangerouslySetInnerHTML={{ __html: item?.description }}
                >
                  {item?.description}
                </p>
                <p className="price">{item?.price}</p>
              </div>
              <div className="action-bar position-absolute mt-3">
                <div className="d-flex flex-column gap-15">
                  <Link
                    to={"/product/" + item?._id}
                    className="border-0 bg-transparent"
                  >
                    <IconButton className="product-btn" aria-label="delete">
                      <VisibilityIcon />
                    </IconButton>
                    {/*  <img src="/view.svg" alt="add cart" /> */}
                  </Link>
                  <Link className="border-0 bg-transparent">
                    <IconButton className="product-btn" aria-label="delete">
                      <CompareArrowsIcon />
                    </IconButton>
                    {/* <img src="/prodcompare.svg" alt="add cart" /> */}
                  </Link>
                  <Link className="border-0 bg-transparent">
                    <IconButton className="product-btn" aria-label="delete">
                      <WorkOutlineIcon />
                    </IconButton>
                    {/* <img src="/add-cart.svg" alt="add cart" /> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
