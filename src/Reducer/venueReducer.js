import { VENDOR_VENUE_DETAILS_FAIL, VENDOR_VENUE_DETAILS_REQUEST, VENDOR_VENUE_DETAILS_SUCCESS, VENUE_ADD_Fail, VENUE_ADD_REQUEST, VENUE_ADD_SUCCESS, VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS, VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS, VENUE_TYPE_LIST_Fail, VENUE_TYPE_LIST_REQUEST, VENUE_TYPE_LIST_SUCCESS, VENUE_UPDATE_FAIL, VENUE_UPDATE_REQUEST, VENUE_UPDATE_RESET, VENUE_UPDATE_SUCCESS } from "../Constants/venueConstants";



export const VenueListReducer = (state = {venues:[]}, action) =>{
    switch(action.type){
        case VENUE_LIST_REQUEST:
            return{
                loading:true
            }
        case VENUE_LIST_SUCCESS:
            return{
                loading:false,
                venues:action.payload
            }
        case VENUE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state
    }
}
export const VenueDetailsListReducer = (state = {venue:{}}, action) =>{
    switch(action.type){
        case VENUE_DETAILS_REQUEST:
            return{
                loading:true
            }
        case VENUE_DETAILS_SUCCESS:
            return{
                loading:false,
                venue:action.payload
            }
        case VENUE_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state
    }
}

export const VenueServiceListReducer = (state ={services:[]}, action) =>{
    switch(action.type){
        case VENUE_SERVICE_LIST_REQUEST:
            return{
                loading:true,
            }
        case VENUE_SERVICE_LIST_SUCCESS:
            return{
                loading:false,
                services:action.payload
            }
        case VENUE_SERVICE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;            
    }
}
export const VenuetypeListReducer = (state = {venueType:[]}, action)=>{
    switch(action.type){
        case VENUE_TYPE_LIST_REQUEST:
            return{
                loading:true,
            }
        case VENUE_TYPE_LIST_SUCCESS:
            return{
                loading:false,
                venueType:action.payload
            }
        case VENUE_TYPE_LIST_Fail:
            return{
                loading:false,
                error:action.payload
            }        
        default:
            return state    
    }
}
export const AddvenueReducer = (state={},action)=>{
    switch(action.type){
        case VENUE_ADD_REQUEST:
            return{
                loading:true,

            }
        case VENUE_ADD_SUCCESS:
            return{
                loading:false,
                venueadd:action.payload
            }
        case VENUE_ADD_Fail:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const detailsVenueReducer = (state={loading:true},action)=>{
    switch(action.type){
        case VENDOR_VENUE_DETAILS_REQUEST:
            return{
                loading:true
            }
        case VENDOR_VENUE_DETAILS_SUCCESS:
            return{
                loading:false,
                vvDetails:action.payload
            }
        case VENDOR_VENUE_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const updateVenueReducer = (state={},action)=>{
    switch(action.type){
        case VENUE_UPDATE_REQUEST:
            return{
                loading:true
            }
        case VENUE_UPDATE_SUCCESS:
            return{
                loading:false,
                success:true
            }
        case VENUE_UPDATE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case VENUE_UPDATE_RESET:
            return{

            }
        default:
            return state
    }
}