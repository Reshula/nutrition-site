import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartItems , getTotalPrice} from '../redux/cartSlice';
import ContinueShopping from './ContinueShopping';


const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)


    return(
        <section id='cart_section'>
        <div className='cart-container'>
            <div  className='cart-block'>
            <h3 className='cart-title'>Ваши Программы</h3>
           
                <h3 className="totalPrice">{totalPrice === 0 ? 'Cart is empty' 
                    : `Total: $${totalPrice.toFixed(2)}`}</h3>
                    {cartItems.map((cartItem, index )=> <CartItem key={index} cartItem={cartItem}/>)}    
            </div>
            <div className='icon-cart'>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>

            

        </div>
        </section>
    )
}
export default Cart;