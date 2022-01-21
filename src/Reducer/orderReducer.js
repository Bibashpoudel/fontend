import { CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, USER_ORDER_FAIL, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "../Constants/orderConstants";

export const OrderReducer = (state={}, action)=>{
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return {
                loading:true,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                loading:false,
                OderCreateSuccess:action.payload
            }
        case CREATE_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case CREATE_ORDER_RESET:
            return {}
        
        default:
            return state
        
    }
}
export const UserOrderReducer = (state={userOrder:[]}, action)=>{
    switch(action.type){
        case USER_ORDER_REQUEST:
            return {
                loading:true,
            }
        case USER_ORDER_SUCCESS:
            return {
                loading:false,
                userOrder:action.payload
            }
        case USER_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
        
    }
}