import Store from '../assets/img/store.svg'

import Product1 from '../assets/img/products/product_1.jpg'
import Product2 from '../assets/img/products/product_2.jpg'
import Product3 from '../assets/img/products/product_3.jpg'
import Product4 from '../assets/img/products/product_4.jpg'
import Banner from '../assets/img/banner.png'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

function Home() {
    return (
        <div>
            <Navbar/>
            <main>
                <div className='banner_container'>
                    <img src={Banner} alt="Banner" className='banner'/>
                    <Button text="Ir a la tienda" classe="button_banner"/>
                </div>
                <section className='summary'>
                    <img src={Store} alt="Imagen de tienda" />
                    <div className='description'>
                        <div>
                            <h1>Fresas & </h1>
                            <h1>Detalles</h1>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolores dolorum esse aliquam, laborum eos libero sed vel repellat eveniet nam officia fugiat minima. Laboriosam laborum dolor fugit velit beatae. <br /><br />
                        Assumenda quia eveniet facere corrupti alias, neque animi ut aliquid qui odit eaque non voluptates facilis illum nulla, accusamus harum, totam blanditiis quas dolore. Repellendus fugiat eligendi quis cupiditate numquam?</p></div>
                    {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0066" d="M42.5,-64.5C48.9,-53.8,43.6,-33.1,49.4,-15.9C55.1,1.3,71.9,15,74.9,30.1C78,45.2,67.4,61.7,52.6,62.9C37.8,64.2,18.9,50.3,0.4,49.7C-18,49.1,-36.1,61.8,-48.5,59.8C-60.8,57.7,-67.5,40.9,-66.3,26C-65,11,-55.8,-2.1,-47.5,-11.6C-39.1,-21.2,-31.6,-27.2,-23.9,-37.4C-16.1,-47.7,-8,-62.2,5,-69.1C18,-76,36.1,-75.2,42.5,-64.5Z" transform="translate(100 100)" />
      </svg> */}
                </section>

                <section className='products_catalogue'>
                    <h1 className='title-po'>Cónoce nuestros productos</h1>
                    <article>
                        <img src={Product1} alt="" />
                        <img src={Product2} alt="" />
                        <img src={Product3} alt="" />
                        <img src={Product4} alt="" />
                    </article>
                    <Button text="Ver catálogo" classe="button"/>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Home;
