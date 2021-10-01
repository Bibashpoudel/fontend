
import { VENDOR_CITY_FAIL, VENDOR_CITY_REQUEST, VENDOR_CITY_SUCCESS, VENDOR_GST_PAN_ADD_FAIL, VENDOR_GST_PAN_ADD_REQUEST, VENDOR_GST_PAN_ADD_SUCCESS, VENDOR_REGISTER_FAIL, VENDOR_REGISTER_REQUEST, VENDOR_REGISTER_SUCCESS, VENDOR_TYPE_FAIL, VENDOR_TYPE_REQUEST, VENDOR_TYPE_SUCCESS } from "../Constants/vendorConstants";



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
        case VENDOR_REGISTER_REQUEST:
            return {
                loading:true
            }
        case VENDOR_REGISTER_SUCCESS:
            return{
                loading:false,
                VendorInfo:action.payload
            }
        
        case VENDOR_REGISTER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }
}

export const GSTPANAddReducer =(state={}, action) =>{
    switch(action.type){
        case VENDOR_GST_PAN_ADD_REQUEST:
            return{
                loading:true,

            }
        case VENDOR_GST_PAN_ADD_SUCCESS:
            return{
                loading:false,
                gstpan:action.payload
            }
        case VENDOR_GST_PAN_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state    
    }
}