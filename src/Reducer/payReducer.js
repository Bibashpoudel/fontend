import { PAY_FAIL, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS, PAY_REQUEST, PAY_SUCCESS } from "../Constants/payConstants";



export const PayOrderReducer = (state = {}, action) =>{
    switch(action.type){
        case PAY_ORDER_REQUEST:
            return {
                loading:true
            }
        case PAY_ORDER_SUCCESS:
            return {
                loading:false,
                orderCreatesuccess:action.payload
            }
        case PAY_ORDER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const PayReducer = (state={loading:true}, action)=>{
    switch(action.type){
        case PAY_REQUEST:
            return{
                loading:true,
            }
        case PAY_SUCCESS:
            return{
                loading:false,
                paysuccess:action.payload
            }
        case PAY_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}