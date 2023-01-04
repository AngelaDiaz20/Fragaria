
import { Modal} from 'react-bootstrap';
import {BsCartCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import Button from './Button'
import ButtonCart from './ButtonCart';

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
                <div>
                    <h1>{props.name}</h1>
                    <p> <strong>Precio:</strong> ${props.price} COP</p> 
                    <p> <strong>Cantidad:</strong> 1</p>
                </div>

                {/* <ButtonCart item={props.id}/> */}
            </Modal.Body>

            <Modal.Footer className='modal_footer'> 
                {/* <button onClick={props.onHide}>Cerrar</button> */}
                <button onClick={props.onHide} className="button_modal">Seguir comprando</button>
                <Link to="/cart"><Button text="Ver carrito"/></Link>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAdd