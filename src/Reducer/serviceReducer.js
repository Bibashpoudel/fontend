import { ADD_SERVICE_REVIEW_FAIL, ADD_SERVICE_REVIEW_REQUEST, ADD_SERVICE_REVIEW_RESET, ADD_SERVICE_REVIEW_SUCCESS, CITY_SERVICE_LIST_FAIL, CITY_SERVICE_LIST_REQUEST, CITY_SERVICE_LIST_SUCCESS, SERVICE_ADD_FAIL, SERVICE_ADD_REQUEST, SERVICE_ADD_RESET, SERVICE_ADD_SUCCESS, SERVICE_DELETE_FAIL, SERVICE_DELETE_REQUEST, SERVICE_DELETE_RESET, SERVICE_DELETE_SUCCESS, SERVICE_DETAILS_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS, SERVICE_LIST_FAIL, SERVICE_LIST_REQUEST, SERVICE_LIST_SUCCESS, SERVICE_REVIEW_LIST_FAIL, SERVICE_REVIEW_LIST_REQUEST, SERVICE_REVIEW_LIST_SUCCESS, SERVICE_TYPE_DETAILS_FAIL, SERVICE_TYPE_DETAILS_REQUEST, SERVICE_TYPE_DETAILS_SUCCESS, SERVICE_TYPE_LIST_FAIL, SERVICE_TYPE_LIST_REQUEST, SERVICE_TYPE_LIST_SUCCESS, SERVICE_UPDATE_FAIL, SERVICE_UPDATE_REQUEST, SERVICE_UPDATE_RESET, SERVICE_UPDATE_SUCCESS, TRENDING_SERVICE_LIST_FAIL, TRENDING_SERVICE_LIST_REQUEST, TRENDING_SERVICE_LIST_SUCCESS, VENDOR_SERVICE_DETAILS_FAIL, VENDOR_SERVICE_DETAILS_REQUEST, VENDOR_SERVICE_DETAILS_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS } from "../Constants/servicesConstants";

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
export const TrendingServiceReducer = (state ={loading:true}, action) =>{
    switch(action.type){
        case TRENDING_SERVICE_LIST_REQUEST:
            return{
                loading:true,
            }
        case TRENDING_SERVICE_LIST_SUCCESS:
            return{
                loading:false,
                Tservices:action.payload
            }
        case TRENDING_SERVICE_LIST_FAIL:
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
                serviceD:action.payload
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
export const VendordetailsServiceReducer = (state={loading:true},action)=>{
    switch(action.type){
        case VENDOR_SERVICE_DETAILS_REQUEST:
            return{
                loading:true
            }
        case VENDOR_SERVICE_DETAILS_SUCCESS:
            return{
                loading:false,
                vService:action.payload
            }
        case VENDOR_SERVICE_DETAILS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}

// service type reducer
export const ServiceTypeReducer = (state ={servicetype:[]}, action) =>{
    switch(action.type){
        case SERVICE_TYPE_LIST_REQUEST:
            return{
                loading:true,
            }
        case SERVICE_TYPE_LIST_SUCCESS:
            return{
                loading:false,
                servicetype:action.payload
            }
        case SERVICE_TYPE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;            
    }
}
export const detailsServiceTypeReducer = (state={PStype : []},action)=>{
    switch(action.type){
        case SERVICE_TYPE_DETAILS_REQUEST:
            return{
                loading:true
            }
        case SERVICE_TYPE_DETAILS_SUCCESS:
            return{
                loading:false,
                PStype:action.payload
            }
        case SERVICE_TYPE_DETAILS_FAIL:
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
        case SERVICE_ADD_RESET:
            return{

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
export const serviceDeleteReducer = (state={}, action) =>{

    switch(action.type){
        case SERVICE_DELETE_REQUEST:
            return{
                loading:true
            }
        case SERVICE_DELETE_SUCCESS:
            return{
                loading:false,
                success:true
            }
        case SERVICE_DELETE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case SERVICE_DELETE_RESET:
            return{
            }
        default:
            return state
    }

}

// review Reducer

export const AddServiceReviewReducer = (state={},action)=>{
    switch(action.type){
        case ADD_SERVICE_REVIEW_REQUEST:
            return{
                loading:true,
            }
        case  ADD_SERVICE_REVIEW_SUCCESS:
            return{
                loading:false,
                SReviewAdd:action.payload
            }
        case  ADD_SERVICE_REVIEW_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case  ADD_SERVICE_REVIEW_RESET:
        return{}
        default:
            return state
    }
}
export const ServiceReviewListReducer = (state = {serviceReview:[]}, action) =>{
    switch(action.type){
        case SERVICE_REVIEW_LIST_REQUEST:
            return{
                loading:true
            }
        case SERVICE_REVIEW_LIST_SUCCESS:
            return{
                loading:false,
                serviceReview:action.payload
            }
        case SERVICE_REVIEW_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }    
        default:
            return state
    }
}

// service according to city list reducer

export const CityServiceListReducer = (state ={cityservice:[]},action) =>{
    switch(action.type){
        case CITY_SERVICE_LIST_REQUEST:
            return {
                loading:true,
            }
        case CITY_SERVICE_LIST_SUCCESS:
            return {
                loading:false,
                cityservice:action.payload,
            }
        case CITY_SERVICE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state

    }

}