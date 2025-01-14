import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


import { GSTPANAdd, VendorCityList,    VendorSignup,    VendorTypeList } from '../Action/vendorAction.js';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import venimg  from '../images/vreg.jpg'
import Load from '../images/load.gif'

import swal from 'sweetalert'
import { registerSendOtp } from '../Action/OtpAction.js';
import { Signin, signout } from '../Action/UserAction.js';

window.Swal = swal;

function SignupPageVendor(props){
    const[name, SetName] =useState();
    const [email, SetEmail] =useState();
    const [phone, SetPhone] = useState();
    const [password, setPassword] = useState();
    const [city , setCity] = useState();
    const [vendor_type, setType] = useState();
    const [otp, setOtp] = useState();
    const [pan, setPan] = useState();
    const [gst, setGst] = useState();


    const customer_type ="Vendor"

    // const redirect = props.location.search ? props.location.search.split('=')[1]: '/'

    // const userRegister = useSelector(state => state.userRegister);
    // const {  userInfo, } =userRegister;


    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;

    const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;

    const vendorRegister = useSelector(state => state.vendorRegister);
    const{error:reg_error, VendorInfo, loading:reg_loading} = vendorRegister
    const userSignin = useSelector(state => state.userSignin);
    const{ userInfo} = userSignin;
    const addGstPan = useSelector(state => state.addGstPan);
    const {gstpan, loading:addLoading, error:adderror} = addGstPan
    const otpSendReg = useSelector(state => state.otpSendReg);
    const {loading:otploading, success,error:otpsend_error} = otpSendReg;

    const regOtpVerify = useSelector(state => state.regOtpVerify);
    const { error:verifyError, loading, error} = regOtpVerify;


    const [form, setform] = useState(true);
    const [otpform, setOtpform] = useState(false);
    const [panform, setPanform] = useState(false);
    const [show, setShow] = useState(true);
    const [passwordError, setPasswordError] = useState(" ");



    const dispatch = useDispatch();
    const SignUphandaler =(e)=>{
        e.preventDefault();
        
            dispatch(registerSendOtp(phone))

            
        
    }
    const otphandaler = (e) =>{
        e.preventDefault();
    
            dispatch(VendorSignup(name, email, phone, customer_type, vendor_type, city,  password,otp));
            // console.log(VendorInfo)
            //  setTimeout((e) => {
            //     dispatch(Signin(email, password))
            //     console.log("run after 3 second")
            // }, 5000);
            // setOtpform(false);
            // setPanform(true)
        
        
    }
    const panhandaler = (e) =>{

        e.preventDefault()
        dispatch(GSTPANAdd(gst,  pan))
    
    }
    const backButton = (e) =>{
        e.preventDefault()
        setform(true)
        setOtpform(false)
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
    useEffect(() => {
        
       console.log(citys, types)
        if(success){
            setform(false);
            setOtpform(true)
        }
        
        if(!types){
            dispatch(VendorTypeList()) 
        }
        if (!citys) {
            dispatch(VendorCityList())
        }
        
        if(VendorInfo && !userInfo){
            dispatch(Signin(phone,password))
        
        }
        if(userInfo){
            setOtpform(false)
            setPanform(true)
        }
        if(gstpan){
        
        swal("Account Approval is in process!!!", "You will be notified once our team verify your details.", "success");
        dispatch(signout())
        props.history.push('/signin')
        window.location.reload();
        
        }

    }, [dispatch, VendorInfo, gstpan, success, types, citys, userInfo, phone, password, props.history]);

    

    return(
        <div>
            {
                loading_types  ? <LoadingBox></LoadingBox>
                :
                error_types? <MessageBox variant="danger">{error_types || error_types.message}</MessageBox>
                :
                loading_city? <LoadingBox></LoadingBox>
                :
                error_city? <MessageBox variant="danger">{error_city || error_city.message}</MessageBox>
                :
                verifyError ? <MessageBox>{verifyError || verifyError.message }</MessageBox>
                :
                <div className="main  ">
                    <div className="col-1">
                        <img className="large" src={venimg} alt="register"></img>
                    </div>
                    <div className="form col-2">
                       
                    

                        {form ? 
                            <form onSubmit={SignUphandaler} style={{ marginLeft: '2rem' }}>                       
                                <div>
                                    <div>
                                        <h2>
                                            “Business with Sevenoath"<br></br>
                                            Sign Up to access your Dashboard
                                        </h2>
                                    </div>
                                    {otploading && <span><img className='load-small' src={Load} alt='load'></img></span>}
                                    {otpsend_error&& <MessageBox varient={'danger'}>{otpsend_error}</MessageBox>}
                                    <div className="fields mb-4">
                                        <label>Company Name <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        <input 
                                            style={{width:'65%'}}                            
                                            type="text" 
                                            id="brand_name" 
                                            placeholder="Name"
                                            onChange={e => SetName(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="fields mb-4">
                                        <label>Select City <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        {
                                            loading_city? <LoadingBox></LoadingBox>
                                            :
                                            error_city? <MessageBox variant="danger">{error_city || error_city.message}</MessageBox>
                                            :
                                            <select  onChange={(e)=> setCity(e.target.value)} required style={{width:'65%'}}> 
                                                <option  value="">Select City</option>
                                                {
                                                    citys.map((c) =>(
                                                        <option key={c.id} id={c.id} value={c.id}  >
                                                            {c.city}   
                                                            </option>
                                                    ))
                                                }
                                            </select>
                                        }
                                    </div>
                                    <div className=" fields mb-4">
                                        <label>Select Vendor Type <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        {
                                            loading_types? <LoadingBox></LoadingBox>
                                            :
                                            error_types? <MessageBox variant="danger">{error_types || error_types.message}</MessageBox>
                                            :
                                            <select  onChange={e => setType(e.target.value)} required={true} style={{width:'65%'}}>
                                            <option value ="" >Select Type</option>
                                            {
                                                types.map((t) =>(
                                                    <option key={t.id} id={t.id} value={t.id}>
                                                    {t.type}
                                                    </option>
                                                ))
                                            }
                                            </select>
                                        }
                                    </div>
                                    <div className="fields mb-4">
                                        <label>Email <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        <input 
                                            style={{width:'65%'}}
                                            type="text" 
                                            id="email" 
                                            placeholder="Email"
                                            onChange={e => SetEmail(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className=" fields mb-4">
                                        <label> Phone <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        <input 
                                            style={{width:'65%'}}
                                            type="text" 
                                            id="phone" 
                                            placeholder="Phone"
                                            onChange={e => SetPhone(e.target.value)} 
                                        ></input>
                                    </div>
                                    <div className="fields mb-4">
                                        <label>Password <span style={{color:'red', fontSize:'1rem'}}> *</span></label>   
                                        <input 
                                            style={{width:'65%'}}
                                            type="password" 
                                            id="typepass" 
                                            placeholder="Password"
                                            onChange={passwordCheck}    
                                        ></input>
                                        <div className="show-eye-icon-vendor">
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
                                    <div className="btn_center">
                                        <button type="submit" className="block primary">Continue</button>
                                    </div>
                                    <div>
                                        <span>
                                            Already Have account? { ' '}
                                            <Link to={`/dashboard`}   style={{ color:"blue"}}>
                                                Sign In
                                            </Link> 
                                        </span>
                                    </div>
                                </div>
                                <div className="btn_center">
                                    <button onClick={()=>props.history.push('/signin')} className="block primary">Signup as User</button>
                                </div>
                            </form>
                            : <span> </span>
                        }
                        {otpform ?
                            <div className="form_hide">
                                <form className="form" >
                                    {reg_error ? <MessageBox>{reg_error || reg_error.message}</MessageBox>: ''}
                                    {error && <MessageBox>{error || error.message}</MessageBox>}
                                    {reg_loading && <img className="img load-small" src={Load} alt="loading"></img>}
                                    <div>
                                        <h2> Enter Your Otp <span style={{color:'red', fontSize:'1rem'}}> *</span></h2>            
                                    </div>
                                    <div>
                                        <input 
                                            type="text" 
                                            id="otp" 
                                            placeholder="otp"
                                            onChange={e =>setOtp(e.target.value)}   
                                            required={true}
                                        ></input>
                                    </div>
                                    <div className='code-row'>{reg_error && <span className='resend-Code' onClick={SignUphandaler}> Resend Code?</span>}
                                            {'  '} {otploading && <img className="img load-small" src={Load} alt="loading"></img>}
                                        </div>
                                    <div className="btn_center">
                                        <button onClick={backButton}  style={{backgroundColor:"grey",fontSize:'2rem',marginRight:'.5rem',color:'white'}}   ><i className='fa fa-arrow-left' style={{fontSize:'2rem',color:'white'}}> </i>{' '} Back</button>
                                        <button type="submit" onClick={otphandaler} className="block secondary">verify</button>
                                    </div>
                                </form>
                            </div>
                            :<span></span>
                        }
                        {panform ?
                            <div className="form_hide">
                                <form className="form" onSubmit={panhandaler}>
                                    {addLoading && <img className="img load-small" src={Load} alt="loading"></img> }
                                    {adderror && <MessageBox>{adderror || adderror.message}</MessageBox>}
                                    <div>
                                        <h2>
                                            Enter Pan And GST Number<br></br>
                                            To approve as a Vendor
                                        </h2>
                                    </div>
                                    <div className="fields mb-4">
                                        <label>Pan Number <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        <input 
                                            type="text" 
                                            id="pan" 
                                            placeholder="pan Number"
                                            onChange={e =>setPan(e.target.value)}
                                            required={true}
                                        ></input>
                                    </div>
                                    <div className="fields mb-4">
                                        <label>Gst Number <span style={{color:'red', fontSize:'1rem'}}> *</span></label>
                                        <input 
                                            type="text" 
                                            id="gst" 
                                            placeholder="GSt Number"
                                            onChange={e =>setGst(e.target.value)}
                                            required={true}
                                        ></input>
                                    </div>
                                    <div className="btn_center">
                                        <button type="submit" className="block secondary">Save</button>
                                    </div>
                                </form>
                            </div>
                            :<span></span>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
export default SignupPageVendor;