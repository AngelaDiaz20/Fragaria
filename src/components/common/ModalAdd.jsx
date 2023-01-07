import React from 'react';
import {Link} from 'react-router-dom'

// import components
import { Modal} from 'react-bootstrap';
import Button from './Button'

//import icons from react-icons
import {BsCartCheckFill} from 'react-icons/bs'

function ModalAdd(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="modal_container"
        >
            <Modal.Header closeButton className="modal_header">
                <Modal.Title id="contained-modal-title-vcenter" className="modal_title">
                    <BsCartCheckFill className='modal_icon'/> Producto agregado con éxito al carrito de compras 
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal_body'>
                <div><img src={props.image} alt={props.name}/></div>
                <article title='modal description' >
                    <h1>{props.name}</h1>
                    <p> <strong>Precio:</strong> ${props.price} COP</p> 
                    <p> <strong>Cantidad:</strong> 1</p>
                </article>
            </Modal.Body>

            <Modal.Footer className='modal_footer'> 
                <button onClick={props.onHide} className="button_modal">Seguir comprando</button>
                <Link to="/cart"><Button text="Ver carrito"/></Link>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAdd