import { ADD_CART_ITEM,  REOMVE_CART_ITEM } from "../Constants/cartConstants"



export const cartReducer=(state = {cartItems:[]}, action) =>{
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
            const exitsItem = state.cartItems.find(x => x.vendors === item.vendors); // check the current adding item is already added or not
            if(exitsItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x =>x.vendors ===exitsItem.vendors? item: x), // if previously add item then update value of x with new item
                } 
            }
            else{
                return {
                    ...state,
                    cartItems:[...state.cartItems, item] //this added new item at the end of the item ... helps to concatinate
                };
            }
        case REOMVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.vendors !== action.payload)
            }  
            
       
            
        default:
            return state;
    }
}