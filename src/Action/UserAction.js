
import axios from 'axios'
import { USER_REGISTER_REQUEST, USER_REGISTER_FAIL,  USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../Constants/UserConstant";

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
        const token = data.access
        
            // dispatch({
            //     type:USER_SIGNIN_SUCCESS,
            //     payload:data
            // });
          
                const {profile} = await axios.get('/api/user/profile/',{
                    headers: { Authorization: `Bearer ${token}`}

                    
                })

                dispatch({
                    type:USER_SIGNIN_SUCCESS,
                    payload:profile
                });
                console.log(profile);
                
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: profile });
                localStorage.setItem('userInfo', JSON.stringify(data));   
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
export const signout = () => (dispatch)=>{
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    dispatch({
        type:USER_SIGNOUT,
    });
}