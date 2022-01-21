
import axios from 'axios'
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL,  USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_TYPE_DETAILS_LIST_REQUEST, USER_TYPE_DETAILS_LIST_SUCCESS, USER_TYPE_DETAILS_LIST_FAIL } from "../Constants/UserConstant";

export const Signup = (name, email, phone, customer_type, password,code) => async( dispatch) =>{
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload: {fullname:name, email:email, mobile:phone, user_type:customer_type, password:password,code:code}
    });
    try {
        const {data} = await axios.post('/api/user/add/', {fullname:name, email:email, mobile:phone, user_type:customer_type, password:password,code:code},{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
        dispatch({
            type: USER_SIGNIN_REQUEST,
            payload:{email:email, password:password}
        })
        
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload: 
                error.response && error.response.data
                    ? error.response.data
                    : error
                    
        })
        
    }
}

export const Signin = (phone, password) => async(dispatch) =>{
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload:{phone, password}
    })
    try {
        const {data} = await axios.post('/api/user/token/', {mobile:phone, password},{
            headers:{
                'Content-Type': 'application/json'
            }
        }) 

                dispatch({
                    type:USER_SIGNIN_SUCCESS,
                    payload:data.access
                });
                
                localStorage.setItem('userInfo', JSON.stringify(data.access));   
    } 
    
    catch (error) {
        console.log(error)
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload: 
                error.response && error.response.data.detail
                    ? error.response.data.detail
                    : error
                   
        })   
    }
    
}

export const UserProfileViewAction = () => async(dispatch, getState)=>{
    dispatch({
        type:USER_PROFILE_REQUEST
    })
    try {
        const {userSignin:{userInfo}} = getState();
        console.log(userInfo)
        const {data} = await axios.get('/api/user/profile/',{
            headers: { 
                
                'Authorization': 'Bearer ' + userInfo
             }
            
        })
        console.log( data)
        dispatch({
            type:USER_PROFILE_SUCCESS,
            payload:data
        })
        localStorage.setItem('profile', JSON.stringify(data));  
        
    } catch (error) {
        
            dispatch({
                type:USER_PROFILE_FAIL,
                payload: 
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error
            })
        
    }
}
export const updateUserProfileAction = (user) => async(dispatch, getState)=>{
    dispatch({
        type:USER_PROFILE_REQUEST,
        payload:user

    })
    try {
        const {userSignin:{userInfo}} = getState();
        
        const {data} = await axios.put('/api/user/profile/',user,{
            headers: { 
                
                'Authorization': 'Bearer ' + userInfo
             }
            
        })
        console.log( data)
        dispatch({
            type:USER_PROFILE_SUCCESS,
            payload:data
        })
        localStorage.setItem('profile', JSON.stringify(data));  
        
    } catch (error) {
        
            dispatch({
                type:USER_PROFILE_FAIL,
                payload: 
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error
            })
        
    }
}

export const userDetailsAction = () => async(dispatch, getState)=>{
    dispatch({
        type:USER_TYPE_DETAILS_LIST_REQUEST,
    })
    try {
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.get('/api/user/vendordetails',{
            headers:{
                'Authorization': 'Bearer ' + userInfo
            }
        })
        dispatch({
            type:USER_TYPE_DETAILS_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:USER_TYPE_DETAILS_LIST_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }
}
export const signout = () => (dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('profile');
    localStorage.removeItem('Razorpay');
    dispatch({
        type:USER_SIGNOUT,
    });
}