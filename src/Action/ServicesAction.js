import axios from "axios";
import { ADD_SERVICE_REVIEW_FAIL, ADD_SERVICE_REVIEW_REQUEST, ADD_SERVICE_REVIEW_SUCCESS, SERVICE_ADD_FAIL, SERVICE_ADD_REQUEST, SERVICE_ADD_SUCCESS, SERVICE_DELETE_FAIL, SERVICE_DELETE_REQUEST, SERVICE_DELETE_SUCCESS, SERVICE_DETAILS_FAIL, SERVICE_DETAILS_REQUEST, SERVICE_DETAILS_SUCCESS, SERVICE_LIST_FAIL, SERVICE_LIST_REQUEST, SERVICE_LIST_SUCCESS, SERVICE_REVIEW_LIST_FAIL, SERVICE_REVIEW_LIST_REQUEST, SERVICE_REVIEW_LIST_SUCCESS, SERVICE_TYPE_DETAILS_FAIL, SERVICE_TYPE_DETAILS_REQUEST, SERVICE_TYPE_DETAILS_SUCCESS, SERVICE_TYPE_LIST_FAIL, SERVICE_TYPE_LIST_REQUEST, SERVICE_TYPE_LIST_SUCCESS, SERVICE_UPDATE_FAIL, SERVICE_UPDATE_REQUEST, SERVICE_UPDATE_SUCCESS, TRENDING_SERVICE_LIST_FAIL, TRENDING_SERVICE_LIST_REQUEST, TRENDING_SERVICE_LIST_SUCCESS, VENDOR_SERVICE_DETAILS_FAIL, VENDOR_SERVICE_DETAILS_REQUEST, VENDOR_SERVICE_DETAILS_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS } from "../Constants/servicesConstants";



// venue services list action
//for user
export const ServicesListaction =(venueId) =>async(dispatch)=>{
    dispatch({
        type:VENUE_SERVICE_LIST_REQUEST,
        payload:venueId
        
    });

    try {
        
        const {data} = await axios.get(`/api/service/particularvenue/${venueId}/`)

        dispatch({
            type:VENUE_SERVICE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_SERVICE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}


























// //////////////////////////////////////////////////

export const VenueServices =() =>async(dispatch, getState)=>{
    dispatch({
        type:VENUE_SERVICE_LIST_REQUEST,
        
        
    });

    try {
        const{userProfileView:{profile}} = getState();
        const {data} = await axios.get(`/api/service/particularvendor/${profile.id}/`)

        dispatch({
            type:VENUE_SERVICE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_SERVICE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}
export const ServicesList =() =>async(dispatch)=>{
    dispatch({
        type:SERVICE_LIST_REQUEST,
    });

    try {
        
        const {data} = await axios.get('/api/service/admin/')

        dispatch({
            type:SERVICE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}

export const TrendingServicesList =() =>async(dispatch)=>{
    dispatch({
        type:TRENDING_SERVICE_LIST_REQUEST,
    });

    try {
        
        const {data} = await axios.get('/api/service/trendings/')

        dispatch({
            type:TRENDING_SERVICE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:TRENDING_SERVICE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}
export const ServiceDetails = (serviceId) => async(dispatch)=>{
    dispatch({
        type:SERVICE_DETAILS_REQUEST,
        payload:serviceId
    })
    try {
        
        const {data} = await axios.get(`/api/service/admin/${serviceId}`)
        dispatch({
            type:SERVICE_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:SERVICE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error
        })
    }
}

// service type get action
export const ServicesTypeList =() =>async(dispatch)=>{
    dispatch({
        type:SERVICE_TYPE_LIST_REQUEST,
        
        
    });

    try {
        
        const {data} = await axios.get('/api/service/type/')

        dispatch({
            type:SERVICE_TYPE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_TYPE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}
export const ServiceTypeDetails = (typeID) => async(dispatch, getState)=>{
    dispatch({
        type:SERVICE_TYPE_DETAILS_REQUEST,
        payload:typeID
    })
    try {
        
        const {data} = await axios.get(`/api/service/type/${typeID}/`)
        dispatch({
            type:SERVICE_TYPE_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:SERVICE_TYPE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error
        })
    }
}


export const ServiceAdd = (name, venue, actual_price, display_price, display_image,description,is_true)=>async(dispatch, getState)=>{
    dispatch({
        type:SERVICE_ADD_REQUEST,
        payload:{name, venue, actual_price, display_price, display_image,description,is_true}
    })
    try {
        const {userSignin:{userInfo}} = getState();

        const uploadData = new FormData();
        uploadData.append("name", name);
        uploadData.append("venue", venue);
        uploadData.append("actual_price", actual_price);
        uploadData.append("display_price", display_price);
        uploadData.append("display_image", display_image);
        uploadData.append("description", description);
        uploadData.append("is_true", is_true);



        const {data} = await axios.post('/api/service/vendor/',uploadData,{
            headers:{
                'Authorization': 'Bearer '+ userInfo
            }
        })
        dispatch({
            type:SERVICE_ADD_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:SERVICE_ADD_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        })
    }
}
export const ServiceUpdateAction = (service)=>async(dispatch, getState)=>{
    dispatch({
        type:SERVICE_UPDATE_REQUEST,
        payload:{service}
    })
    try {
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.put(`/api/service/vendor/${service.id}/`,service, {
            headers:{
                'Authorization': 'Bearer ' + userInfo
            }
        })
        dispatch({
            type:SERVICE_UPDATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:SERVICE_UPDATE_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        })
    }
}
export const serviceDeleteAction = (serviceId) => async(dispatch, getState)=>{
    dispatch({
        type:SERVICE_DELETE_REQUEST,
        payload:serviceId
    })
    try {

        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.delete(`/api/service/vendor/${serviceId}`,{
            headers:{
                'Authorization': 'Bearer ' + userInfo
            }
        })
        dispatch({
            type:SERVICE_DELETE_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error
        })
        
    }
}
export const vendorServiceDetails = (serviceId) => async(dispatch, getState)=>{
    dispatch({
        type:VENDOR_SERVICE_DETAILS_REQUEST,
        payload:serviceId
    })
    try {
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.get(`/api/service/vendor/${serviceId}`,{
            headers:{
                'Authorization': 'Bearer '+ userInfo
            }
        })
        dispatch({
            type:VENDOR_SERVICE_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:VENDOR_SERVICE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error
        })
    }
}


// service Review

export const CreateServiceComment = (serviceId, comment) =>async(dispatch, getState)=>{
    dispatch({
        type:ADD_SERVICE_REVIEW_REQUEST,
        payload:serviceId, comment
    })
    try {
        const {userSignin:{userInfo}} = getState();
        
        // const now = new Date();
        const {data} = await axios.post(`/api/review/customer/service/${serviceId}/`, {feedback:comment},{
            headers:{
                'Authorization': 'Bearer '+userInfo
            }
        })
        dispatch({
            type:ADD_SERVICE_REVIEW_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ADD_SERVICE_REVIEW_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error
        })
        
    }

}
export const ServiceReviewListAction =(serviceId) =>async(dispatch)=>{
    dispatch({
        type:SERVICE_REVIEW_LIST_REQUEST,
        payload:serviceId
    });

    try {
        const {data} = await axios.get(`/api/review/service/${serviceId}/`);

        dispatch({
            type:SERVICE_REVIEW_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:SERVICE_REVIEW_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}