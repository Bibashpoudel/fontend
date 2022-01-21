import { USER_REGISTER_REQUEST,USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_FAIL, USER_TYPE_DETAILS_LIST_SUCCESS, USER_TYPE_DETAILS_LIST_REQUEST, USER_TYPE_DETAILS_LIST_FAIL } from "../Constants/UserConstant";



export const userSigninReducer = (state ={}, action)=>{
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {
                loading:true
            }
        case USER_SIGNIN_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload
                
            }
        
        case USER_SIGNIN_FAIL:
            return{
                loading:false,
                error:action.payload
            } 
        case USER_SIGNOUT:
            return {}       
        
        default:
            return state;
    }
}

export const userRegisterReducer = (state ={}, action)=>{
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {
                loading:true
            }
        case USER_REGISTER_SUCCESS:
            return{
                loading:false,
                userInfo:action.payload
            }
        
        case USER_REGISTER_FAIL:
            return{
                loading:false,
                error:action.payload
            } 
        case USER_SIGNOUT:
            return {}       
        
        default:
            return state;
    }
}

export const UserProfileReducer =(state ={}, action) =>{
    switch(action.type){
        case USER_PROFILE_REQUEST:
            return{
                loading:true,
            }
        case USER_PROFILE_SUCCESS:
            return{
                loading:false,
                profile:action.payload
            } 
        case USER_PROFILE_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state
    }
}
export const userDetailsReducer = (state ={loading:true}, action) =>{
    switch(action.type){
        case USER_TYPE_DETAILS_LIST_REQUEST:
            return{
                loading:true
            } 
        case USER_TYPE_DETAILS_LIST_SUCCESS:
            return{
                loading:false,
                userDetails:action.payload
            }
        case USER_TYPE_DETAILS_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state 

    }
}