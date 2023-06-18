import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
function TermAndConditions() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Term And Conditions"} />
      {/* Home / Sign Up*/}
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
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

export default TermAndConditions;
