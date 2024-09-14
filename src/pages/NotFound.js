import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";

const NotFound = () => {
  return (
    <>
      <div>
        <Meta title={"Page Not Found"} />
        <BreadCrumb title="Page Not Found" />
        <Container class1="checkout-wrapper">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center py-5 mb-0">Page Not Found</h3>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;
