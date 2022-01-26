import axios from "axios"
import { FAQ_LIST_FAIL, FAQ_LIST_REQUEST, FAQ_LIST_SUCCESS, PRIVACY_LIST_FAIL, PRIVACY_LIST_REQUEST, PRIVACY_LIST_SUCCESS, TC_LIST_FAIL, TC_LIST_REQUEST, TC_LIST_SUCCESS } from "../Constants/ImpfileConstants"





export const Privacy = () => async(dispatch)=>{
    dispatch({
        type:PRIVACY_LIST_REQUEST
    })
    try {
        const {data}= await axios.get('/api/company/policy/')

        dispatch({
            type:PRIVACY_LIST_SUCCESS,
            payload:data
            
        })

    } catch (error) {
        dispatch({
            type:PRIVACY_LIST_FAIL,
            payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }

}
export const termscondition = () => async(dispatch)=>{
    dispatch({
        type:TC_LIST_REQUEST
    })
    try {
        const {data}= await axios.get(`/api/company/terms&condition/`)

        dispatch({
            type:TC_LIST_SUCCESS,
            payload:data
            
        })

    } catch (error) {
        dispatch({
            type:TC_LIST_FAIL,
            payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }

}
export const FAQ = () => async(dispatch)=>{
    dispatch({
        type:FAQ_LIST_REQUEST
    })
    try {
        const {data}= await axios.get(`/api/company/faq/`)

        dispatch({
            type:FAQ_LIST_SUCCESS,
            payload:data
            
        })

    } catch (error) {
        dispatch({
            type:FAQ_LIST_FAIL,
            payload:
                    error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }

}