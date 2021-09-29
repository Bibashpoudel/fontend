import axios from "axios"
import { ADD_CART_ITEM, REOMVE_CART_ITEM } from "../Constants/cartConstants";
import data from '../data.js'
export const addtoCart = (productId, venueName, total,people) =>async(dispatch, getState)=>{
    // const {data} = await axios.get(`/api/product/${productId}`);
   
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            
            Service:venueName,
            Totalprice:total,
            guestno:people,
            product:productId
            
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}

export const reomveFromCart =(productId)=>(dispatch, getState)=>{
    dispatch({
        type: REOMVE_CART_ITEM,
        payload:productId
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// export const saveShippingAddress = (data) =>(dispatch) =>{
//     dispatch({type: CART_SAVE_SHIPPING_ADDRESS , payload: data});

//     localStorage.setItem('shippingAddress', JSON.stringify(data))
// }