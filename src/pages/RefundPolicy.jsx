import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function RefundPolicy() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Refund Policy"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Refund Policy" />
    </>
  );
}

export default RefundPolicy;
