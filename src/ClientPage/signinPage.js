import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signin, UserProfileView } from '../Action/UserAction';



function SignInPage(props){

    const [phone ,SetPhone] = useState();
    const [password , setPassword] =useState()


    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo, } = userSignin;
    // const ProfileUser = useSelector(state => state.useSelector)
    // const {UserProfile} = ProfileUser;


    const dispatch = useDispatch();
    //const redirect = props.location.search ? props.location.search.split('=')[1]: '/'
    const Signinhandaler = (e) =>{
        e.preventDefault();
        dispatch(Signin(phone, password));
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push('/');
            dispatch(UserProfileView())
           
            
        }

    }, [dispatch, props.history, userInfo]);

    
    return(
        <div className="main top_center ">
            <div className="col-1">
                <div className="cli_log">
                    <h3>Book your wedding venue now !!</h3>
                </div>
                <img className="cus_log" src="../images/customerlogin.png" alt="registerimg"></img>
                
            </div>
            <div className="form col-2">

                <form onSubmit={Signinhandaler}>
                    <div>
                        <h2>Log In  !</h2>
                    </div>
                    
                    
                    
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Email Or Phone"
                            onChange ={(e) => SetPhone(e.target.value)}
                            
                        ></input>
                    </div>
                    
                    <div className="">
                       
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            onChange ={(e) => setPassword(e.target.value)}
                            
                        ></input>
                    </div>
                    <div>
                        <button type="submit" className="block primary">Sign Up</button>
                    </div>
                    <div>
                        <span>
                           New Customer? { ' '} 
                            <Link  style={{ color:"blue"}}>
                            Create A account
                            </Link> 
                        </span>
                    </div>
                    
                </form>
                <div className="social_items">
                    <div>
                        or
                    </div>
                    <div>
                        <h2>Continue With</h2>
                    </div>
                    <div className="item facebook">
                        <i className="fa fa-facebook"></i>
                        {"    "}facebook
                    </div>
                    <div className="item google">
                        <i className="fa fa-google"></i>
                        {"    "}Google
                    </div>
                </div>
           
            </div>
            
        </div>
    )
}
export default SignInPage;