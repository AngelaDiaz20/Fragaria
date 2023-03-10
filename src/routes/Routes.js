import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllProducts from "../pages/Products";
import ProductDetails from "../pages/ProductDetail";
import Cart from "../pages/Cart";

import { ScrollToTop } from "../components/common/ScrollToTop";

const AllRoutes = () => {
  return (
    <>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  );
};

export default AllRoutes;
