import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Color from "../Components/Color";
import ClearIcon from "@mui/icons-material/Clear";
function CompareProducts() {
  return (
    <>
      <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
              <div className="compare-product-card position-relative">
                {/* <img
                  src="/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                /> */}
                <ClearIcon className="position-absolute cross img-fluid" />
                <div className="product-card-image d-flex align-items-center justify-content-center">
                  <img className="img-fluid " src="/watch.jpg" alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title ">
                    Honor Tl 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100.00 </h6>
                  <div>
                    <div className="product-detail">
                      <h5> Brand : </h5>
                      <p> Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5> Type : </h5>
                      <p> Watch </p>
                    </div>
                    <div className="product-detail">
                      <h5> Availiblity : </h5>
                      <p> In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5> Color : </h5>
                      {/* Can change with props */}
                      {/* Coloured Products */}
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5> Size : </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5.27 */}
    </>
  );
}

export default CompareProducts;
