import { CITY_VENUE_LIST_FAIL, CITY_VENUE_LIST_REQUEST, CITY_VENUE_LIST_SUCCESS, VENDOR_VENUE_DETAILS_FAIL, VENDOR_VENUE_DETAILS_REQUEST, VENDOR_VENUE_DETAILS_SUCCESS, VENUE_ADD_Fail, VENUE_ADD_REQUEST, VENUE_ADD_RESET, VENUE_ADD_SUCCESS, VENUE_DELETE_FAIL, VENUE_DELETE_REQUEST, VENUE_DELETE_RESET, VENUE_DELETE_SUCCESS, VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS, VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS,    VENUE_TYPE_LIST_Fail, VENUE_TYPE_LIST_REQUEST, VENUE_TYPE_LIST_SUCCESS, VENUE_UPDATE_FAIL, VENUE_UPDATE_REQUEST, VENUE_UPDATE_RESET, VENUE_UPDATE_SUCCESS } from "../Constants/venueConstants";



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
export const CityVenueListReducer = (state ={cityvenue:[]},action) =>{
    switch(action.type){
        case CITY_VENUE_LIST_REQUEST:
            return {
                loading:true,
            }
        case CITY_VENUE_LIST_SUCCESS:
            return {
                loading:false,
                cityvenue:action.payload,
            }
        case CITY_VENUE_LIST_FAIL:
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
        case VENUE_ADD_RESET:
        return{}
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


export const venueDeleteReducer = (state={}, action) =>{

    switch(action.type){
        case VENUE_DELETE_REQUEST:
            return{
                loading:true
            }
        case VENUE_DELETE_SUCCESS:
            return{
                loading:false,
                success:true
            }
        case VENUE_DELETE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case VENUE_DELETE_RESET:
            return{

            }
        default:
            return state
    }

}