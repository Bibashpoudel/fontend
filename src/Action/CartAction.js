import axios from "axios"
import { ADD_CART_ITEM, REOMVE_CART_ITEM } from "../Constants/cartConstants";

export const addtoCart = (venueId,  people,totalprice, services) =>async(dispatch, getState)=>{
    const {data} = await axios.get(`/api/venue/admin/${venueId}`);
    console.log(data)
    dispatch({
        type:ADD_CART_ITEM,
        payload:{
            venue:venueId,
            price:data.display_price,
            name:data.name,
            image:data.display_image,
            totalPrice:totalprice,
            people:people,
            service:services,
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