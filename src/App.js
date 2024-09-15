import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Checkout from "./pages/Checkout";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndConditions from "./pages/TermAndConditions";
import Faq from "./pages/Faq";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Home page */}
            <Route index element={<Home />} />
            {/* Store page */}
            <Route path="stores" element={<OurStore />} />
            {/* Single Product page */}
            <Route path="product/:id" element={<SingleProduct />} />
            {/* About page */}
            <Route path="about" element={<About />} />
            {/* Blog page */}
            <Route path="blogs" element={<Blog />} />
            {/* Single Blog page */}
            <Route path="blog/:id" element={<SingleBlog />} />
            {/* Contact page */}
            <Route path="contact" element={<Contact />} />
            {/* Privacy Policy page */}
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            {/* Refund Policy page */}
            <Route path="refund-policy" element={<RefundPolicy />} />
            {/* Shipping Policy page */}
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            {/* Term And Conditions page */}
            <Route path="term-and-conditions" element={<TermAndConditions />} />
            {/* FAQ page */}
            <Route path="faq" element={<Faq />} />
            {/* Compare Product page */}
            <Route path="compare-product" element={<CompareProduct />} />
            {/* Wishlist page */}
            <Route path="wishlist" element={<Wishlist />} />
            {/* Cart page */}
            <Route path="cart" element={<Cart />} />
            {/* Login page */}
            <Route path="login" element={<Login />} />
            {/* Register page */}
            <Route path="register" element={<Register />} />
            {/* Forgot Password page */}
            <Route path="forgot-password" element={<ForgotPassword />} />
            {/* Reset Password page */}
            <Route path="reset-password" element={<ResetPassword />} />
            {/* Checkout page */}
            <Route path="checkout" element={<Checkout />} />
            {/* NotFound page */}
            {/* <Route path="/*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
