import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
// meta
import Meta from "../components/Meta";
// container
import Container from "../components/Container";
// API Data
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Meta title={"Home"} />
      {/* Banner */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          {/* main banner */}
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                className="img-fluid rounded-3"
                src="/images/main-banner.jpg"
                alt="Main Bannner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED</h4>
                <h5>Lorem Ipsum</h5>
                <p>orem ipsum dolor sit</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          {/* small banner */}
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              {/* banner 1 */}
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-01.jpg"
                  alt="Main Bannner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best sale</h4>
                  <h5>Lorem Ipsum</h5>
                  <p>orem ipsum dolor sit</p>
                </div>
              </div>
              {/* banner 2 */}
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-02.jpg"
                  alt="Main Bannner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Lorem Ipsum</h5>
                  <p>orem ipsum dolor sit</p>
                </div>
              </div>
              {/* banner 3 */}
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-03.jpg"
                  alt="Main Bannner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPER CHARGED</h4>
                  <h5>Lorem Ipsum</h5>
                  <p>orem ipsum dolor sit</p>
                </div>
              </div>
              {/* banner 4 */}
              <div className="small-banner position-relative">
                <img
                  className="img-fluid rounded-3"
                  src="/images/catbanner-04.jpg"
                  alt="Main Bannner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPER CHARGED</h4>
                  <h5>Lorem Ipsum</h5>
                  <p>orem ipsum dolor sit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Info */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {/* Fetchig the data */}
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
              {/* Fetchig the data */}
            </div>
          </div>
        </div>
      </Container>

      {/* Categories*/}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              {/* cat 1 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              {/* cat 2 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/tv.jpg" alt="TV" />
              </div>
              {/* cat 3 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/headphone.jpg" alt="Headphone" />
              </div>
              {/* cat 4 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/speaker.jpg" alt="Speaker" />
              </div>
              {/* cat 5 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/camera.jpg" alt="Camera" />
              </div>
              {/* cat 6 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/tv.jpg" alt="TV" />
              </div>
              {/* cat 7 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/headphone.jpg" alt="Headphone" />
              </div>
              {/* cat 8 */}
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="/images/speaker.jpg" alt="Speaker" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Featured collections */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collections</h3>
          </div>
          {/* Product card 1 */}
          <ProductCard />
          {/* Product card 2 */}
          <ProductCard />
          {/* Product card 3 */}
          <ProductCard />
          {/* Product card 4 */}
          <ProductCard />
        </div>
      </Container>

      {/* Famous Product */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          {/* 1 */}
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="/images/famous-1.jpg"
                alt="Famous 1"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399/mo for 24 months</p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="/images/famous-2.jpg"
                alt="Famous 1"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of Brightness</h6>
                <p className="text-dark">27 inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="/images/famous-3.jpg"
                alt="Famous 1"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Smart Phones</h5>
                <h6 className="text-dark">IPhone 13 Pro</h6>
                <p className="text-dark">27 inch 5k Retina Display</p>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                className="img-fluid"
                src="/images/famous-4.jpg"
                alt="Famous 1"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room-Filling Sound</h6>
                <p className="text-dark">27 inch 5k Retina Display</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Special products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          {/* SpecialProduct 1 */}
          <SpecialProduct />
          {/* SpecialProduct 2 */}
          <SpecialProduct />
          {/* SpecialProduct 3 */}
          <SpecialProduct />
          {/* SpecialProduct 4 */}
          <SpecialProduct />
        </div>
      </Container>

      {/* Popular products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products</h3>
          </div>
          {/* Product card 1 */}
          <ProductCard />
          {/* Product card 2 */}
          <ProductCard />
          {/* Product card 3 */}
          <ProductCard />
          {/* Product card 4 */}
          <ProductCard />
        </div>
      </Container>

      {/* Brand Slider Marquee */}
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                {/* Brand 1 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-01.png" alt="Brand" />
                </div>
                {/* Brand 2 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-02.png" alt="Brand" />
                </div>
                {/* Brand 3 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-03.png" alt="Brand" />
                </div>
                {/* Brand 4 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-04.png" alt="Brand" />
                </div>
                {/* Brand 5 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-05.png" alt="Brand" />
                </div>
                {/* Brand 6 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-06.png" alt="Brand" />
                </div>
                {/* Brand 7 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-07.png" alt="Brand" />
                </div>
                {/* Brand 8 */}
                <div className="mx-4 w-25">
                  <img src="/images/brand-08.png" alt="Brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      {/* Blog */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
          <div className="col-3">
            {/* Blog Card 1 */}
            <BlogCard />
          </div>
          <div className="col-3">
            {/* Blog Card 2 */}
            <BlogCard />
          </div>
          <div className="col-3">
            {/* Blog Card 3 */}
            <BlogCard />
          </div>
          <div className="col-3">
            {/* Blog Card 4 */}
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
