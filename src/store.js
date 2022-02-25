import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { userDetailsReducer, UserProfileReducer, userRegisterReducer, userSigninReducer } from './Reducer/userReducer';
import { cartReducer } from './Reducer/cartReducer';
import { AddvenueRatingReducer, AddvenueReducer, AddvenueReviewReducer, CityVenueListReducer, detailsVenueReducer, TrendingVenueListReducer, updateVenueReducer, venueDeleteReducer, VenueDetailsListReducer, VenueListReducer, VenueReviewListReducer, VenuetypeListReducer, VenueTypeParticularListReducer } from './Reducer/venueReducer';
import { GSTPANAddReducer, VendorCityListReducer, VendorRegisterReducer, VendorTypeListReducer, VendorVenueListReducer } from './Reducer/vendorReducer';
import { CityServiceListReducer, detailsServiceReducer, detailsServiceTypeReducer, ServiceAddReducer, serviceDeleteReducer, ServiceReducer, ServiceReviewListReducer, ServiceTypeReducer, ServiceupdateReducer, TrendingServiceReducer, VendordetailsServiceReducer, VenueServiceListReducer } from './Reducer/serviceReducer';
import { addimageReducer, ImageListReducer, venueImageListReducer } from './Reducer/imageReducer';
import { PayOrderReducer, PayReducer } from './Reducer/payReducer';
import { CheckAvailableReducer, OrderReducer, UserOrderReducer, VendorOrderListReducer } from './Reducer/orderReducer';
import { PasswordForgetOtpsendReducer, PasswordForgetOtpverifyReducer, RegisterOtpsendReducer, RegisterOtpverifyReducer } from './Reducer/otpReducer';
import { FAQReducer, PrivacyReducer, termsConditionReducer } from './Reducer/impFIlesReducer';
import { ContactusReducer } from './Reducer/contactusReducer';


const initialState = {
   
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
    // cartS:{
    //     cartItems:localStorage.getItem('cartItems')
    //     ? JSON.parse(localStorage.getItem('cartItems'))
    //     : []
    // },
    userProfileView:{
        profile: localStorage.getItem('profile')
        ? JSON.parse(localStorage.getItem('profile'))
        : null
    },
    // vendorDetails: {
    //     userDetails: localStorage.getItem('VendorDetails')
    //         ? JSON.parse(localStorage.getItem('VendorDetails'))
    //         :
    //         null
    // }
};
const reducer = combineReducers({
    
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    cart:cartReducer,
    // cartS:cartSReducer,
    Listvenue: VenueListReducer,
    ListTrendingVenue:TrendingVenueListReducer,
    CityVenue:CityVenueListReducer,
    DetailsVenue:VenueDetailsListReducer,
    typeService:ServiceTypeReducer,
    particularSType:detailsServiceTypeReducer,
    servicelist: ServiceReducer, 
    CityService:CityServiceListReducer,
    trendingservicelist: TrendingServiceReducer,
    imgList:ImageListReducer,   
    typeList:VenueTypeParticularListReducer,
    userProfileView:UserProfileReducer,
    UserOrders:UserOrderReducer,
    ReviewAdd:AddvenueReviewReducer,
    ReviewDisplay: VenueReviewListReducer,
    RatingAdd:AddvenueRatingReducer,
    serviceReviewView:ServiceReviewListReducer,
    Razorpay: PayReducer,
    CheckStatus:CheckAvailableReducer,
    order:OrderReducer,
    otpSendReg:RegisterOtpsendReducer,
    regOtpVerify:RegisterOtpverifyReducer,
    optsendForget:PasswordForgetOtpsendReducer,
    otpverifyForget:PasswordForgetOtpverifyReducer,
    messageSend:ContactusReducer,
    privacyList: PrivacyReducer,
    tcList: termsConditionReducer,
    faqList:FAQReducer,
    


    // vendor Reducer
    vendorDetails:userDetailsReducer,
    VendorCitys:VendorCityListReducer,
    VendorTypes:VendorTypeListReducer,
    vendorRegister:VendorRegisterReducer,
    addGstPan:GSTPANAddReducer,
    venueTypeList:VenuetypeListReducer,
    addVenue:AddvenueReducer,
    VVenues:VendorVenueListReducer,
    vsDetails:VendordetailsServiceReducer,

    serviceDelete:serviceDeleteReducer,

    vvDetailsList:detailsVenueReducer,
    venueUpdate:updateVenueReducer,
    addService:ServiceAddReducer,
    updateService:ServiceupdateReducer,
    venueService:VenueServiceListReducer,
    serviceDetails:detailsServiceReducer,
    imageAdd:addimageReducer,
    deleteVenue:venueDeleteReducer,
    venueImage:venueImageListReducer,
    payOrder: PayOrderReducer,
    orderList:VendorOrderListReducer,


});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;