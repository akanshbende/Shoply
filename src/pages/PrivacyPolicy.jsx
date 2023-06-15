import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
// import { Link } from "react-router-dom";
function PrivacyPolicy() {
  return (
    <>
      {/* Tab heading */}
      <Meta title={"Privacy Policy"} />
      {/* Home */}
      <BreadCrumb title="Privacy Policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="policy">
              {/* Data is stored in DB and we fetch from DB */}
              <h1> Data is stored in DB and we fetch from DB</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
