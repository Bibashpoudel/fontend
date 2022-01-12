import axios from "axios"
import { USER_OTP_SEND_FAIL, USER_OTP_SEND_REQUEST, USER_OTP_SEND_SUCCESS, USER_OTP_VERIFY_FAIL, USER_OTP_VERIFY_REQUEST, USER_OTP_VERIFY_SUCCESS } from "../Constants/otpConstants"




export const registerSendOtp = (phone) =>async(dispatch) =>{
    dispatch({
        type:USER_OTP_SEND_REQUEST,
        payload:phone
    })
    try {
        const {data} = await axios.post('/api/user/sendotp/',{mobile:phone})

        dispatch({
            type:USER_OTP_SEND_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:USER_OTP_SEND_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })  
    }

}
export const registerVerifyOtp = (otp) =>async(dispatch) =>{
    dispatch({
        type:USER_OTP_VERIFY_REQUEST,
        payload:otp
    })
    try {
        const {data} = await axios.post('/api/user/sendotp/',{code:otp})

        dispatch({
            type:USER_OTP_VERIFY_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:USER_OTP_VERIFY_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })  
    }

}