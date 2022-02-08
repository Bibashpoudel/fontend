import axios from "axios"
import { USER_OTP_SEND_FAIL, USER_OTP_SEND_REQUEST, USER_OTP_SEND_SUCCESS, USER_OTP_VERIFY_FAIL, USER_OTP_VERIFY_REQUEST, USER_OTP_VERIFY_SUCCESS, USER_PASSWORD_FORGET_OTP_SEND_FAIL, USER_PASSWORD_FORGET_OTP_SEND_REQUEST, USER_PASSWORD_FORGET_OTP_SEND_SUCCESS, USER_PASSWORD_FORGET_OTP_VERIFY_FAIL, USER_PASSWORD_FORGET_OTP_VERIFY_REQUEST, USER_PASSWORD_FORGET_OTP_VERIFY_SUCCESS } from "../Constants/otpConstants"




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
                ? error.message
                : error
        })  
    }

}
export const registerVerifyOtp = (mobile, otp) =>async(dispatch) =>{
    dispatch({
        type:USER_OTP_VERIFY_REQUEST,
        payload:{mobile,otp}
    })
    try {
        const {data} = await axios.post('/api/user/verifyotp/',{mobile, code:otp})

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
                ? error.message
                : error
        })  
    }

}
export const PasswordForgetSendOtp = (phone) =>async(dispatch) =>{
    dispatch({
        type:USER_PASSWORD_FORGET_OTP_SEND_REQUEST,
        payload:{mobile:phone}
    })
    try {
        const {data} = await axios.post('/api/user/resetpasswordrequest/',{mobile:phone})

        dispatch({
            type:USER_PASSWORD_FORGET_OTP_SEND_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:USER_PASSWORD_FORGET_OTP_SEND_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : error
        })  
    }

}
export const PasswordforgetVerifyOtp = (phone, otp, password) =>async(dispatch) =>{
    dispatch({
        type:USER_PASSWORD_FORGET_OTP_VERIFY_REQUEST,
        payload:{mobile:phone,code:otp,password:password}
    })
    try {
        const {data} = await axios.post('/api/user/resetpassword/',{mobile:phone, code:otp,password:password})

        dispatch({
            type:USER_PASSWORD_FORGET_OTP_VERIFY_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:USER_PASSWORD_FORGET_OTP_VERIFY_FAIL,
            payload: 
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : error
        })  
    }
}
