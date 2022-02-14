import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { PasswordForgetSendOtp, PasswordforgetVerifyOtp } from '../Action/OtpAction';
import Load from '../images/load.gif'
import MessageBox from '../components/MessageBox';
import './forgetpassword.scss'
import { Link } from 'react-router-dom';
import { USER_OTP_SEND_RESET, USER_PASSWORD_FORGET_OTP_SEND_RESET } from '../Constants/otpConstants';

export default function ForgetPassword(props) {


    const [otp, SetOtp] = useState();
    const [OtpState, setOtpState] = useState(false); 
    const [phone, SetPhone] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(true);
    const [passwordError, setPasswordError] = useState(" ");

    const optsendForget = useSelector(state => state.optsendForget);
    const {loading:sendloading,error:senderror,success} = optsendForget;
    const otpverifyForget = useSelector(state => state.otpverifyForget);
    const {loading:verifyloading,error:verifyerror,code} = otpverifyForget;


    
    const dispatch = useDispatch();

    useEffect(() => {
        if(success){
            setOtpState(true);
        }
        if(code){
            swal("password Change Successfully", "Log In to access account", "success")
            setTimeout(()=>{
                props.history.push('/signin');
            },3000)
        }
        
    }, [code, props.history, success])

    const SendOtp = (e) =>{
        e.preventDefault();
        dispatch(PasswordForgetSendOtp(phone));
    }
    const ChangePassword = (e)=>{
        e.preventDefault();
        dispatch(PasswordforgetVerifyOtp(phone, otp, password));
    }
    const changeState =(e)=>{
        e.preventDefault();
        setOtpState(false);
        dispatch({
            type:USER_PASSWORD_FORGET_OTP_SEND_RESET
        })
    }
    const showPassword = (e) => {
        e.preventDefault()
        setShow(false)
        var temp = document.getElementById("typepass");
        
        if (temp.type === "password") {
            temp.type = "text";
        }
        else {
            temp.type = "password";
        }
    }
    const hidePassword = (e) => {
        e.preventDefault()
        setShow(true)
        var temp = document.getElementById("typepass");
        if (temp.type === "password") {
            temp.type = "text";
        }
        else {
            temp.type = "password";
        }
    }
    const passwordCheck = (e) => {
        e.preventDefault()
        var messg = document.getElementById("passworderrormessage");
        const npassword = e.target.value;
        if (npassword.length === 0) {
            setPasswordError("Password can't be empty");
            messg.style.color = 'red'    
        }
        else if (npassword.length >= 8) {
            setPassword(npassword)
            setPasswordError("Password Okay");
            messg.style.color ='green'  
        }
        else if(npassword.length < 8) {
            setPasswordError("Password length must be at least 8 characters");
            messg.style.color= 'red'
        }
    }
    return (
        <div className='forgetpassword-main' style={{marginTop:'15rem'}}>
           
            {verifyloading && <img className="img small" src={Load} alt="loading"></img>}
            <span>
                <form onSubmit={SendOtp} className={OtpState ? 'hide_otp':'show_otp'}>
                    <h2>Forget Password</h2>
                    <div>
                        {senderror && <MessageBox varient={'danger'}>{senderror}</MessageBox>}
                    </div>
                    <div>
                    <div>
                            <label htmlFor='Phone' >Phone</label>
                    </div>
                        <div style={{marginBottom:'1rem'}}>
                            <input
                                type="text"
                                placeholder="Enter your number"
                                onChange={(e) => SetPhone(e.target.value)}
                                required={true}
                            ></input>
                            {sendloading && <img className="img small" src={Load} alt="loading"></img>}
                        </div>
                        
                        <div>
                            <Link to='/signin'>
                            <button  className="back"   >
                                <i className='fa fa-arrow-left' style={{  color: 'white' }}> </i>
                                {' '} Back
                            </button>
                            </Link>
                            <button className='primary'>Submit</button>
                        </div>
                        
                    </div>
                </form>
           </span>
            <span>
                <form className={OtpState ? 'show_otp': "hide_otp"} >
                    <div>
                        {verifyerror && <MessageBox varient={'danger'}>{verifyerror}</MessageBox>}
                    </div>
                    <h2>Enter OTP and Password</h2>
                    
                   <div>
                       <div>
                        <label>OTP</label>
                       </div>
                        <div>
                        <input
                            style={{width:'100%'}}
                            type="text"
                            placeholder='Enter Otp'
                            onChange={(e) => SetOtp(e.target.value)}
                            required={true}
                        ></input>
                        </div>
                   </div>
                   <div>
                      <div> <label>Password</label></div>
                       <div>
                            <input
                                style={{width:'100%'}}
                                type="password"
                                id="typepass"
                                placeholder='Enter Password'
                                onChange={passwordCheck}
                                required={true}
                            >
                            </input>
                        </div>
                        <div className="show-eye-icon-forget">
                            {
                                show ?
                                    <ion-icon name="eye" onClick={showPassword}></ion-icon>
                                    :
                                    <ion-icon name="eye-off"  onClick={hidePassword}></ion-icon>
                            }
                            
                        </div>
                        <div id="passworderrormessage">
                            {passwordError}
                        </div>
                    </div>
                    <div className='code-row'>{verifyerror && <span className='resend-Code' onClick={SendOtp}> Resend Code?</span>}
                    {'  '} {sendloading && <img className="img small" src={Load} alt="loading"></img>}
                    </div>
                    <div>
                        <button onClick={changeState} className="back"   >
                            <i className='fa fa-arrow-left' style={{  color: 'white' }}> </i>
                            {' '} Back
                        </button>
                        <button className='primary' onClick={ChangePassword}>Change Password</button>
                    </div> 
                </form>
            </span>
            
        </div>
    )
}
