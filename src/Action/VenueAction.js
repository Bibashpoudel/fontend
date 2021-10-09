import axios from "axios";
import { VENDOR_VENUE_DETAILS_FAIL, VENDOR_VENUE_DETAILS_REQUEST, VENDOR_VENUE_DETAILS_SUCCESS, VENUE_ADD_Fail, VENUE_ADD_REQUEST, VENUE_ADD_SUCCESS, VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS,  VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS,  VENUE_TYPE_LIST_Fail, VENUE_TYPE_LIST_REQUEST, VENUE_TYPE_LIST_SUCCESS, VENUE_UPDATE_FAIL, VENUE_UPDATE_REQUEST, VENUE_UPDATE_SUCCESS } from "../Constants/venueConstants"


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
        });
    }
}





// --------------------------------venue gallery action

// export const VenueGalleryList = () =>async (dispatch) =>{
//     dispatch({
//         type:VENUE_GALLERY_REQUEST
//     })
//     try {
//         const {data } = await axios.get('/api/')
//     } catch (error) {
        
//     }
// }

// Name, price, displayprice, city, venue_type, image, about, features
// ame:Name, actual_price:price, display_price:displayprice, city:city, venue_type:venue_type, display_image:image, about:about, features:features


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
        // const uploadData = new FormData();
        // uploadData.append('name', Name);
        // uploadData.append('actual_price', price);
        // uploadData.append('display_price', displayprice);
        // uploadData.append('city', city);
        // uploadData.append('venue_type', venue_type);
        // uploadData.append('display_image', image);
        // uploadData.append('about', about);
        // uploadData.append('features', features);
        
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
        })
        
    }

}