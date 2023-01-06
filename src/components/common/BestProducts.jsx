import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// Import data products
import Products from "../../assets/data/products";

// Import Styles
import { Col } from "reactstrap";

// Import components
import ProductCard from "./ProductCard";

import All from '../../assets/img/products/combos/combo_01.jpg'
import Chocolate from '../../assets/img/products/Fresas_chocolates/fresas_01.jpg'
import Torta from '../../assets/img/products/tortas/torta_02.jpg'
import Desayuno from '../../assets/img/products/desayunos/desayuno_05.jpg'
import Mug from '../../assets/img/products/mugs_agendas/agenda_combo.jpg'
import Combo from '../../assets/img/products/combos/combo_05.jpg'

const BestProducts = () => {
  // State for categories
  const [category, setCategory] = useState("allProducts");

  // State for bestseller products
  const [allProducts, setAllProducts] = useState(Products);

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  // Products per page
  const productPerPage = 8;

  const visitedPage = pageNumber * productPerPage;

  // Displayed page
  const displayPage = allProducts.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // Number of pages to generate
  const pageCount = Math.ceil(allProducts.length / productPerPage);

  // Switch to selected page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filter all products
  useEffect(() => {
    if (category === "allProducts") {
      // Filter all products best seller
      const filteredProducts = Products.filter(
        (item) => item.outstanding === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Chocolates") {
      // Filter products for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Chocolates" && item.outstanding === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Desayunos") {
      // Filter products for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Desayunos" && item.outstanding === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Tortas") {
      // Filter products for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Tortas" && item.outstanding === true
      );

      setAllProducts(filteredProducts);
    }

    if (category === "Mugs-agendas") {
      // Filter products for their category
      const filteredProducts = Products.filter(
        (item) => item.category === "Mugs-agendas" && item.outstanding === true
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
      {/* Filter  */}
      <Col lg="12">
        <div className="filter__category d-flex align-items-center justify-content-center">
          <button
            className={`all__btn ${
              category === "allProducts" ? "button_active" : ""
            }`}
            onClick={() => setCategory("ALL")}
          > 
            <img src={All} alt="Imagen categoría" />
            Todo
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "Chocolates" ? "button_active" : ""
            }`}
            onClick={() => setCategory("Chocolates")}
          >
            <img src={Chocolate} alt="Imagen categoría" />
            Chocolates
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "Desayunos" ? "button_active" : ""
            }`}
            onClick={() => setCategory("Desayunos")}
          >
            <img src={Desayuno} alt="Imagen categoría" />
            Desayunos sorpresa
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "Tortas" ? "button_active" : ""
            }`}
            onClick={() => setCategory("Tortas")}
          >
            <img src={Torta} alt="Imagen categoría" />
            Tortas
          </button>

          <button
            className={`d-flex align-items-center gap-2 ${
              category === "Mugs-agendas" ? "button_active" : ""
            }`}
            onClick={() => setCategory("Mugs-agendas")}
          >
            <img src={Mug} alt="Imagen categoría" />
            Mugs y agendas
          </button>
        </div>
      </Col>


      {/* Cards with the best products*/}
      {displayPage.map((item) => (
        <Col lg="3" md="4" xs="6" key={item.id} className="mt-5 d-flex">
          <ProductCard item={item} />
        </Col>
      ))}

      {/* Pagination */}
      <div>
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          containerClassName="paginationBttns"
        />
      </div>
    </>
  );
};

export default BestProducts;
