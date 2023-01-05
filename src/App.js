// Import components
import Layout from "./components/layouts/Layout";
import { Route, Routes, Navigate } from "react-router-dom";


import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/home"/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </>
  )
}

export default App;

// Function to separate values in thousands
export const priceFormat = Intl.NumberFormat('es-ES')
