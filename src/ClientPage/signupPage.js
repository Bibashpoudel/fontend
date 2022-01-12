import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Signin, Signup } from '../Action/UserAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import regimg from '../registerclient.png'
import { registerSendOtp, registerVerifyOtp } from '../Action/OtpAction';
import swal from 'sweetalert';

function SignupPage(props){



    const[name, SetName] =useState();
    const [FirstName, SetFirstName] = useState();
    const [LastName, SetLastName] = useState();
    const [email, SetEmail] =useState();
    const [phone, SetPhone] = useState();
    const [password, setPassword] = useState();
    const customer_type ="Customer"
    const [otp, SetOtp] = useState();
    const [OtpState, setOtpState] = useState(false);

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/';

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error} =userRegister;
    const regOtpSend = useSelector(state => state.regOtpsend);
    const {loading:otploading, error:otpError} = regOtpSend;

    const regOtpVerify = useSelector(state => regOtpVerify);
    const {loading:VOloading, code, error:VerifyError} = regOtpVerify;
    const dispatch = useDispatch();
    const OtpVerify =(e)=>{
        e.preventDefault();
        
        dispatch(registerSendOtp(phone))
        if(!otploading){
            setOtpState(true)
        }
       
    }
    const SignUphandaler = (e)=>{
        e.preventDefault()
        dispatch(registerVerifyOtp(otp));

       if(code){
        swal("Verify", "OTP verify Successfully", "success")
        dispatch(Signup(`${FirstName} ${LastName}`, email, phone, customer_type, password));
       }
    }
    const changeState = (e)=>{
        e.preventDefault()
        setOtpState(false)
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
            
        }

    }, [props.history,redirect,  userInfo]);


    return(
        <div className="main">
            <div className="col-1">
                <img className="large" src={regimg} alt="register"></img>
            </div>
            <div className="form col-2">

           
                    {loading &&<LoadingBox></LoadingBox>}
                      
                         {   error &&<MessageBox variant="danger">{error}</MessageBox>}
                        
                    
          

              <div>
              <form onSubmit={OtpVerify} className={OtpState ? 'hide_otp':'show_otp'}>
                    <div>
                        <h2>Welcome !</h2>
                    </div>
                    
                    <div className=" fields">
                        <div>
                            <label>First Name <span style={{color:'red', fontSize:'1rem'}}>  *</span></label>
                        </div>
                       
                        <div>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="First Name"
                                onChange={(e) => SetFirstName(e.target.value)}
                                required='true'
                            ></input>
                        </div>
                      
                    </div>
                    <div className=" fields">
                    <div>
                            <label>Last Name<span style={{color:'red',fontSize:'1rem'}}>  *</span></label>
                            
                        </div>
                       
                        <div>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="First Name"
                                onChange={(e) => SetLastName(e.target.value)}
                                required='true'
                                
                            ></input>
                        </div>
                    </div>
                    <div className=" fields">
                        <div>
                            <label>Email<span style={{color:'red',fontSize:'1rem'}}>  *</span></label>
                        </div>
                       <div>
                        <input 
                                type="text" 
                                id="email" 
                                placeholder="Email"
                                onChange={(e) => SetEmail(e.target.value)}
                                required='true'
                            ></input>
                       </div>
                        
                    </div>
                    <div className="fields">
                        <div>
                            <label>Phone number<span style={{color:'red',fontSize:'1rem'}}>  *</span></label>
                        </div>
                      <div>
                      <input 
                            type="text" 
                            id="phone" 
                            placeholder="Phone"
                            onChange={(e)=>SetPhone(e.target.value)}
                            required='true'
                        ></input>
                      </div>
                        
                    </div>
                    
                    <div className=" fields">
                       <div>
                           <label>Password<span style={{color:'red',fontSize:'1rem'}}>  *</span></label>
                       </div>
                        <div>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password"
                                onChange={(e)=>setPassword(e.target.value)}
                                required='true'
                            ></input>
                        </div>
                    </div>
                    <div>
                        <button type="submit"  className="block primary">Sign Up</button>
                    </div>
                    <div>
                        <span>
                            Already Have account? { ' '}
                            <Link to={`/signin?redirect=${redirect}`} style={{ color:"blue"}}>
                                Sign In
                            </Link> 
                        </span>
                    </div>
                    
                </form>
               
                <form className={OtpState ? 'show_otp': "hide_otp"} >
                    <h2>Enter OTP</h2>
                    <input type="text" placeholder='Enter Otp' onChange={(e) => SetOtp(e.target.value)}></input>
                    <div >
                        <button onClick={changeState}  style={{backgroundColor:"grey",fontSize:'2rem',marginRight:'.5rem',color:'white'}}   ><i className='fa fa-arrow-left' style={{fontSize:'2rem',color:'white'}}> </i>{' '} Back</button>
                        <button className='primary' onClick={SignUphandaler}>Verify</button>
                    </div>
                    
                </form>
               
               
               
              </div>
                <div className="social_items" style={{display:'none'}}>
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
export default SignupPage;