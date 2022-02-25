import axios from "axios"
import { FAQ_LIST_FAIL, FAQ_LIST_REQUEST, FAQ_LIST_SUCCESS, PRIVACY_LIST_FAIL, PRIVACY_LIST_REQUEST, PRIVACY_LIST_SUCCESS, TC_LIST_FAIL, TC_LIST_REQUEST, TC_LIST_SUCCESS } from "../Constants/ImpfileConstants"

export const Privacy = () => async (dispatch) => {
    dispatch({
        type: PRIVACY_LIST_REQUEST
    })
    try {
        const { data } = await axios.get('/api/company/policy/', {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        dispatch({
            type: PRIVACY_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRIVACY_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error
        })
    }
};
export const termscondition = () => async (dispatch) => {
    dispatch({
        type: TC_LIST_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/company/terms&condition/`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({
            type: TC_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TC_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                        ? error.message
                        : error
        })
    }
};
export const FAQAction = () => async (dispatch) => {
    dispatch({
        type: FAQ_LIST_REQUEST
    })
    try {
        const { data } = await axios.get(`/api/company/faq/`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        dispatch({
            type: FAQ_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FAQ_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                        ? error.message
                        : error
        })
    }
};