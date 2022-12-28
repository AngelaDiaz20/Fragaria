import {FaShopify} from 'react-icons/fa'

function Button(props) {
    return (
        <button className={`button ${(props.classe)}`}>
            <span class="top-key"></span>
            <span class="text"><FaShopify className='icon'/> {props.text}</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
        </button>
    );
}

export default Button;
