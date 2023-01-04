
import { Modal} from 'react-bootstrap';

function ModalAdd(props) {

    

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Producto(s) agregado(s) al carrito de compras
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.name}</h4>
                <img src={props.image} alt={props.name}/>
                <p>
                    {props.name}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAdd