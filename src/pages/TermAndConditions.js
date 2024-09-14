import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";

const TermAndConditions = () => {
  return (
    <>
      <div>
        <Meta title={"Term And Conditions"} />
        <BreadCrumb title="Term And Conditions" />
        <Container class1="policy-wrapper py-5 home-wrapper-2">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TermAndConditions;
