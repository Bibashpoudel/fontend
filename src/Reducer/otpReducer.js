import { USER_OTP_SEND_FAIL, USER_OTP_SEND_REQUEST, USER_OTP_SEND_SUCCESS, USER_OTP_VERIFY_FAIL, USER_OTP_VERIFY_REQUEST, USER_OTP_VERIFY_SUCCESS } from "../Constants/otpConstants";







export const RegisterOtpsendReducer = (state={}, action)=>{
    switch(action.type){
        case USER_OTP_SEND_REQUEST:
            return {
                loading:true
            }
        case USER_OTP_SEND_SUCCESS:
            return{
                loading:false,
                success:action.payload
            }
        case USER_OTP_SEND_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

export const RegisterOtpverifyReducer = (state={}, action)=>{
    switch(action.type){
        case USER_OTP_VERIFY_REQUEST:
            return {
                loading:true
            }
        case USER_OTP_VERIFY_SUCCESS:
            return{
                loading:false,
                code:action.payload
            }
        case USER_OTP_VERIFY_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}