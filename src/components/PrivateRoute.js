import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router';

export default function PrivateRoute({component:Component, ...rest}) {
    const userSigin = useSelector(state => userSigin)
    const {userInfo} = userSigin;
    return (
        <Route {...rest} render={(props) => userInfo?( <Component {...props}></Component>):
            <Redirect to='/signin'></Redirect>
        }>

        </Route>
    )
}
