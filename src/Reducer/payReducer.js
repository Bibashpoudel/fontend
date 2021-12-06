import { PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "../Constants/payConstants";



export const PayOrderReducer = (state = {}, action) =>{
    switch(action.type){
        case PAY_ORDER_REQUEST:
            return {
                loading:true
            }
        case PAY_ORDER_SUCCESS:
            return {
                loading:false,
                success:action.payload
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