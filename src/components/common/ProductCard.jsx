import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

// import functions
import { cartActions } from "../../store/shoppingCart/countSlice";
import { formatPrice } from "../../App";

// import components
import ModalAdd from './ModalAdd'
import Button from "./Button";

// import icons from react-icons
import { RiSearchEyeLine } from 'react-icons/ri';

const ProductCard = (props) => {
  // Props with the product information
  const { id, name, image, price } = props.item;

  // Function to add products to cart
  const dispatch = useDispatch();

  // Function add items to cart
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        image,
        price,
      })
    );
    // show modal
    setModalShow(true)
  };

  // Variable and function to change modal state
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
      <p>${formatPrice.format(price)} COP</p>

      <Button text="Agregar" classe="button" funtion={addToCart} />

      <ModalAdd
        name={name}
        price={formatPrice.format(price)}
        image={image}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  );
};

export default ProductCard;
