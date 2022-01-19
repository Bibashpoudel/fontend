import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signin, UserProfileViewAction } from '../Action/UserAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import loginimg from '../login.png'
import '../sass/signin.scss'


function SignInPage(props){

    const [phone ,SetPhone] = useState();
    const [password , setPassword] =useState()


    const userSignin = useSelector(state => state.userSignin);
    const {  loading, userInfo,error} = userSignin;
    // const ProfileUser = useSelector(state => state.useSelector)
    // const {UserProfile} = ProfileUser;


    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split('=')[1]: '/';
    const Signinhandaler = (e) =>{
        e.preventDefault();
        dispatch(Signin(phone, password));
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
            dispatch(UserProfileViewAction())
           
            
        }

    }, [dispatch, redirect, props.history, userInfo]);

    
    return(
        <div className="main ">
            <div className="col-1_signin">
                <div className="cli_log">
                    <h3>Book your wedding venue now !!</h3>
                </div>
                <img className="cus_log" src={loginimg} alt="LogIn"></img>
                
            </div>
            <div className="form col-2">

                <div>
                <form onSubmit={Signinhandaler}>
                    <div>
                        <h2>Log In  !</h2>
                    </div>
                    {
                        loading ? <LoadingBox></LoadingBox>
                        :
                        error ? <MessageBox variant="danger">{error}</MessageBox>
                        : <span></span>
                    }
                    
                    
                    
                    <div className="fields">
                    <label className='labels'>Phone</label>
                        <input 
                            type="text" 
                            id="phone" 
                          
                            onChange ={(e) => SetPhone(e.target.value)}
                            
                        ></input>
                             <span></span>
                    </div>
                    
                    <div className="fields">
                    <label className='p_labels'>Password</label>
                            <input 
                                type="password" 
                                id="password" 
                              
                                onChange ={(e) => setPassword(e.target.value)}
                                
                            ></input>
                             <span></span>
                       
                           
                       
                        <div className='forget'>
                           <Link to='/forget'> Forget Password?</Link>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="block primary">Sign In</button>
                    </div>
                    <div className='user_Create'>
                        <span>
                           New User? { ' '} 
                            <Link to={`/register?redirect=${redirect}`} style={{ color:"blue"}}>
                            Create A account
                            </Link> 
                        </span>
                    </div>
                    
                </form>
                </div>

            
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