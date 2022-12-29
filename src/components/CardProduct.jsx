import Button from "./Button";
import { RiSearchEyeLine } from 'react-icons/ri'

function CardProduct({name, price, image}) {
    var precio = price.toLocaleString("en")
    
    return (
        <div className="card_product">
            <div>
                <img src={image} alt={name}/>
                <div className="quick_view">
                    <RiSearchEyeLine className="icon"/> Ver más
                </div>
            </div>
            <h2>{name}</h2>
            <p>{precio}</p>
            <Button text="Agregar" classe="button_product"/>
        </div>
    );
}

export default CardProduct;