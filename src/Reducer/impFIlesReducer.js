import { FAQ_LIST_FAIL, FAQ_LIST_REQUEST, FAQ_LIST_SUCCESS, PRIVACY_LIST_FAIL, PRIVACY_LIST_REQUEST, PRIVACY_LIST_SUCCESS, TC_LIST_FAIL, TC_LIST_REQUEST, TC_LIST_SUCCESS } from "../Constants/ImpfileConstants";




export const PrivacyReducer = (state={loading:true}, action)=>{
    switch(action.type){
        case PRIVACY_LIST_REQUEST:
            return{
                loading:true,
            }
        case PRIVACY_LIST_SUCCESS:
            return{
                loading:false,
                privacy:action.payload
            }
        case PRIVACY_LIST_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const termsConditionReducer = (state={loading:true}, action)=>{
    switch(action.type){
        case TC_LIST_REQUEST:
            return{
                loading:true,
            }
        case TC_LIST_SUCCESS:
            return{
                loading:false,
                tc:action.payload
            }
        case TC_LIST_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}
export const FAQReducer = (state={loading:true}, action)=>{
    switch(action.type){
        case FAQ_LIST_REQUEST:
            return{
                loading:true,
            }
        case FAQ_LIST_SUCCESS:
            return{
                loading:false,
                faq:action.payload
            }
        case FAQ_LIST_FAIL:
            return {
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}