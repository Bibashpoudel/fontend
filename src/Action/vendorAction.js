import axios from "axios"
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_SUCCESS } from "../Constants/UserConstant";
import { VENDOR_CITY_FAIL, VENDOR_CITY_REQUEST, VENDOR_CITY_SUCCESS, VENDOR_TYPE_FAIL, VENDOR_TYPE_REQUEST, VENDOR_TYPE_SUCCESS } from "../Constants/vendorConstants"

export const VendorCityList = () => async(dispatch)=>{
    dispatch({
        type:VENDOR_CITY_REQUEST
    })
    try {
        const { data} = await axios.get('/api/user/city/');

        dispatch({
            type:VENDOR_CITY_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENDOR_CITY_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const VendorTypeList = () => async(dispatch)=>{
    dispatch({
        type:VENDOR_TYPE_REQUEST
    })
    try {
        const { data} = await axios.get('/api/user/vendortype/');

        dispatch({
            type:VENDOR_TYPE_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENDOR_TYPE_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }

}

export const VendorSignup = (name, email, phone, customer_type, vendor_type, city,  password) => async( dispatch) =>{
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload: {fullname:name, email:email, mobile:phone, user_type:customer_type, vendor_type:vendor_type, city:city, password:password}
    });
    try {
        const {data} = await axios.post('/api/user/add/', {fullname:name, email:email, mobile:phone, user_type:customer_type, vendor_type:vendor_type, city:city, password:password})
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        });
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('userInfo', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
        
    }
}