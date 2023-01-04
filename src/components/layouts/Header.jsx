// Import dependencies
import React from "react";
import { Link } from "react-router-dom";
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
      <img src={Logo} alt="Logo de Fragaria" />
            <Link to='/home' className='link_icon'><FaShopify className='icon_shop' /></Link>
            < MdMenuOpen className='icon_menu' />
            <nav>
                <Link to='/home'>Inicio</Link>
                <Link to='/products'>Productos</Link>
                <Link to='/cart' className='link_icon'>
                    <FaShopify className='icon_shop'/>
                    <span className='item_total'>{totalQuantity}</span>
                </Link>
            </nav> 
    </header>
  );
}; 

export default Header;
