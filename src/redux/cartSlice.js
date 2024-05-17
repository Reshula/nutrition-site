import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

 const slice = createSlice({
    name:'cart',
    initialState :{
        cartItems :[]
    },
    reducers: {
        addItemToCart : (state, action) =>{
            const timeId = new Date().getTime()
            
            state.cartItems.push({
                id: timeId,
                progId: action.payload.id,
                quantity: action.payload.quantity,
                totalItems: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.price,
                
            })
        },
   
        

        removeItemFromCart: (state, action) => {
            const { cartItemId } = action.payload;
            state.cartItems = state.cartItems.filter(
              cartItem => cartItem.id !== cartItemId
            );
    
          }
    },
})
export const getTotalPrice = state =>{
    return state.cart.cartItems.reduce((total,cartItems) =>{
        return cartItems.totalPrice + total
    }, 0)
}
export const getTotalArticles = state => {
    return state.cart.cartItems.totalItems
  };


export const getCartItems = state =>state.cart.cartItems;
export const { addItemToCart ,removeItemFromCart} = slice.actions
export default slice.reducer;