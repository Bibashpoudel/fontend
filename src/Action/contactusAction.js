import axios from "axios"
import { CONTACT_SEND_FAIL, CONTACT_SEND_REQUEST, CONTACT_SEND_SUCCESS } from "../Constants/contactConstants"



export const ContactusAction = (fullname, email, message) => async (dispatch) => {
    dispatch({
        type: CONTACT_SEND_REQUEST,
        payload: { fullname, email, contact:message }
    })
    try {
        const { data } = await axios.post("/api/company/contact/", {
            fullname, email, contact:message
        });
        dispatch({
            type: CONTACT_SEND_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: CONTACT_SEND_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
                    ? error.message
                    : error
        })
    }
};