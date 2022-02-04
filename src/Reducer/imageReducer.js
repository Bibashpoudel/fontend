import { IMAGE_LIST_FAIL, IMAGE_LIST_REQUEST, IMAGE_LIST_SUCCESS, VENUE_IMAGE_ADD_FAIL, VENUE_IMAGE_ADD_REQUEST, VENUE_IMAGE_ADD_SUCCESS, VENUE_IMAGE_LIST_FAIL, VENUE_IMAGE_LIST_REQUEST, VENUE_IMAGE_LIST_SUCCESS } from "../Constants/imageConstants";

export const ImageListReducer = (state={Img:[]}, action) =>{
    switch(action.type){
        case IMAGE_LIST_REQUEST:
            return{
                loading:true
            }
        case IMAGE_LIST_SUCCESS:
            return{
                loading:false,
                Img:action.payload
            }
        case IMAGE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}



export const venueImageListReducer = (state={venImg:[]}, action) =>{
    switch(action.type){
        case VENUE_IMAGE_LIST_REQUEST:
            return{
                loading:true
            }
        case VENUE_IMAGE_LIST_SUCCESS:
            return{
                loading:false,
                venImg:action.payload
            }
        case VENUE_IMAGE_LIST_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}


export const addimageReducer = (state={},action) =>{
    switch(action.type){
        case VENUE_IMAGE_ADD_REQUEST:
            return{
                loading:true
            }
        case VENUE_IMAGE_ADD_SUCCESS:
            return{
                loading:false,
                success:true
            }
        case VENUE_IMAGE_ADD_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state;
    }

}