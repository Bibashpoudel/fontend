import { SERVICE_ADD_FAIL, SERVICE_ADD_REQUEST, SERVICE_ADD_SUCCESS, SERVICE_DETAILS_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS, SERVICE_LIST_FAIL, SERVICE_LIST_REQUEST, SERVICE_LIST_SUCCESS, SERVICE_UPDATE_FAIL, SERVICE_UPDATE_REQUEST, SERVICE_UPDATE_RESET, SERVICE_UPDATE_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS } from "../Constants/servicesConstants";

export const VenueServiceListReducer = (state ={vService:[]}, action) =>{
    switch(action.type){
        case VENUE_SERVICE_LIST_REQUEST:
            return{
                loading:true,
            }
        case VENUE_SERVICE_LIST_SUCCESS:
            return{
                loading:false,
                vService:action.payload
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

export const ServiceReducer = (state ={services:[]}, action) =>{
    switch(action.type){
        case SERVICE_LIST_REQUEST:
            return{
                loading:true,
            }
        case SERVICE_LIST_SUCCESS:
            return{
                loading:false,
                services:action.payload
            }
        case SERVICE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;            
    }
}
export const detailsServiceReducer = (state={loading:true},action)=>{
    switch(action.type){
        case SERVICE_DETAILS_REQUEST:
            return{
                loading:true
            }
        case SERVICE_DETAILS_SUCCESS:
            return{
                loading:false,
                vService:action.payload
            }
        case SERVICE_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const ServiceAddReducer = (state ={}, action) =>{
    switch(action.type){
        case SERVICE_ADD_REQUEST:
            return{
                loading:true,
            }
        case SERVICE_ADD_SUCCESS:
            return{
                loading:false,
                success:action.payload
            }
        case SERVICE_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;            
    }
}
export const ServiceupdateReducer = (state ={}, action) =>{
    switch(action.type){
        case SERVICE_UPDATE_REQUEST:
            return{
                loading:true,
            }
        case SERVICE_UPDATE_SUCCESS:
            return{
                loading:false,
                success:action.payload
            }
        case SERVICE_UPDATE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case SERVICE_UPDATE_RESET:
            return{

            }
        default:
            return state;            
    }
}