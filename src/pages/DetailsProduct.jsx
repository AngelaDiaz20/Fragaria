import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FormProduct from "../components/FormProduct";

import Product from "../assets/img/products/product_4.jpg";

function DetailsProducts() {
    return (
        <>
            <Navbar/>
            <main className="container_detail">
                <article>
                    <div className="container_image">
                        <img src={Product} alt="Producto" className="detail_image"/>
                    </div>
                    <FormProduct/>
                </article>
            </main>
            <Footer/>
        </>
    );
}

export default DetailsProducts;
