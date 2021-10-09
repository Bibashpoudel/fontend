import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { UserProfileReducer, userRegisterReducer, userSigninReducer } from './Reducer/userReducer';
import { cartReducer } from './Reducer/cartReducer';
import { AddvenueReducer, detailsVenueReducer, updateVenueReducer, VenueDetailsListReducer, VenueListReducer, VenuetypeListReducer } from './Reducer/venueReducer';
import { GSTPANAddReducer, VendorCityListReducer, VendorRegisterReducer, VendorTypeListReducer, VendorVenueListReducer } from './Reducer/vendorReducer';
import { detailsServiceReducer, ServiceAddReducer, ServiceListReducer, ServiceupdateReducer, VenueServiceListReducer } from './Reducer/serviceReducer';


const initialState = {
    // userRegister:{
    //     userInfo: localStorage.getItem('userInfo')
    //     ? JSON.parse(localStorage.getItem('userInfo'))
    //     : null,
    // }
    // ,
    userSignin:{
        userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
        
    },
    cart:{
        cartItems:localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
    },
    userProfileView:{
        profile: localStorage.getItem('profile')
        ? JSON.parse(localStorage.getItem('profile'))
        : null
    }


   
};
const reducer = combineReducers({
    
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    cart:cartReducer,
    Listvenue:VenueListReducer,
    DetailsVenue:VenueDetailsListReducer,
    servicelist:ServiceListReducer,
    userProfileView:UserProfileReducer,
    


    // vendor Reducer
    VendorCitys:VendorCityListReducer,
    VendorTypes:VendorTypeListReducer,
    vendorRegister:VendorRegisterReducer,
    addGstPan:GSTPANAddReducer,
    venueTypeList:VenuetypeListReducer,
    addVenue:AddvenueReducer,
    VVenues:VendorVenueListReducer,
    vvDetailsList:detailsVenueReducer,
    venueUpdate:updateVenueReducer,
    addService:ServiceAddReducer,
    updateService:ServiceupdateReducer,
    venueService:VenueServiceListReducer,
    vsDetails:detailsServiceReducer,


});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;