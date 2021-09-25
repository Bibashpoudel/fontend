import axios from "axios"
import { ADD_CART_ITEM, REOMVE_CART_ITEM } from "../Constants/cartConstants";
import data from '../data.js'
export const addtoCart = (productId, qty) =>async(dispatch, getState)=>{
    // const {data} = await axios.get(`/api/product/${productId}`);
   
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            name:data.venders.name,
            images:data.venders.image,
            price:data.venders.price,
            vendors:data.venders._id,
            
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