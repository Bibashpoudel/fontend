
import axios from 'axios'
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL,  USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL } from "../Constants/UserConstant";

export const Signup = (name, email, phone, customer_type, password) => async( dispatch) =>{
    dispatch({
        type:USER_REGISTER_REQUEST,
        payload: {username:name, email:email, mobile:phone, user_type:customer_type, password:password}
    });
    try {
        const {data} = await axios.post('/api/user/add/', {username:name, email:email, mobile:phone, user_type:customer_type, password:password})
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })
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

export const Signin = (phone, password) => async(dispatch) =>{
    dispatch({
        type: USER_SIGNIN_REQUEST,
        payload:{username:phone, password}
    })
    try {
        const {data} = await axios.post('/api/user/token/', {username:phone, password})
        
        
            
          
                

                dispatch({
                    type:USER_SIGNIN_SUCCESS,
                    payload:data.access
                });
                
                
                
                localStorage.setItem('userInfo', JSON.stringify(data.access));   
    } 
    
    catch (error) {
        dispatch({
            type:USER_SIGNIN_FAIL,
            payload: 
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })   
    }
    
}

export const UserProfileView = () => async(dispatch, getState)=>{
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
        console.log("bibash" + data)
        dispatch({
            type:USER_PROFILE_SUCCESS,
            payload:data
        })
        localStorage.setItem('UserProfile', JSON.stringify(data));  
        
    } catch (error) {
        
            dispatch({
                type:USER_PROFILE_FAIL,
                payload: 
                    error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message
            })
        
    }
}
export const signout = () => (dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({
        type:USER_SIGNOUT,
    });
}