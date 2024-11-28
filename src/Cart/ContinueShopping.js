import { HashLink as Link } from 'react-router-hash-link';
import './Cart.css';

const ContinueShopping = () => {

    return(
        <div className='icon-cart'>
           
        <Link className='btn-cart-box' to={'/program_section'}>
           Продолжить ...
        </Link>
          
        </div>
    )
}
export default ContinueShopping;