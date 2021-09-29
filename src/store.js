
import thunk from 'redux-thunk';

import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { UserProfileReducer, userRegisterReducer, userSigninReducer } from './Reducer/userReducer';
import { cartReducer } from './Reducer/cartReducer';
import { VenueDetailsListReducer, VenueListReducer, VenueServiceListReducer } from './Reducer/venueReducer';


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
    ProfileUser:{
        UserProfile: localStorage.getItem('UserProfile')
        ? JSON.parse(localStorage.getItem('UserProfile'))
        : null,
    }


   
};
const reducer = combineReducers({
    
    userSignin:userSigninReducer,
    userRegister:userRegisterReducer,
    cart:cartReducer,
    Listvenue:VenueListReducer,
    DetailsVenue:VenueDetailsListReducer,
    ServiceVenue:VenueServiceListReducer,
    ProfileUser:UserProfileReducer,
    


});



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;