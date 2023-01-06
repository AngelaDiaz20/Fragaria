import React from 'react'
import {useDispatch} from "react-redux";

import {cartActions} from "../../../store/shoppingCart/cartSlice"

function ButtonCart(props) {

    // Product props added to cart
    const { id, name, price, image, quantity } = props.item;

    // Dispatch for added products
    const dispatch = useDispatch();

    // Add items to cart
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

    // Decrease cart items by one unit
    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id));
    };

    return (
        <>
            <div className="d-flex align-items-center justify-content-between increase__decrease-btn">
                {/* button to increase product */}
                <span className="increase__btn" onClick={incrementItem}>
                    <i className="ri-add-fill"></i>
                </span>

                {/* current quantity of products */}
                <span className="quantity">{quantity}</span>

                {/* button to decrease product */}
                <span className="decrease__btn" onClick={decreaseItem}>
                    <i className="ri-subtract-fill"></i>
                </span>
            </div>
        </>
    )
}

export default ButtonCart