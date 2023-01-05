import React from "react";
import { useSelector } from "react-redux";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";

import { FaShopify } from "react-icons/fa";

import { TableRow } from "../components/common/cart/TableRow";
import { ItemCart } from "../components/common/cart/ItemCart";
import { priceFormat } from "../App";

import Michi from "../assets/img/michi.png" 

import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'


const Cart = () => {
  // Select cart items
  const cartItems = useSelector((state) => state.cart.cartItems);


  // Select total amount
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <>
      <div className="container_cart">
        <div className="cart_description">
          <Link to='/products'><AiFillCloseCircle className="icon_close"/></Link>
          <HiOutlineShoppingCart className="icon_cart"/> 
          <div>
            <h2>Mi Carrito</h2>
            <p>items</p>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="void_cart">
            <h4>Aún no has agregado productos al carrito de compras</h4>
            <img src={Michi} alt="Imagen de gatito" />
            <Link to="/products" className="link">
              <button class="button_cartVoid">
                <span>Añadir productos al carrito</span>
                <svg viewBox="0 0 13 10" height="10px" width="15px">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </Link>
          </div>
        ) : (
          <div className="container_items">
            <div>
              {cartItems.map((item) => (
                <ItemCart item={item} key={item.id} />
              ))}
            </div>

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
                      `\n\t-${item.quantity}  ${item.name} de $${item.totalPrice}`
                  )}\n\n*Valor Total:  $ ${totalAmount}*`}
                  className="button"
                >
                  <FaShopify className='icon' />COMPRAR
                </ReactWhatsapp>
                <p><span>*</span>Serás redireccionado a WhatsApp para finalizar tu compra</p>
              </div>
            </div>

              <div className="footer_cart">
                <Link to='/products' className="link">Seguir comprando</Link>
                <div className="total">
                  <h4><span>Subtotal</span></h4>
                  <h4>$ {priceFormat.format(totalAmount)} COP</h4>
                </div>

                <div className="button_whatsapp">
                  {/* Send message to whatsapp for purchase */}
                  <ReactWhatsapp
                    number="57-301-222-9139"
                    message={`Buen día, deseo comprar los siguientes productos: 
                    ${cartItems.map(
                      (item) =>
                        `\n\t-${item.quantity}  ${item.name} de $${item.totalPrice}`
                    )}\n\n*Valor Total:  $ ${totalAmount}*`}
                    className="button"
                  >
                    <FaShopify className='icon' />COMPRAR
                  </ReactWhatsapp>
                  <p><span>*</span>Serás redireccionado a WhatsApp para finalizar tu compra</p>
                </div>
              </div>
              

          </div>


        )}

      </div>

    </>
  );
};

export default Cart;
