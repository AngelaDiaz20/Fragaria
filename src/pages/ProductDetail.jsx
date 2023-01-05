// Import dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// Import data products
import Products from "../store/data/products";

// Import Styles
import { Container, Row, Col } from "reactstrap";

// Import Components
import ProductCard from "../components/common/ProductCard";
import { cartActions } from "../store/shoppingCart/cartSlice";
import { priceFormat } from "../App";

const ProductDetails = () => {
  // Select product by id
  const { id } = useParams();
  const dispatch = useDispatch();

  // Find product by id
  const product = Products.find((product) => product.id === id);

  // State to change images
  const [previewImg, setPreviewImg] = useState(product.image);

  // Product information
  const { category, name, price, image } = product;

  // Find related products by category and bestseller
  const relatedProduct = Products.filter(
    (item) => category === item.category && item.bestSeller === true
  );

  // Add product
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
  };

  // Update image
  useEffect(() => {
    setPreviewImg(product.image);
  }, [product]);

  // Scroll when choosing another product
  useEffect(() => {
    window.scrollTo(0, 200);
  }, [product]);

  return (
    <>

      {/* Images products */}
      <section className="product__details">
        <Container>
          <Row>
            <Col>
              <div className="product__images">
                <img
                  src={product.image}
                  alt="Imagen producto"
                  className="product__image"
                  onClick={() => setPreviewImg(product.image)}
                />

                <img
                  src={product.image}
                  alt="Imagen producto"
                  className="product__image"
                  onClick={() => setPreviewImg(product.image)}
                />

                <img
                  src={product.image}
                  alt="Imagen producto"
                  className="product__image"
                  onClick={() => setPreviewImg(product.image)}
                />
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="Imagen producto" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.name}</h2>

                <p className="product__price-detail">
                  Precio: <span>$ {priceFormat.format(product.price)}</span>
                </p>

                <p className="product__category">
                  Categoría: <span>{product.category}</span>
                </p>

                <button className="addToCart__btn" onClick={addItem}>
                  Agregar al Carrito
                </button>
              </div>
            </Col>

            <Col lg="12" className="text-center">
              <h2 className="title mt-4">¿Qué te ofrecemos?</h2>

              <p className="product__desc">{product.description}</p>

            </Col>

            <Col lg="12" className="text-center">
              <h2 className="title mt-5 mb-5">Te puede interesar</h2>
            </Col>

            {/* Generate related products */}
            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="d-flex">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ProductDetails;
