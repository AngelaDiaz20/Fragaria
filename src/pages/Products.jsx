import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate";

//import components
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Products from "../store/data/products"
import ProductCard from "../components/common/ProductCard"

// import icons from react-icons
import { FaSearch } from 'react-icons/fa'
import { RxDoubleArrowRight, RxDoubleArrowLeft } from 'react-icons/rx'

//import images
import All from '../assets/img/products/combos/combo_01.jpg'
import Chocolate from '../assets/img/products/Fresas_chocolates/fresas_01.jpg'
import Torta from '../assets/img/products/tortas/torta_02.jpg'
import Desayuno from '../assets/img/products/desayunos/desayuno_05.jpg'
import Mug from '../assets/img/products/mugs_agendas/agenda_combo.jpg'
import Combo from '../assets/img/products/combos/combo_05.jpg'

const Product = () => {
  // Search product
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState(Products);

  // Filter searched products
  const searchedProduct = allProducts.filter((item) => {
    if (search.value === "") return item;

    if (item.name.toLowerCase().includes(search.toLowerCase())) return item;
  });

  // Filter all products
  const [category, setCategory] = useState("ALL");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  // Products per page
  const productPerPage = 12;

  const visitedPage = pageNumber * productPerPage;

  // Displayed page
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  // Number of pages to generate
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  // Switch to selected page
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Filter all products
  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(Products);
    }

    // Filter products by category 
    if (category === "Chocolates") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Chocolates"
      );
      setAllProducts(filteredProducts);
    }

    // Filter products by category
    if (category === "Desayunos") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Desayunos"
      );
      setAllProducts(filteredProducts);
    }

    // Filter products by category
    if (category === "Tortas") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Tortas"
      );
      setAllProducts(filteredProducts);
    }

    // Filter products by category
    if (category === "Mugs-agendas") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Mugs-agendas"
      );
      setAllProducts(filteredProducts);
    }

    // Filter products by category
    if (category === "Combos") {
      const filteredProducts = Products.filter(
        (item) => item.category === "Combos"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <>
    <Header/>

      <main className='container_products'>

        <section className="container_categories">
        
            <div className="bg-search">

              <h1>Encuentra el detalle perfecto</h1>

              {/* product finder */}
              <div className='search'>
                <input
                  placeholder='Búsqueda de deseos'
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <FaSearch className='search_icon' />
              </div>
            </div>

          {/* category filters */}
          <div className='categories'>
            <button
              className={`all__btn button_category ${
                category === "ALL" ? "button_active" : ""
              }`}
              onClick={() => setCategory("ALL")}
            >
              <img src={All} alt="Imagen categoría" />
              Todo <RxDoubleArrowRight  className="btnn"/>
            </button>

            <button
              className={`button_category ${
                category === "Chocolates" ? "button_active" : ""
              }`}
              onClick={() => setCategory("Chocolates")}
            >
              <img src={Chocolate} alt="Imagen categoría" />
              Chocolates
            </button>

            <button
              className={`button_category ${
                category === "Desayunos" ? "button_active" : ""
              }`}
              onClick={() => setCategory("Desayunos")}
            >
              <img src={Desayuno} alt="Imagen categoría" />
              Desayunos sorpresa
            </button>

            <button
              className={`button_category ${
                category === "Tortas" ? "button_active" : ""
              }`}
              onClick={() => setCategory("Tortas")}
            >
              <img src={Torta} alt="Imagen categoría" />
              Tortas
            </button>

            <button
              className={`button_category ${
                category === "Mugs-agendas" ? "button_active" : ""
              }`}
              onClick={() => setCategory("Mugs-agendas")}
            >
              <img src={Mug} alt="Imagen categoría" />
              Mugs y agendas
            </button>

            <button
              className={`button_category ${
                category === "Combos" ? "button_active" : ""
              }`}
              onClick={() => setCategory("Combos")}
            >
              <img src={Combo} alt="Imagen categoría" />
              Combos
            </button>
          </div>

        </section> 

        {/* Products cards */}
        <section className='products_cards'>
          {displayPage.map((item)  => (
            <ProductCard
              key={item.id}
              item={item}
            />
            ))}
        </section>
      </main>

          {/* product pagination */}
          <div className="container_paginate">
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={changePage}
              previousLabel={<RxDoubleArrowLeft/>}
              nextLabel={<RxDoubleArrowRight/>}
              containerClassName="paginationBttns"
              activeClassName={"active_pagination"}
            />
          </div>
      <Footer/>
    </>
  );
};

export default Product;
