import React from "react";
import { useSelector } from "react-redux";
import ReactWhatsapp from "react-whatsapp";

import { FaShopify } from "react-icons/fa";

import { TableRow } from "../components/common/cart/TableRow";
import { ItemCart } from "../components/common/cart/ItemCart";
import { priceFormat } from "../App";

const Cart = () => {
  // Select cart items
  const cartItems = useSelector((state) => state.cart.cartItems);

  // Select total amount
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <div className="container_items">
        {cartItems.length === 0 ? (
          <h3>El carrito está vacío</h3>
        ) : (
          <div>
            {cartItems.map((item) => (
              <ItemCart item={item} key={item.id} />
            ))}
          </div>
        )}

        {cartItems.length === 0 ? (
          <div></div>
        ) : (
        <div className="table_cart">
          <h2>Resumen de compra</h2>
          <table>
            <thead>
              <tr>
                <th>Und</th>
                <th>Producto</th>
                <th>Valor</th>
                <th>Valor total</th>
              </tr>
            </thead>
            {cartItems.map((item) => (
              <TableRow item={item} key={item.id} />
            ))}
            <tfoot>
              <tr>
                <th colSpan={4}>Total $ {priceFormat.format(totalAmount)} COP</th>
              </tr>
            </tfoot>
          </table>

          <div className="button_whatsapp"> 
          {/* Send message to whatsapp for purchase */}
          <ReactWhatsapp
            number="57-301-222-9139"
            message={`Buen día, deseo comprar los siguientes productos: 
            ${cartItems.map(
              (item) =>
                item.quantity + " " + item.name + " $ " + item.totalPrice 
            )}para un Total de $ ${totalAmount}`}
            className="button"
          >
            <FaShopify className='icon'/>COMPRAR
          </ReactWhatsapp>
          <p><span>*</span>Serás redireccionado a WhatsApp para finalizar tu compra</p>
        </div>
        </div>)}
        
      </div>

    </>
  );
};

export default Cart;
