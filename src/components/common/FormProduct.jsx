import React from "react";
import { Formik } from "formik";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

// import functions
import { cartActions } from "../../store/shoppingCart/countSlice";
import { formatPrice } from "../../App";

// import components
import Products from "../../store/data/products";
import ModalAdd from "./ModalAdd";
import Button from "./Button";


function FormProduct(props) {

    // Select product by id
    const { id } = useParams();
    const dispatch = useDispatch();

    // Find product by id
    const product = Products.find((product) => product.id === id);

    // Product information
    const {name, price, image } = product;

    // State for modal display
    const [modalShow, setModalShow] = React.useState(false);
    
    // Add product to cart
    const addToCart = () => {
        dispatch(
            cartActions.addToCart({
                id,
                name,
                price,
                image,
            })
        );
        //Show modal
        setModalShow(true)
    };



    return (
        <>
            <Formik
                // form initial values
                initialValues={{
                    nombre: '',
                    correo: ''
                }}
                // Values to send in form
                onSubmit={(valores) => {
                    // console.log(valores)
                    // console.log("Formulario enviado")
                }}
                className={`form-contain ${(props.formClass)}`}
            >
                {({ handleSubmit, values, handleChange, handleBlur }) => (
                    <form onSubmit={handleSubmit} className="form-product">
                        {/* <div className="selectors">
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"></label>
                            <input 
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="email"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div></div> */}
                        <div className="form-group">
                            <label htmlFor="dedication">Dedicatoria</label>
                            <textarea name="dedication" id="dedication" cols="30" rows="3" placeholder="Escríbele algo especial a esa personita"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dates">Fecha de entrega</label>
                            <input type="date" name="dates" id="dates" min="" />
                        </div>
                        <p>*Ten presente que debe realizarse el pedido al menos con un día (24h) de anticipación</p>
                        <Button text="Agregar" classe="button_form" funtion={addToCart} />
                        {/* modal component */}
                        <ModalAdd
                            name={name}
                            price={formatPrice.format(price)}
                            image={image}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />

                    </form>
                )}
            </Formik>
        </>
    );
}

export default FormProduct;