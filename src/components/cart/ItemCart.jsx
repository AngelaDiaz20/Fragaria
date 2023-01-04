import React from 'react'
import { useDispatch } from "react-redux"

import { cartActions } from '../../store/shopping-cart/cartSlice'
import { priceFormat } from '../../App'

import {HiMinus, HiPlus, HiTrash} from 'react-icons/hi'

export const ItemCart = (props) => {

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
        <article className='cart_item'>
            <div>
                <img src={image} alt={name} />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{price}</p>
            </div>
            <div className='buttons_container'>

                <HiTrash onClick={deleteItem} />

                <div className='buttons_quantity'>
                    <span className="btn_increase" onClick={decreaseItem}>
                        <HiMinus/>
                    </span>

                    <span className="quantity">{quantity}</span>

                    <span className="btn_decrease" onClick={incrementItem}>
                        <HiPlus/>
                    </span>
                </div>
            </div>
        </article>
    )
}
