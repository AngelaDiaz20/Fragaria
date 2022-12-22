import {FaShopify} from 'react-icons/fa'

function Button(props) {
    return (
        <button className={`button ${(props.class)}`}>
            <FaShopify className='icon'/> {props.text}
        </button>
    );
}

export default Button;
