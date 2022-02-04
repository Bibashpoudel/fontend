
import { VENDOR_CITY_FAIL, VENDOR_CITY_REQUEST, VENDOR_CITY_SUCCESS, VENDOR_GST_PAN_ADD_FAIL, VENDOR_GST_PAN_ADD_REQUEST, VENDOR_GST_PAN_ADD_SUCCESS, VENDOR_REGISTER_FAIL, VENDOR_REGISTER_REQUEST, VENDOR_REGISTER_SUCCESS, VENDOR_TYPE_FAIL, VENDOR_TYPE_REQUEST, VENDOR_TYPE_SUCCESS, VENDOR_VENUE_LIST_FAIL, VENDOR_VENUE_LIST_REQUEST, VENDOR_VENUE_LIST_SUCCESS } from "../Constants/vendorConstants";



export const VendorCityListReducer = (state = {loading:true}, action ) =>{
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

export const VendorTypeListReducer = (state = {loading:true}, action ) =>{
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
export const VendorVenueListReducer = (state={Vendorvenues:[]}, action) =>{
    switch(action.type){
        case VENDOR_VENUE_LIST_REQUEST:
            return{
                loading:true
            }
        case VENDOR_VENUE_LIST_SUCCESS:
            return{
                loading:false,
                VendorVenues:action.payload
            }
        case VENDOR_VENUE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state

    }
}