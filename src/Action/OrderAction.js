import axios from "axios"
import { CHECK_AVAILABLE_FAIL, CHECK_AVAILABLE_REQUEST, CHECK_AVAILABLE_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, USER_ORDER_FAIL, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "../Constants/orderConstants"


export const CheckStatusAction = (from, to, id) => async (dispatch) => {
    dispatch({
        type: CHECK_AVAILABLE_REQUEST,
        payload:{from, to, id}
    })
    try {
        const { data } = await axios.post('/api/order/checkStatus/', {
            From:from ,To:to, venue:id
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
        dispatch({
            type: CHECK_AVAILABLE_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type: CHECK_AVAILABLE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }
}
export const CheckServiceStatusAction = (from, to, id) => async (dispatch) => {
    dispatch({
        type: CHECK_AVAILABLE_REQUEST,
        payload:{from, to, id}
    })
    try {
        const { data } = await axios.post('/api/order/checkStatus/', {
            From:from ,To:to, service:id
        }, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
        dispatch({
            type: CHECK_AVAILABLE_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type: CHECK_AVAILABLE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }
}

export const Createorder =(amounts,orders) => async(dispatch, getState)=>{


    dispatch({
        type:CREATE_ORDER_REQUEST,
        payload:{amounts, orders}
    })
    try {
        const {userSignin:{userInfo}} = getState()
        const razorpay = JSON.parse(localStorage.getItem('Razorpay'));
        const razorpayOrderId = razorpay.razorpay_order_id;
        const razorpayPaymentId = razorpay.razorpay_payment_id;
        const razorpaySignature = razorpay.razorpay_signature;
        const {data} = await axios.post('/api/order/customer/',{total_price:amounts, razorpay_order_id:razorpayOrderId, razorpay_payment_id:razorpayPaymentId, razorpay_signature:razorpaySignature,orders},{
            headers:{
                'Authorization': `Bearer ${userInfo}`
            }
        })
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data
            
        })
        localStorage.removeItem('Razorpay');
        localStorage.removeItem('cartItems');
    } catch (error) {
        dispatch({
            type:CREATE_ORDER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error
        })
        localStorage.removeItem('Razorpay');
    }
}
export const UserOrderList =() => async(dispatch, getState)=>{
    dispatch({
        type:USER_ORDER_REQUEST, 
    })
    try {
        const {userSignin:{userInfo}} = getState()
        const {data} = await axios.get('/api/order/customer/',{
            headers:{
                'Authorization': `Bearer ${userInfo}`
            }
        }) 
        dispatch({
            type:USER_ORDER_SUCCESS,
            payload:data   
        })
        
    } catch (error) {
        dispatch({
            type:USER_ORDER_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error
        })  
    }
}