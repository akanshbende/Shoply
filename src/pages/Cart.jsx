import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import Checkout from "./Checkout";

function Cart() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Checkout"} />
      {/* Home / Checkouts*/}
      <BreadCrumb title="Checkout" />
      <Checkout />
    </>
  );
}

export default Cart;
