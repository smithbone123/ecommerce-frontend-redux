import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Blog = () => {
  return (
    <>
      <div>
        <Meta title={"Blogs"} />
        <BreadCrumb title="Blogs" />
        <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            {/* Left */}
            <div className="col-3">
              {/* Shop By Categories */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>
                      <Link to="/">Watch</Link>
                    </li>
                    <li>
                      <Link to="/">Camera</Link>
                    </li>
                    <li>
                      <Link to="/">Laptop</Link>
                    </li>
                    <li>
                      <Link to="/">Shoe</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-4">
                  {/* Blog Card 1 */}
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  {/* Blog Card 2 */}
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  {/* Blog Card 1 */}
                  <BlogCard />
                </div>
                <div className="col-6 mb-4">
                  {/* Blog Card 2 */}
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Blog;
