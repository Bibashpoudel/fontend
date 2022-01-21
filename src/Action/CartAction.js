import axios from "axios"
import { ADD_CART_ITEM,  REOMVE_CART_ITEM } from "../Constants/cartConstants";

export const addtoCart = (venueId, ) =>async(dispatch, getState)=>{
   try {
    const {data} = await axios.get(`/api/venue/admin/${venueId}/`);
    
    console.log(data)
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            venue:venueId,
            price:data.display_price,
            name:data.name,
            image:data.display_image,
            no_of_days:0,
            no_of_guest:0,
           
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
   } catch (error) {
       
   }
    
}
export const addtoCartS = (serviceId) =>async(dispatch, getState)=>{
    const {data} = await axios.get(`/api/service/admin/${serviceId}`);
    
    console.log(data)
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            service:serviceId,
            price:data.display_price,
            name:data.name,
            no_of_days:0,
            no_of_guest:0,
            
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
}


export const reomveFromCart =(name, id)=>(dispatch, getState)=>{
    dispatch({
        type: REOMVE_CART_ITEM,
        payload:name,id
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const reomveFromCarta =(serviceId)=>(dispatch, getState)=>{
    dispatch({
        type: REOMVE_CART_ITEM,
        payload:serviceId
    });

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

// export const saveShippingAddress = (data) =>(dispatch) =>{
//     dispatch({type: CART_SAVE_SHIPPING_ADDRESS , payload: data});

//     localStorage.setItem('shippingAddress', JSON.stringify(data))
// }