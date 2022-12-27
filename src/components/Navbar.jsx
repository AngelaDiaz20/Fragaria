import Brand from '../assets/img/fragaria_brand.svg'
import {FaShopify} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <img src={Brand} alt="Logo de Fragaria"/>
            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='/Productos'>Productos</Link>
                <Link className='link_icon'><FaShopify className='icon_shop'/></Link>
            </nav>
        </header>
    );
}

export default Navbar;