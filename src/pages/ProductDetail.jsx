// Import dependencies
import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import data products
import Products from "../store/data/products";
import { formatPrice } from "../App";
import { cartActions } from "../store/shoppingCart/cartSlice";

// Import Components
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ProductCard from "../components/common/ProductCard";
import FormProduct from "../components/common/FormProduct"



const ProductDetails = () => {
  // Select product by id
  const { id } = useParams();
  // const dispatch = useDispatch();

  // Find product by id
  const product = Products.find((product) => product.id === id);

  // Product information
  const { category, name, price, image } = product;

  // // Find related products by category and bestseller
  // const relatedProduct = Products.filter(
  //   (item) => category === item.category && item.bestSeller === true
  // );

  return (
    <>
      <Header/>

      <section className="container_detail">
                <article>
                    <div className="container_image">
                        <img src={product.image} alt="Producto" className="detail_image"/>
                    </div>
                    <div className="section_one">
                      <div>
                        <h1>{product.name}</h1>
                        <h3>{formatPrice.format(product.price)}</h3>
                      </div>
                      <FormProduct/>
                    </div>
                </article>
                <article>
                  <div className="separators">
                    <div className="separator">
                        Detalles
                    </div>
                    <div className="separator">
                        Descripción
                    </div>
                  </div>
                  <div className="product_description">
                    {product.description}
                  </div>
                </article>
        </section>

      <Footer/>
    </>
  );
};

export default ProductDetails;
