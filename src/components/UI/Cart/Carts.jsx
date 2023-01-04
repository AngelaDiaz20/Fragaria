// Import dependencies
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactWhatsapp from "react-whatsapp";

// Import styles
import { ListGroup } from "reactstrap";
import "../../../styles/Carts.css";

// Import components
import CartItem from "./CartItem";
import { cartUIActions } from "../../../store/shopping-cart/cartUISlice";
import { priceFormat } from "../../../App";

const Carts = () => {
  // Hide side cart
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartUIActions.toggle());
  };

  // Select products from cart
  const cartProducts = useSelector((state) => state.cart.cartItems);

  // Update cart products subtotal
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i className="ri-close-circle-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {/* Load cart products */}
          {cartProducts.length === 0 ? (
            <h6 className="text-center mt-5">El carrito está vacío</h6>
          ) : (
            cartProducts.map((item, index) => (
              <CartItem item={item} key={index}/> 
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal: <span>$ {priceFormat.format(totalAmount)}</span>
          </h6>

          {/* Send message to whatsapp for purchase */}
          <ReactWhatsapp
            number="57-301-222-9139"
            message={`Buen día, me gustaría adquirir los siguientes productos: ${cartProducts.map(
              (item) =>
                item.quantity +
                " " +
                item.name +
                " $ " +
                priceFormat.format(item.totalPrice)
            )} para un Total de $ ${priceFormat.format(totalAmount)}`}
            className="cart__btn"
          >
            WhatsApp
          </ReactWhatsapp>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
