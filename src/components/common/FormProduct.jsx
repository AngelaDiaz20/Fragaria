import React from "react";
import { Formik } from "formik";
import Button from "./Button";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shoppingCart/cartSlice";
import Products from "../../store/data/products";
import ModalAdd from "./ModalAdd";
import { priceFormat } from "../../App";

function FormProduct(props) {

     // Select product by id
  const { id } = useParams();
  const dispatch = useDispatch();

  // Find product by id
  const product = Products.find((product) => product.id === id);

  // Product information
  const { category, name, price, image } = product;
  const [modalShow, setModalShow] = React.useState(false);
      // Add product
  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        image,
      })
    );
    setModalShow(true)
  };
  


    return (
        <>
            <Formik
                initialValues={{
                    nombre:'',
                    correo:''
                }}
                onSubmit={(valores)=>{
                    console.log(valores)
                    console.log("Formulario enviado")
                }}
                className={`form-contain ${(props.formClass)}`}
            >
                {({handleSubmit, values, handleChange, handleBlur}) => (
                    <form onSubmit={handleSubmit} className="form-product">
                        {/* <div className="selectors">
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input 
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Brayan mi amor"
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
                                placeholder="Brayan te amo"
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
                            <input type="date" name="dates" id="dates" min=""/>
                        </div>
                        <p>*Ten presente que debe realizarse el pedido al menos con un día (24h) de anticipación</p>
                        {/* <button type="submit" className="button button_form">Enviar</button> */}
                        <Button text="Agregar" classe="button_form" funtion={addItem}/>
                        <ModalAdd
                            name={name}
                            price={priceFormat.format(price)}
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