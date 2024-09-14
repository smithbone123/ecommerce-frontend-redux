import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div className="blog-card">
        <div className="card-image">
          <Link className="w-100" to="/blog/:id">
            <img
              className="img-fluid w-100"
              src="/images/blog-1.jpg"
              alt="Blog"
            />
          </Link>
        </div>
        <div className="blog-content">
          <p className="date">02 March, 2024</p>
          <h5 className="title">
            <Link>Lorem ipsum dolor sit consectetur</Link>
          </h5>
          <p className="desc">
            Fugiat reprehenderit maiores excepturi soluta ipsam vitae
            consequuntur
          </p>
          <Link className="button" to="/blog/:id">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
