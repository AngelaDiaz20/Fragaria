// Import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import Styles
import "../../../styles/Cart.css";

// Import Components
import { cartActions } from "../../../store/shoppingCart/cartSlice";
import { priceFormat } from "../../../App";

const TableRow = (props) => {
  // Props of the products added to the cart
  const { id, image, name, price, quantity, totalPrice } = props.item;

  // Dispatch to remove a product
  const dispatch = useDispatch();

  const incrementItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
  };

  // Remove products to cart
  const decreaseItem = () => {
    dispatch(cartActions.removeItem(id));
  };

  // Remove a product from the cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image} alt="imagen producto" />
      </td>

      <td className="text-center">{name}</td>

      <td className="text-center cart__price-box">
        $ {priceFormat.format(price)}
      </td>

      <td className="text-center ">{quantity}</td>

      <td className="text-center cart__price-box">
        $ {priceFormat.format(totalPrice)}
      </td>

      <td className="text-center cart__icon-box">
        <i className="ri-delete-bin-fill" onClick={deleteItem}></i>
        
        <span className="increase__btn" onClick={incrementItem}>
          <i className="ri-add-fill"></i>
        </span>

        <span className="quantity">{quantity}</span>

        <span className="decrease__btn" onClick={decreaseItem}>
          <i className="ri-subtract-fill"></i>
        </span>
      </td>
    </tr>
  );
};

export default TableRow;
