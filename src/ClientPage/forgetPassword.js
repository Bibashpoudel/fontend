import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { PasswordForgetSendOtp, PasswordforgetVerifyOtp } from '../Action/OtpAction';
import Load from '../images/load.gif'
import MessageBox from '../components/MessageBox';


export default function ForgetPassword(props) {


    const [otp, SetOtp] = useState();
    const [OtpState, setOtpState] = useState(false); 
    const [phone, SetPhone] = useState();
    const [password, setPassword] = useState();


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
                props.history.push('/signin')
            },3000)
        }
        
    }, [code, props.history, success])

    const SendOtp = (e) =>{
        e.preventDefault()
        dispatch(PasswordForgetSendOtp(phone))
    }
    const ChangePassword = (e)=>{
        e.preventDefault()
        dispatch(PasswordforgetVerifyOtp(phone, otp, password))
    }
    const changeState =(e)=>{
        e.preventDefault()
        setOtpState(false)
    }
    return (
        <div className='form' style={{marginTop:'15rem'}}>
           
            {verifyloading && <img className="img small" src={Load} alt="loading"></img>}
            <form onSubmit={SendOtp} className={OtpState ? 'hide_otp':'show_otp'}>
            <h2>Forget Password</h2>
                    <div>
                        {senderror && <MessageBox>{senderror}</MessageBox>}
                    </div>
                <div>
                   <div>
                        <label htmlFor='Phone' >Phone</label>
                   </div>
                    <div>
                        <input type="text" placeholder="Enter your number" onChange={(e) => SetPhone(e.target.value)}></input>
                        {sendloading && <img className="img small" src={Load} alt="loading"></img>}
                    </div>
                    
                    <div>
                        <button className='primary'>Submit</button>
                    </div>
                    
                </div>
            </form>
            <form className={OtpState ? 'show_otp': "hide_otp"} >
                    <div>
                        {verifyerror && <MessageBox>{verifyerror}</MessageBox>}
                    </div>
                    <h2>Enter OTP and Password</h2>
                    
                   <div>
                       <div>
                        <lable>OTP</lable>
                       </div>
                        <div>
                            <input type="text" placeholder='Enter Otp' onChange={(e) => SetOtp(e.target.value)}></input>
                        </div>
                   </div>
                   <div>
                      <div> <label>Password</label></div>
                       <div>
                        <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}>
                            
                        </input>
                       </div>
                   </div>
                    <div className='code-row'>{verifyerror && <span className='resend-Code' onClick={SendOtp}> Resend Code?</span>}
                    {'  '} {sendloading && <img className="img small" src={Load} alt="loading"></img>}
                    </div>
                    <div >
                        <button onClick={changeState}  style={{backgroundColor:"grey",fontSize:'2rem',marginRight:'.5rem',color:'white'}}   ><i className='fa fa-arrow-left' style={{fontSize:'2rem',color:'white'}}> </i>{' '} Back</button>
                        <button className='primary' onClick={ChangePassword}>Change Password</button>
                    </div>
                    
                </form>
            
        </div>
    )
}
