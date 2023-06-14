import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
function PrivacyPolicy() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Privacy Policy"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Privacy Policy" />
    </>
  );
}

export default PrivacyPolicy;
