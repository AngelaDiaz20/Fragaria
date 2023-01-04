import React from 'react'
import { cartActions } from '../store/shopping-cart/cartSlice';
import { useDispatch } from "react-redux";

function ButtonCart(props) {

    // Product props added to cart
    const { id, name, price, image, quantity } = props.item;

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

    return (
        <>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                <span className="increase__btn" onClick={incrementItem}>
                    <i className="ri-add-fill"></i>
                </span>

                <span className="quantity">{quantity}</span>

                <span className="decrease__btn" onClick={decreaseItem}>
                    <i className="ri-subtract-fill"></i>
                </span>
            </div>
        </>
    )
}

export default ButtonCart