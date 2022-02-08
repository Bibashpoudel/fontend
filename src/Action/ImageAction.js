import axios from "axios"
import { IMAGE_LIST_FAIL, IMAGE_LIST_REQUEST, IMAGE_LIST_SUCCESS, VENUE_IMAGE_ADD_FAIL, VENUE_IMAGE_ADD_REQUEST, VENUE_IMAGE_ADD_SUCCESS, VENUE_IMAGE_LIST_FAIL, VENUE_IMAGE_LIST_REQUEST, VENUE_IMAGE_LIST_SUCCESS } from "../Constants/imageConstants";

export const ImageList =(venueId) => async(dispatch)=>{
    dispatch({
        type:IMAGE_LIST_REQUEST,
        payload:venueId
    })
    try {
        const {data} = await axios.get(`/api/gallery/all/`);
        dispatch({
            type:IMAGE_LIST_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:IMAGE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        })
    }

}


export const VenueImageList =(venueId) => async(dispatch)=>{
    dispatch({
        type:VENUE_IMAGE_LIST_REQUEST,
        payload:venueId
    })
    try {
        const {data} = await axios.get(`/api/gallery/particularvenue/${venueId}/`);
        dispatch({
            type:VENUE_IMAGE_LIST_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:VENUE_IMAGE_LIST_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        })
    }

}
export const VenueImageadd =(venue, media) => async(dispatch, getState)=>{
    dispatch({
        type:VENUE_IMAGE_ADD_REQUEST,
        payload:venue
    })
    try {
        const UploadImage = new FormData();
        UploadImage.append('venue', venue)
        UploadImage.append('media' ,media)


        const {userSignin:{userInfo}} = getState();
        const {data} = await axios.post(`/api/gallery/venue/manage/${venue}/`,UploadImage,{
            headers:{
              
                'Authorization': 'Bearer '+ userInfo
            }
        });
        dispatch({
            type:VENUE_IMAGE_ADD_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:VENUE_IMAGE_ADD_FAIL,
            payload:
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                ? error.message
                : error
        })
    }

}