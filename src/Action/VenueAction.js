import axios from "axios";
import { VENUE_DETAILS_FAIL, VENUE_DETAILS_REQUEST, VENUE_DETAILS_SUCCESS,  VENUE_LIST_FAIL, VENUE_LIST_REQUEST, VENUE_LIST_SUCCESS, VENUE_SERVICE_LIST_FAIL, VENUE_SERVICE_LIST_REQUEST, VENUE_SERVICE_LIST_SUCCESS } from "../Constants/venueConstants"



export const VenueList =() =>async(dispatch)=>{
    dispatch({
        type:VENUE_LIST_REQUEST,
       
    });

    try {
        const {data} = await axios.get('/api/garden/admin/');

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
export const VenueDetails =(productId) =>async(dispatch)=>{
    dispatch({
        type:VENUE_DETAILS_REQUEST,
        payload:productId
    });

    try {
        const {data} = await axios.get(`/api/garden/admin/${productId}`);

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

// venue services list action
export const VenueServices =() =>async(dispatch)=>{
    dispatch({
        type:VENUE_SERVICE_LIST_REQUEST,
        
    });

    try {
        const {data} = await axios.get('/api/user/services/',{
            headers: { 
                'Content-Type': 'application/json'
             }
            
        })

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