import React from 'react'

//import function
import { formatPrice } from '../../../App';

export const TableRow = (props) => {
    // Product props added to cart
    const { name, price, quantity, totalPrice } = props.item;

    return (
        <tr>
            <td>{quantity}</td>
            <td className='product_name'>{name}</td>
            <td>$ {formatPrice.format(price)}</td>
            <td>$ {formatPrice.format(totalPrice)}</td>
        </tr>
    )
}
