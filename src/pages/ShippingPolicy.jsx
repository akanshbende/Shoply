import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
function ShippingPolicy() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Shipping Policy"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="policy">
            {/* Data is stored in DB and we fetch from DB */}
            <h1> Data is stored in DB and we fetch from DB</h1>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ShippingPolicy;
