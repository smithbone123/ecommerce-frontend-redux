import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
// images
import blog from "../images/blog-1.jpg";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const SingleBlog = () => {
  return (
    <>
      <div>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title="Dynamic Blog Name" />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className="d-flex align-items-center gap-10" to="/Blogs">
                  <HiArrowNarrowLeft />
                  Go Back to Blog
                </Link>

                <h3 className="title">Lorem Ipsum Dolor Sit</h3>
                <img className="img-fluid w-100 my-4" src={blog} alt="Blog" />
                <p>
                  Lorem ipsum dolor sit consectetur adipisicing elit. Magnam
                  quae, velit reprehenderit modi harum beatae earum perspiciatis
                  cumque nam distinctio, vero ipsam ullam eum eligendi animi
                  nostrum, tempora adipisci alias totam voluptatibus est
                  possimus inventore. Cum tempora minus non repudiandae quisquam
                  nulla atque doloribus incidunt, praesentium quia totam, fugiat
                  reprehenderit maiores excepturi soluta ipsam. Vitae
                  consequuntur officiis atque repellat incidunt, necessitatibus
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SingleBlog;
