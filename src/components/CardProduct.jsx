import Button from "./Button";

function CardProduct(props) {
    return (
        <div className="card_product">
            <img src={props.image} alt={props.name}/>
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <Button text="Agregar"/>
        </div>
    );
}

export default CardProduct;