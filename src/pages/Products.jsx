import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Category from '../components/Category';
import CardProduct from '../components/CardProduct';

import Product from '../assets/img/products/product_3.jpg'
import { FaSearch } from 'react-icons/fa'

function Products() {
    return (
        <>
            <Navbar />
            <main className='container_products'>
                <div className='categories'>
                    <Category name="Todos" image={Product} />
                    <div className='search'>
                        <input
                            placeholder='Busca el detalle ideal'
                            name='search'
                            type='text'
                            id='search'
                        />
                        <FaSearch className='search_icon' />
                    </div>
                </div>
                <CardProduct name="Producto" price="$ 1000" image={Product} />
            </main>
            <Footer />
        </>
    );
}

export default Products;
