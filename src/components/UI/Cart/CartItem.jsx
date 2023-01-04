// Import dependencies
import React from "react";
import { useDispatch } from "react-redux";

// Import styles
import { ListGroupItem } from "reactstrap";
import "../../../styles/CartItem.css";

// Import components
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import { priceFormat } from "../../../App";

const CartItem = ({ item }) => {
  // Product props added to cart
  const { id, name, price, image, quantity, totalPrice } = item;

  // Dispatch for added products
  const dispatch = useDispatch();

  // Add products to cart
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
 
  // Delete products to cart
  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };

  return (
    <>
      <ListGroupItem className="border-0 cart__item">

          <div className="cart__product-info d-flex align-items-center justify-content-between gap-5">
            <div>
              <h6 className="cart__product-title">{name}</h6>

              <p className="d-flex align-items-center gap-5 cart__product-price">
                {quantity} <span>$ {priceFormat.format(totalPrice)}</span>
              </p>

              <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                <span className="increase__btn" onClick={incrementItem}>
                  <i className="ri-add-fill"></i>
                </span>

                <span className="quantity">{quantity}</span>

                <span className="decrease__btn" onClick={decreaseItem}>
                  <i className="ri-subtract-fill"></i>
                </span>
              </div>
            </div>

            <span className="delete__btn" onClick={deleteItem}>
              <i className="ri-close-fill"></i>
            </span>
          </div>
      </ListGroupItem>
    </>
  );
};

export default CartItem;
