import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";

const Routers = () => {
  return (
    <Routes>
      {/* Generate routes for navigation between pages */}
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
