import Brand from '../assets/img/fragaria_brand.svg'
import {FaShopify} from 'react-icons/fa'

function Navbar() {
    return (
        <header>
            <img src={Brand} alt="Logo de Fragaria"/>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Productos</a>
                <a href="#" className='link_icon'><FaShopify className='icon_shop'/></a>
            </nav>
        </header>
    );
}

export default Navbar;