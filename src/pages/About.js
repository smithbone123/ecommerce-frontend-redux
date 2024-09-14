import React from "react";
import BreadCrumb from "../components/BreadCrumb";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";

const About = () => {
  return (
    <>
      <div>
        <Meta title={"About"} />
        <BreadCrumb title="About" />
        <Container class1="about-wrapper home-wrapper-2 py-5">
          <div className="row">
            {/* information */}
            <div className="col-12 mt-0">
              <div className="about-inner-wrapper">
                <div>
                  <h3 className="about-title mb-4">About</h3>
                  <p>
                    Lorem eiusmod pariatur ut non consectetur velit dolore
                    eiusmod officia exercitation sunt elit veniam laboris. Sit
                    non fugiat qui adipisicing cupidatat deserunt. Voluptate
                    aliqua eu enim eu laborum pariatur minim. Deserunt proident
                    labore incididunt non ut deserunt quis ipsum adipisicing ea
                    proident incididunt proident anim. Proident nulla consequat
                    cillum quis ullamco pariatur qui qui. Reprehenderit veniam
                    do officia sint esse culpa. Officia velit excepteur in amet
                    sunt aute exercitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About;
