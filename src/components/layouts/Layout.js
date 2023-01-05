import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "../../routes/Routes";


const Layout = () => {

  return (
    <>
      <Header />

      <div>
        <Routes />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
