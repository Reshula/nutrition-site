import { data } from "../Data/data";
import './Cart.css';
import { useDispatch } from "react-redux";
import { removeItemFromCart } from '../redux/cartSlice';
import trash from '../Assets/trash--v1.png'

const CartItem = ({cartItem}) =>{
    
    const prog = data.find(item => item.id === cartItem.progId);

    const dispatch = useDispatch();

    return(
       
        <div className="cartItem-container">
            <div>
               <img className="cartItem-img" src={`./${prog.image}.jpg` } width="100px" alt ="food"/>
            </div>
            <div className="cartItem-block1">

               <p> <strong>{prog.describe}</strong></p>
               <p> Price: $ {prog.price * cartItem.quantity}</p>
               <p> {cartItem.quantity} item(s)</p>
               <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
               <img className='trash-icon' src={trash} alt="icon" width="10px"/>
               </span>
            </div>
 
        </div>
    )
}
export default CartItem;