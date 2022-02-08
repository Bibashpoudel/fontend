import axios from "axios";
import {ADD_REVIEW_FAIL, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, CITY_VENUE_LIST_FAIL, CITY_VENUE_LIST_REQUEST, CITY_VENUE_LIST_SUCCESS, PARTICULAR_VENUE_TYPE_LIST_FAIL, PARTICULAR_VENUE_TYPE_LIST_REQUEST, PARTICULAR_VENUE_TYPE_LIST_SUCCESS, TRENDING_VENUE_LIST_FAIL, TRENDING_VENUE_LIST_REQUEST, TRENDING_VENUE_LIST_SUCCESS, VENDOR_VENUE_DETAILS_FAIL, VENDOR_VENUE_DETAILS_REQUEST, VENDOR_VENUE_DETAILS_SUCCESS, VENUE_ADD_Fail, VENUE_ADD_REQUEST, VENUE_ADD_SUCCESS, VENUE_DELETE_FAIL, VENUE_DELETE_REQUEST, VENUE_DELETE_SUCCESS, VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS,  VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS,  VENUE_REVIEW_FAIL,  VENUE_REVIEW_REQUEST,  VENUE_REVIEW_SUCCESS,  VENUE_TYPE_LIST_Fail, VENUE_TYPE_LIST_REQUEST, VENUE_TYPE_LIST_SUCCESS, VENUE_UPDATE_FAIL, VENUE_UPDATE_REQUEST, VENUE_UPDATE_SUCCESS } from "../Constants/venueConstants"


export const VenueTypeList = () =>async(dispatch)=>{
    dispatch({
        type:VENUE_TYPE_LIST_REQUEST,
    })
    try {
        const {data} =await axios.get('/api/venue/venuetype/');
        dispatch({
            type:VENUE_TYPE_LIST_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:VENUE_TYPE_LIST_Fail,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        })
    }
}


export const VenueList =() =>async(dispatch)=>{
    dispatch({
        type:VENUE_LIST_REQUEST,
       
    });

    try {
        const {data} = await axios.get('/api/venue/admin/');

        dispatch({
            type:VENUE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        });
    }
}
export const TrendingVenueList =() =>async(dispatch)=>{
    dispatch({
        type:TRENDING_VENUE_LIST_REQUEST,
       
    });

    try {
        const {data} = await axios.get('/api/venue/trending/');

        dispatch({
            type:TRENDING_VENUE_LIST_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:TRENDING_VENUE_LIST_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        });
    }
}


export const VenueDetails =(venueId) =>async(dispatch)=>{
    dispatch({
        type:VENUE_DETAILS_REQUEST,
        payload:venueId
    });

    try {
        const {data} = await axios.get(`/api/venue/admin/${venueId}/`);

        dispatch({
            type:VENUE_DETAILS_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_DETAILS_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        });
    }
}





// --------------------------------venue gallery action

export const addVenueAction =( Name, price, displayprice, city, venue_type, image, about, features)=> async(dispatch, getState)=>{
    dispatch({
        type:VENUE_ADD_REQUEST,
        payload:{name:Name, actual_price:price, display_price:displayprice, city:city, venue_type:venue_type, display_image:image, about:about, features:features}
    })
    try {
        
        const {userSignin:{userInfo}} = getState();


       
            const uploadData = new FormData();
            uploadData.append('name', Name);
            uploadData.append('actual_price', price);
            uploadData.append('display_price', displayprice);
            uploadData.append('city', city);
            uploadData.append('venue_type', venue_type);
            uploadData.append('display_image', image);
            uploadData.append('about', about);
            uploadData.append('features', features);
            

       

        const {data} = await axios.post('/api/venue/vendor/' ,uploadData,{
            headers:{
              
                'Authorization': 'Bearer '+ userInfo
            }
        })
        dispatch({
            type:VENUE_ADD_SUCCESS,
            payload:data
        })
    } catch (error) {
            dispatch({
                type:VENUE_ADD_Fail,
                payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
            })
    }
}

export const vendorVenueDetails = (venueId) => async(dispatch, getState)=>{
    dispatch({
        type:VENDOR_VENUE_DETAILS_REQUEST,
        payload:venueId
    })
    try {
        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.get(`/api/venue/vendor/${venueId}`,{
            headers:{
                'Authorization': 'Bearer '+ userInfo
            }
        })
        dispatch({
            type:VENDOR_VENUE_DETAILS_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:VENDOR_VENUE_DETAILS_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : error
        })
    }
}

export const updateVeneAction = (venue) =>async(dispatch, getState)=>{
    dispatch({
        type:VENUE_UPDATE_REQUEST,
        payload:venue
    })
    try {
        const {userSignin:{userInfo}} = getState();
        
        
        const {data} = await axios.put(`/api/venue/vendor/${venue.id}/`,venue,{
            headers:{
                'Authorization': 'Bearer '+userInfo
            }
        })
        dispatch({
            type:VENUE_UPDATE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:VENUE_UPDATE_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : error
        })
        
    }

}


export const venueDeleteAction = (venueId) => async(dispatch, getState)=>{
    dispatch({
        type:VENUE_DELETE_REQUEST,
        payload:venueId
    })
    try {

        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.delete(`/api/venue/vendor/${venueId}`,{
            headers:{
                'Authorization': 'Bearer ' + userInfo
            }
        })
        dispatch({
            type:VENUE_DELETE_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        })
        
    }
}





// display venue by city



export const CityVenueList = (cityId) => async(dispatch) =>{
    dispatch({
        type:CITY_VENUE_LIST_REQUEST,
        payload:cityId
      
    })
   
    try {
        
      
        const {data} = await axios.get(`/api/venue/city/${cityId}/`
       
    )
    dispatch({
        type:CITY_VENUE_LIST_SUCCESS,
        payload:data
    })
    } catch (error) {
        dispatch({
            type:CITY_VENUE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
            
        })
    }
}
export const VenueTypeParticularList = (typeId) => async(dispatch) =>{
    dispatch({
        type:PARTICULAR_VENUE_TYPE_LIST_REQUEST,
        payload:typeId
      
    })
   
    try {
        
      
        const {data} = await axios.get(`/api/venue/particulartype/${typeId}/`)
    dispatch({
        type:PARTICULAR_VENUE_TYPE_LIST_SUCCESS,
        payload:data
    })
    } catch (error) {
        dispatch({
            type:PARTICULAR_VENUE_TYPE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
            
        })
    }
}




export const createComment = (venueId, comment) =>async(dispatch, getState)=>{
    dispatch({
        type:ADD_REVIEW_REQUEST,
        payload:venueId, comment
    })
    try {
        const {userSignin:{userInfo}} = getState();
        
        // const now = new Date();
        const {data} = await axios.post(`/api/review/customer/${venueId}/`, {feedback:comment},{
            headers:{
                'Authorization': 'Bearer '+userInfo
            }
        })
        dispatch({
            type:ADD_REVIEW_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ADD_REVIEW_FAIL,
            payload:
                error.response && error.response.data.message
                ? error.response.data.message
                : error
        })
        
    }

}
export const VenueReviewAction =(venueId) =>async(dispatch)=>{
    dispatch({
        type:VENUE_REVIEW_REQUEST,
        payload:venueId
    });

    try {
        const {data} = await axios.get(`/api/review/venue/${venueId}/`);

        dispatch({
            type:VENUE_REVIEW_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:VENUE_REVIEW_FAIL,
            payload: 
            error.response && error.response.data.message
                ? error.response.data.message
                : error
        });
    }
}
