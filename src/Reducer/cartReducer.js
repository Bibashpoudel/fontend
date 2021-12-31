import { ADD_CART_ITEM,  CART_ITEM_RESET,  REOMVE_CART_ITEM } from "../Constants/cartConstants"



export const cartReducer=(state = {cartItems:[]}, action) =>{
    switch(action.type){
        case ADD_CART_ITEM:
            const item = action.payload;
            const exitsItem = state.cartItems.find(x => x.venue === item.venue); // check the current adding item is already added or not
            if(exitsItem){
                return{
                    ...state,
                    cartItems: state.cartItems.map(x =>x.venue === exitsItem.venue? item: x), // if previously add item then update value of x with new item
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
                cartItems: state.cartItems.filter(x => x.venue !== action.payload)
            }  
        case CART_ITEM_RESET:
            return {
                ...state, cartItems:[]
            }
        default:
            return state;
    }
}