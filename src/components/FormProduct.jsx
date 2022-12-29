import { Formik } from "formik";
import Button from "./Button";

function FormProduct() {
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
            >
                {({handleSubmit, values, handleChange, handleBlur}) => (
                    <form onSubmit={handleSubmit} className="form-product">
                        <div className="selectors">
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
                        </div></div>
                        <div className="form-group">
                            <label htmlFor="dedication">Dedicatoria</label>
                            <textarea name="dedication" id="dedication" cols="30" rows="5" placeholder="Escríbele algo especial a esa personita"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dates">Fecha de entrega</label>
                            <input type="date" name="dates" id="dates"/>
                        </div>
                        <p>*Ten presente que debe realizarse el pedido al menos con un día (24h) de anticipación</p>
                        {/* <button type="submit" className="button button_form">Enviar</button> */}
                        <Button text="Agregar" classe="button_form"/>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default FormProduct;
