import React from 'react'
import { useDispatch } from "react-redux"

//import functions
import { cartActions } from '../../../store/shoppingCart/cartSlice'
import { formatPrice } from '../../../App'

//import icons from react-icons
import {HiMinus, HiPlus, HiTrash} from 'react-icons/hi'

export const ItemCart = (props) => {

    // Props of the products added to the cart
    const { id, image, name, price, quantity } = props.item;

    // Dispatch to remove a product
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

    // Remove a product from the cart
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id));
    };

    return (
        <article className='cart_item' title='cartItem'>
            <div className='container_image'>
                <img src={image} alt={name}/>
            </div>
            <div className='description'>
                <h2>{name}</h2>
                <p>$ {formatPrice.format(price)} COP</p>
            </div>
            <div className='buttons_container'>
                {/* button to remove product */}
                <HiTrash onClick={deleteItem} className='icon_trash'/>

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
            </div>
        </article>
    )
}
