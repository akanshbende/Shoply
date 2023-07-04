import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "../Components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { useEffect } from "react";
import { addTooWishlist } from "../features/products/productSlice";
function WishList() {
  const dispatch = useDispatch();

  useEffect(() => {
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());

    // console.log(getUserProductWishlist());
  };
  const wishListState = useSelector((state) => state.auth?.wishlist?.wishlist);

  // console.log(wishListState);
  const removeFromWishlist = () => {
    dispatch(addTooWishlist());
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Wishlist"} />
      {/* Home / Wishlist*/}
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {/* {wishListState.length === 0 && <div className=""> No data</div>} */}
          {wishListState &&
            wishListState?.map((item, index) => {
              return (
                <div className="col-xxl-3" key={index}>
                  <div className="wishlist-card position-relative">
                    {/* <img
                  src="/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                /> */}
                    <ClearIcon
                      className="position-absolute cross img-fluid"
                      onClick={() => {
                        removeFromWishlist(item?._id);
                      }}
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={
                          item?.images[0].url
                            ? item?.images[0].url
                            : "/watch.jpg"
                        }
                        className="img-fluid w-100"
                        alt="watch"
                      />
                    </div>
                    <div className=" py-3 px-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price mb-3 mt-3">{item?.price} </h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default WishList;
