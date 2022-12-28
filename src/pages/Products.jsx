import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Category from '../components/Category';
import CardProduct from '../components/CardProduct';

import Product from '../assets/img/products/product_3.jpg'
import { FaSearch } from 'react-icons/fa'
import data from '../products.json'

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
                        <FaSearch className='search_icon'/>
                    </div>
                </div>
                    <section className='products_cards'>
                    {data.map(product => 
                        <CardProduct
                            key={product.name}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    )}
                    </section>

                {/* <CardProduct name="Producto" price="$ 1000" image={Product} /> */}
            </main>
            <Footer />
        </>
    );
}

export default Products;
