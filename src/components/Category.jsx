function Category(props) {
    return (
        <button className="button_category">
            <img src={props.image} alt={props.name}/>
            {props.name}
        </button>
    );
}

export default Category;