import { Formik } from "formik";

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
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="nombre"></label>
                            <input 
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Brayan mi amor"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <label htmlFor="correo"></label>
                            <input 
                                type="text" 
                                id="correo" 
                                name="correo" 
                                placeholder="Brayan te amo"
                                value={values.correo}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>

                        <button type="submit">Enviar</button>
                    </form>
                )}
            </Formik>
        </>
    );
}

export default FormProduct;
