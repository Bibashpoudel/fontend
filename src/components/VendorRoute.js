import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export default function VendorRoute({component:Component, ...rest}) {

    const userSignin = useSelector(state => state.userSignin)
    const {userInfo} = userSignin;
    const userProfileView = useSelector(state => state.userProfileView)
    const {profile} = userProfileView;
    return (
        <Route {...rest} render={(props) =>userInfo && profile && profile.user_type === 'Vendor'?( <Component {...props}></Component>):
            <Redirect to='/signin'></Redirect>
        }>

        </Route>
    )
}
