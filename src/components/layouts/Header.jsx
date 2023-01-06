// Import dependencies
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Import images
import Logo from "../../assets/img/fragaria_brand.svg";
import { FaShopify } from 'react-icons/fa'
import { MdMenuOpen } from 'react-icons/md'
import {SlClose} from 'react-icons/sl'

import ImageMenu from '../../assets/img/menu-bg.png'
import Offcanvas from 'react-bootstrap/Offcanvas';



const Header = () => {

    // Selector for cart badge
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="header">
            <Link to='/home' className="container_logo">
                <img src={Logo} alt="Logo de Fragaria" />
            </Link>
            <Link to='/cart' className='link_icon cart_icon'>
                <FaShopify className='icon_shop' />
                <span className='item_total'>{totalQuantity}</span>
            </Link>
            < MdMenuOpen className='icon_menu' onClick={handleShow} />

            <Offcanvas show={show} onHide={handleClose} placement='end' className="menu_mobile">
                <Offcanvas.Header className="head">
                    {/* <img src={Logo} alt="Logo de Fragaria"/> */}
                    <SlClose className="icon" onClick={handleClose}/>         
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="image-menu">
                        <img src={ImageMenu} alt="" />
                    </div>
                    <nav>
                        <NavLink to='/home' activeClassName='link_active' className='link_mobile'>Inicio</NavLink>
                        <NavLink to='/products' activeClassName='link_active' className='link_mobile'>Productos</NavLink>
                        <NavLink to='/cart' activeClassName='link_active' className='link_mobile link_icon'>
                            <FaShopify className='icon_shop' />
                            Carrito
                        </NavLink>
                    </nav>
                </Offcanvas.Body>
            </Offcanvas>
            <nav>
                <NavLink to='/home' activeClassName='link_active' className='link_nav'>Inicio</NavLink>
                <NavLink to='/products' activeClassName='link_active' className='link_nav'>Productos</NavLink>
                <NavLink to='/cart' activeClassName='link_active' className='link_icon link_nav'>
                    <FaShopify className='icon_shop' />
                    <span className='item_total'>{totalQuantity}</span>
                </NavLink>
            </nav>
        </header>

    );
};

export default Header;
