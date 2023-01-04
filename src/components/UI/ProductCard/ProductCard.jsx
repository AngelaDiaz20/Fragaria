import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { RiSearchEyeLine } from 'react-icons/ri';
import {FaShopify} from 'react-icons/fa';

import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { priceFormat } from "../../../App";

import ModalAdd from '../../ModalAdd'

const ProductCard = (props) => {
  // Props with the product information
  const { id, name, image, price } = props.item;

  // Function to add products to cart
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        image,
        price,
      })
    );
    setModalShow(true)
  };

  console.log({name})

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="card_product">
      <Link to={`/products/${id}`}><div>
        <img src={image} alt={name} />
        <div className="quick_view">
          <RiSearchEyeLine className="icon" /> Ver más
        </div>
      </div></Link>
      <h2>{name}</h2>
      <p>${priceFormat.format(price)} COP</p>
      <button className="button" onClick={addToCart}>
            <span class="top-key"></span>
            <span class="text"><FaShopify className='icon'/> Agregar </span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>  
      </button>

      <ModalAdd
        name={name}
        price={priceFormat.format(price)}
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      {/* <Button text="Agregar" classe="button_product" onClick={addToCart} /> */}
    </div>
  );
};

export default ProductCard;
