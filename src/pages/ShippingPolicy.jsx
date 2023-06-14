import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function ShippingPolicy() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Shipping Policy"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Shipping Policy" />
    </>
  );
}

export default ShippingPolicy;
