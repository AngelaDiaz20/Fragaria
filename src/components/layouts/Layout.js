import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import AllRoutes from "../../routes/Routes";


const Layout = () => {

  return (
    <>
      <Header />

      <div>
        <AllRoutes />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
