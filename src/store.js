import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { UserProfileReducer, userRegisterReducer, userSigninReducer } from './Reducer/userReducer';
import { cartReducer } from './Reducer/cartReducer';
import { AddvenueReducer, AddvenueReviewReducer, CityVenueListReducer, detailsVenueReducer, updateVenueReducer, venueDeleteReducer, VenueDetailsListReducer, VenueListReducer, VenueReviewListReducer, VenuetypeListReducer } from './Reducer/venueReducer';
import { GSTPANAddReducer, VendorCityListReducer, VendorRegisterReducer, VendorTypeListReducer, VendorVenueListReducer } from './Reducer/vendorReducer';
import { detailsServiceReducer, ServiceAddReducer, ServiceListReducer, ServiceupdateReducer, VenueServiceListReducer } from './Reducer/serviceReducer';
import { addimageReducer, venueImageListReducer } from './Reducer/imageReducer';
import { PayOrderReducer, PayReducer } from './Reducer/payReducer';


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
    CityVenue:CityVenueListReducer,
    DetailsVenue:VenueDetailsListReducer,
    servicelist:ServiceListReducer,
    userProfileView:UserProfileReducer,
    ReviewAdd:AddvenueReviewReducer,
    ReviewDisplay:VenueReviewListReducer,
    Razorpay:PayReducer,
    


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
    imageAdd:addimageReducer,
    deleteVenue:venueDeleteReducer,
    venueImage:venueImageListReducer,
    payOrder:PayOrderReducer,


});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;