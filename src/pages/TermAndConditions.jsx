import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function TermAndConditions() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Term And Conditions"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Term And Conditions" />
    </>
  );
}

export default TermAndConditions;
