import React from "react";
import { useSelector } from "react-redux";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Routes from "../../routes/Routes";
import Carts from "../UI/Cart/Carts";

const Layout = () => {
  // Show side cart
  const showCart = useSelector((state) => state.cartUI.cartIsVisible);

  return (
    <div>
      <Header />

      {showCart && <Carts />}

      <div>
        <Routes />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
