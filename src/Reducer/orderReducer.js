import { CHECK_AVAILABLE_FAIL, CHECK_AVAILABLE_REQUEST, CHECK_AVAILABLE_RESET, CHECK_AVAILABLE_SUCCESS, CREATE_ORDER_FAIL, CREATE_ORDER_REQUEST, CREATE_ORDER_RESET, CREATE_ORDER_SUCCESS, ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, USER_ORDER_FAIL, USER_ORDER_REQUEST, USER_ORDER_SUCCESS } from "../Constants/orderConstants";

export const CheckAvailableReducer = (state = { status: {} }, action) => {
    switch (action.type) {
        case CHECK_AVAILABLE_REQUEST:
            return {
                loading: true
            }
        case CHECK_AVAILABLE_SUCCESS:
            return {
                loading: false,
                status: action.payload
            }
        case CHECK_AVAILABLE_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CHECK_AVAILABLE_RESET:
            return {

            }
        default:
            return state;
    }
};

export const OrderReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                loading: true,
            }
        case CREATE_ORDER_SUCCESS:
            return {
                loading: false,
                OderCreateSuccess: action.payload
            }
        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CREATE_ORDER_RESET:
            return {}
        
        default:
            return state
        
    }
};
export const UserOrderReducer = (state = { userOrder: [] }, action) => {
    switch (action.type) {
        case USER_ORDER_REQUEST:
            return {
                loading: true,
            }
        case USER_ORDER_SUCCESS:
            return {
                loading: false,
                userOrder: action.payload
            }
        case USER_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
        
    }
};
export const VendorOrderListReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return {
                loading: true
            }
        case ORDER_LIST_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }
        case ORDER_LIST_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};