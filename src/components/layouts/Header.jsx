// Import dependencies
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// Import images
import Logo from "../../assets/img/fragaria_brand.svg";
import { FaShopify } from 'react-icons/fa'
import { MdMenuOpen } from 'react-icons/md'


const Header = () => {

  // Selector for cart badge
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header" >
      <Link to='/home' className="container_logo"><img src={Logo} alt="Logo de Fragaria" /></Link>
            <Link to='/cart' className='link_icon'>
                    <FaShopify className='icon_shop'/>
                    <span className='item_total'>{totalQuantity}</span>
            </Link>
            < MdMenuOpen className='icon_menu' />
            <nav>
                <NavLink to='/home' activeClassName='link_active'>Inicio</NavLink>
                <NavLink to='/products' activeClassName='link_active'>Productos</NavLink>
                <NavLink to='/cart' activeClassName='link_active' className='link_icon'>
                    <FaShopify className='icon_shop'/>
                    <span className='item_total'>{totalQuantity}</span>
                </NavLink>
            </nav> 
    </header>
  );
}; 

export default Header;
