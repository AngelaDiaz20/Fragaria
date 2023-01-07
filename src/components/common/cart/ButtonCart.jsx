import React from 'react'
import {useDispatch} from "react-redux";

import {cartActions} from "../../../store/shoppingCart/countSlice"

// import icons from react-icons
import {HiMinus, HiPlus} from 'react-icons/hi'

function ButtonCart(props) {

    // Product props added to cart
    const { id, name, price, image, quantity } = props.item;

    // Dispatch for added products
    const dispatch = useDispatch();

    // Add items to cart
    const incrementItem = () => {
        dispatch(
            cartActions.addToCart({
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
            <div className='buttons_quantity'>
                {/* button to increase product */}
                <span className="btn_increase" onClick={decreaseItem}>
                    <HiMinus className='icon'/>
                </span>
                {/* current quantity of products */}
                <span className="quantity">{quantity}</span>
                {/* button to decrease product */}
                <span className="btn_decrease" onClick={incrementItem}>
                    <HiPlus className='icon'/>
                </span>               
            </div>
        </>
    )
}

export default ButtonCart