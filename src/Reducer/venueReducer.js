import { VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS, VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS } from "../Constants/venueConstants";



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