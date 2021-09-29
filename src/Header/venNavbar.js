import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Action/UserAction';



function  VenNavBar(){

    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo} = userSignin;
    const ProfileUser = useSelector((state) => state.ProfileUser);
    const {UserProfile} = ProfileUser;


    const dispatch = useDispatch();
    const Signouthandler = (e) =>{
        e.preventDefault();
        window.alert("clicked")
        dispatch(signout());
    }

    
    return(
        <div className="header">
        <div className="brand">
            dashboard
        </div>
        <div className="nav-left-menu">
            
            
           {
             userInfo ?(
              <div>
              <Link to="/profile">{UserProfile.name}</Link>
              </div>
              
             ):
             <div>
            <Link to="/register">Sign Up</Link>
            </div>
           }
            {
             userInfo ?(
              <div onClick={Signouthandler}>
              <Link to="/" >signout</Link>
              </div>
              
             ):
             <div>
            <Link to="/signin">Sign In</Link>
            </div>
           }
           

        </div>
    </div>
    )
}

export default VenNavBar;