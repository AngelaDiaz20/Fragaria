import React from 'react'
import { priceFormat } from '../../../App';

export const TableRow = (props) => {

    const { name, price, quantity, totalPrice } = props.item;

    return (
        <tr>
            <td>{quantity}</td>
            <td className='product_name'>{name}</td>
            <td>$ {priceFormat.format(price)}</td>
            <td>$ {priceFormat.format(totalPrice)}</td>
        </tr>
    )
}
