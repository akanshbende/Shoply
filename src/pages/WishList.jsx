import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import ClearIcon from "@mui/icons-material/Clear";
import Container from "../Components/Container";
function WishList() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Wishlist"} />
      {/* Home / Wishlist*/}
      <BreadCrumb title="Wishlist" />

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-xxl-3">
            <div className="wishlist-card position-relative">
              {/* <img
                  src="/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                /> */}
              <ClearIcon className="position-absolute cross img-fluid" />
              <div className="wishlist-card-image">
                <img src="/watch.jpg" className="img-fluid w-100" alt="watch" />
              </div>
              <div className=" py-3 px-3">
                <h5 className="title">
                  Honor Tl 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100.00 </h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default WishList;
