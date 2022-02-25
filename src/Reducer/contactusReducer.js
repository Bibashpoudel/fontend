import { CONTACT_SEND_FAIL, CONTACT_SEND_REQUEST, CONTACT_SEND_RESET, CONTACT_SEND_SUCCESS } from "../Constants/contactConstants";


export const ContactusReducer = (state = {}, action) => {
    switch (action.type) {
        case CONTACT_SEND_REQUEST:
            return {
                loading: true,
            }
        case CONTACT_SEND_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }
        case CONTACT_SEND_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CONTACT_SEND_RESET:
            return {}
        default:
            return state;
    }
};