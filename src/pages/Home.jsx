import React, {useNavigate} from "react";
import { Link } from "react-router-dom";

import Store from '../assets/img/store.png'

import Product1 from '../assets/img/products/product_1.jpg'
import Product2 from '../assets/img/products/product_2.jpg'
import Product3 from '../assets/img/products/product_3.jpg'
import Product4 from '../assets/img/products/product_4.jpg'
import Banner from '../assets/img/banner.png'

import Button from '../components/common/Button'

const Home = () => {

  return (
    <>
      <main>
        <div className='banner_container'>
          <img src={Banner} alt="Banner" className='banner' />
          <div className="bg-color">
            <Link to='/products'><Button text="Ir a la tienda" classe="button_banner" /></Link>
          </div>
        </div>
        <section className='summary'>
          <img src={Store} alt="Imagen de tienda" />
          <div className='description'>
            <div>
              <h1>Fresas & </h1>
              <h1>Detalles</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores dolorum esse aliquam, laborum eos libero sed vel repellat eveniet nam officia fugiat minima. Laboriosam laborum dolor fugit velit beatae. <br /><br />
              Assumenda quia eveniet facere corrupti alias, neque animi ut aliquid qui odit eaque non voluptates facilis illum nulla, accusamus harum, totam blanditiis quas dolore. </p></div>
        </section>

        <section className='products_catalogue'>
          <h1 className='title-po'>Cónoce nuestros productos</h1>
          <article>
            <div className="curve_top">
              <img src={Product1} alt="" />
            </div>
            <div className="curve_top">
              <img src={Product2} alt="" />
            </div>
            <div className="curve_bottom">
              <img src={Product3} alt="" />
            </div>
            <div className="curve_bottom">
              <img src={Product4} alt="" />
            </div>
          </article>

          <div className="bg-color btn_catalog">
          <Link to='/products'><Button text="Ver catálogo" classe="button" /></Link>
          </div>
            
        </section>
      </main>

    </>
  );
};

export default Home;
