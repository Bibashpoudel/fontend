import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNOUT } from "../Constants/UserConstant";
import { VENDOR_CITY_FAIL, VENDOR_CITY_REQUEST, VENDOR_CITY_SUCCESS, VENDOR_TYPE_FAIL, VENDOR_TYPE_REQUEST, VENDOR_TYPE_SUCCESS } from "../Constants/vendorConstants";



export const VendorCityListReducer = (state = {citys:[]}, action ) =>{
    switch(action.type){
        case VENDOR_CITY_REQUEST:
            return{
                loading:true
            }
        case VENDOR_CITY_SUCCESS:
            return {
                loading:false,
                citys:action.payload
            } 
        case VENDOR_CITY_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state           
    }
}

export const VendorTypeListReducer = (state = {types:[]}, action ) =>{
    switch(action.type){
        case VENDOR_TYPE_REQUEST:
            return{
                loading:true
            }
        case VENDOR_TYPE_SUCCESS:
            return {
                loading:false,
                types:action.payload
            } 
        case VENDOR_TYPE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state           
    }
}

export const VendorRegisterReducer = (state ={}, action)=>{
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