import { useNavigate } from "react-router-dom";
import './Cart.css';

const ContinueShopping = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/program_section'); 
        }
    return(
        <div className='icon-cart'>
            <button className='btn-cart-box' onClick={navigateTo}>
            Продолжить ...
            </button>
            
        </div>
    )
}
export default ContinueShopping;