import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Faq = () => {
  return (
    <>
      <div>
        <Meta title={"FAQ"} />
        <BreadCrumb title="FAQ" />
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

export default Faq;
