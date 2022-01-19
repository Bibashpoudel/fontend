import axios from "axios"

import { VENDOR_CITY_FAIL, VENDOR_CITY_REQUEST, VENDOR_CITY_SUCCESS, VENDOR_GST_PAN_ADD_FAIL, VENDOR_GST_PAN_ADD_REQUEST, VENDOR_GST_PAN_ADD_SUCCESS, VENDOR_REGISTER_FAIL, VENDOR_REGISTER_REQUEST, VENDOR_REGISTER_SUCCESS,  VENDOR_TYPE_FAIL, VENDOR_TYPE_REQUEST, VENDOR_TYPE_SUCCESS, VENDOR_VENUE_LIST_FAIL, VENDOR_VENUE_LIST_REQUEST, VENDOR_VENUE_LIST_SUCCESS } from "../Constants/vendorConstants"


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
                : error
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
                : error
        })
    }

}

export const VendorSignup = (name, email, phone, customer_type, vendor_type, city,  password,otp) => async( dispatch) =>{
    dispatch({
        type:VENDOR_REGISTER_REQUEST,
        payload: {fullname:name, email:email, mobile:phone, user_type:customer_type, vendor_type:vendor_type, city:city, password:password,code:otp}
    });
    try {
        const {data} = await axios.post('/api/user/add/', {fullname:name, email:email, mobile:phone, user_type:customer_type, vendor_type:vendor_type, city:city, password:password,code:otp})
        dispatch({
            type:VENDOR_REGISTER_SUCCESS,
            payload:data
        });
        // dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
        localStorage.setItem('VendorInfo', JSON.stringify(data));
        
    } catch (error) {
        dispatch({
            type:VENDOR_REGISTER_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error 
        })
        
    }
}

export const GSTPANAdd =(gst, pan) => async(dispatch, getState)=>{
    dispatch({
        type:VENDOR_GST_PAN_ADD_REQUEST,
        payload:{gst_number:gst, pan_number:pan}
    })
    try {
        const {userSignin:{userInfo}} = getState();
        console.log(userInfo)
        const {data} = await axios.post('/api/user/addgstandpan/',{gst_number:gst, pan_number:pan},{
            headers:{
                'Authorization': 'Bearer '+ userInfo
            }
            
        });
        dispatch({
            type:VENDOR_GST_PAN_ADD_SUCCESS,
            payload:data
        })
        localStorage.removeItem('userInfo');
        localStorage.removeItem('VendorInfo');
    } catch (error) {
        dispatch({
            type:VENDOR_GST_PAN_ADD_FAIL,
            payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error
        })
    }
}


export const VendorVenueList = () => async(dispatch, getState) =>{
    dispatch({
        type:VENDOR_VENUE_LIST_REQUEST,
      
    })
   
    try {
        const {userSignin:{userInfo}} = getState();
        const{userProfileView:{profile}} = getState();
      
        const {data} = await axios.get(`/api/venue/particulartype/${profile.id}/`, {
        headers:{
            'Authorizations': 'Bearer '+ userInfo
        }
    })
    dispatch({
        type:VENDOR_VENUE_LIST_SUCCESS,
        payload:data
    })
    } catch (error) {
        dispatch({
            type:VENDOR_VENUE_LIST_FAIL,
            payload:
            error.response && error.response.data.message 
                ? error.response.data.message 
                : error
            
        })
    }
}
