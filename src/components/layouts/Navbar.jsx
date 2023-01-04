import Brand from '../../assets/img/fragaria_brand.svg'
import { FaShopify } from 'react-icons/fa'
import { MdMenuOpen } from 'react-icons/md'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <img src={Brand} alt="Logo de Fragaria" />
            <Link className='link_icon'><FaShopify className='icon_shop' /></Link>
            < MdMenuOpen className='icon_menu' />
            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='/Productos'>Productos</Link>
                <Link className='link_icon'>
                    <FaShopify className='icon_shop' />
                    <span className='item_total'></span>
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;  