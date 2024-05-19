import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCartItems , getTotalPrice} from '../redux/cartSlice';
import ContinueShopping from './ContinueShopping';

const Cart = () =>{
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)

   

    console.log('Total Price:', totalPrice);

    return(
        <section id='cart_section'>
        <div className='cart-container'>
            <div  className='cart-block'>
            <h3 className='cart-title'>Ваши Программы</h3>
           
                <h3 className="totalPrice">{totalPrice === 0 ? 'Вы ничего не выбрали' 
                    : `Общая сумма: ${totalPrice.toFixed(2)} azn`}</h3>
                    {cartItems.map((cartItem, id )=> (
                    <CartItem key={id} cartItem={cartItem}/>
                    ))}    
            </div>
            <div className='icon-cart'>
                {totalPrice === 0 && <ContinueShopping /> }
            </div>

        </div>
        </section>
    )
}
export default Cart;