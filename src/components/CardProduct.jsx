import Button from "./Button";

function CardProduct({name, price, image}) {
    return (
        <div className="card_product">
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{price}</p>
            <Button text="Agregar" classe="button_product"/>
        </div>
    );
}

export default CardProduct;