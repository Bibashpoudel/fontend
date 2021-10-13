import React, { useEffect, useState, } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signin, } from '../Action/UserAction.js';

import { GSTPANAdd, VendorCityList,    VendorSignup,    VendorTypeList } from '../Action/vendorAction.js';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import swal from 'sweetalert'

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
    const redirect = props.location.search ? props.location.search.split('=')[1]: '/'

    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;

    const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;

    const vendorRegister = useSelector(state => state.vendorRegister);
    const{loading:loading_user, error:error_user, VendorInfo} = vendorRegister
    const userSignin = useSelector(state => state.userSignin);
    const{ userInfo} = userSignin;
    const addGstPan = useSelector(state => state.addGstPan);
    const {gstpan} = addGstPan


    const [form, setform] = useState(true);
    const [otpform, setOtpform] = useState(false);
    const [panform, setPanform] = useState(false);

    const dispatch = useDispatch();
    const SignUphandaler =(e)=>{
        e.preventDefault();
        
      
            // const data = {Name:name, email:email, phone: phone, type: type, password:password, city :city}
            // localStorage.setItem("register", JSON.stringify(data))
            setform(false);
            setOtpform(true)
        
    }
    const otphandaler = (e) =>{
        e.preventDefault();
        if(otp ==='1234'){
            dispatch(VendorSignup(name, email, phone, customer_type, vendor_type, city,  password));
            console.log(VendorInfo)
             setTimeout((e) => {
                dispatch(Signin(email, password))
                console.log("run after 3 second")
            }, 3000);
        }
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
    useEffect(() =>{
        
       if(!VendorInfo ){
           
            dispatch(VendorCityList())
            dispatch(VendorTypeList())
       }
       
       
           
        if(userInfo && VendorInfo ){
            
            setOtpform(false)
            setPanform(true)
        }
        if(gstpan){
           swal("Account Approval in process!!!", "You will be notified soon checked your mail ", "success");
           window.alert('bibash')
        }
        
        
        

    }, [dispatch,VendorInfo,userInfo,gstpan]);

    

    return(
        <div>

{
            loading_city  ? <LoadingBox></LoadingBox>
        :
            error_city? <MessageBox variant="danger">{error_city}</MessageBox>
        :
        loading_city? <LoadingBox></LoadingBox>
        :
            error_city? <MessageBox variant="danger">{error_city}</MessageBox>
        :
       

        <div className="main top_center ">
            <div className="col-1">
                <img className="large" src="../images/vendorregister.jpg" alt="registerimg"></img>
            </div>
            <div className="form col-2">

                {form ? 
                <form onSubmit={SignUphandaler}>
                   <div>
                   <div>
                        <h2>
                            “Business with Sevenoath"<br></br>
                            Sign Up to access your Dashboard
                        </h2>
                        
                    </div>
                    
                    
                    <div className="">
                       
                        <input 
                            type="text" 
                            id="brand_name" 
                            placeholder="Name"
                            onChange={e => SetName(e.target.value)}
                            
                        ></input>
                    </div>
                    <div className="">
                    {
                            loading_city? <LoadingBox></LoadingBox>
                        :
                            error_city? <MessageBox variant="danger">{error_city}</MessageBox>
                        :
                        <select  onChange={(e)=> setCity(e.target.value)} required> 
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
                    <div className="">
                    {
                            loading_types? <LoadingBox></LoadingBox>
                        :
                            error_types? <MessageBox variant="danger">{error_types}</MessageBox>
                        :
                        <select  onChange={e => setType(e.target.value)} required>
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
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="email" 
                            placeholder="Email"
                            onChange={e => SetEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Phone"
                            onChange={e => SetPhone(e.target.value)}
                            
                        ></input>
                    </div>
                    
                    <div className="">
                       
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            onChange={e =>setPassword(e.target.value)}
                            
                        ></input>
                    </div>
                    <div className="btn_center">
                        <button type="submit" className="block primary">Continue</button>
                    </div>
                    <div>
                        <span>
                            Already Have account? { ' '}
                            <Link to={`/signin?redirect=${redirect}`}   style={{ color:"blue"}}>
                                Sign In
                            </Link> 
                        </span>
                    </div>
                    </div>
                    
                    <div className="btn_center">
                        <button type="submit" className="block primary">Sign in as Customer</button>
                    </div>
                    
                </form>

                : <span> </span>
}
            {otpform ?
                <div className="form_hide">
                   
                    
                    <form className="form" onSubmit={otphandaler}>
                    <div>
                        <h2>
                            “Business with Sevenoath"<br></br>
                            Sign Up to access your Dashboard
                        </h2>
                        {
                            loading_user ? <LoadingBox></LoadingBox>
                            :
                                error_user? <span>
                                    <MessageBox variant="danger">{error_user}</MessageBox>
                                    <div className="btn_center">
                                        <button type="submit" onClick={backButton} className="block primary">back</button>
                                    </div>
                                </span>
                            :<span> </span>
                        }
                        
                    </div>
                        <div> 
                            <div>
                            <input 
                                    type="text" 
                                    id="otp" 
                                    placeholder="otp"
                                    onChange={e =>setOtp(e.target.value)}
                                    
                                ></input>
                            </div>
                            <div className="btn_center">
                                <button type="submit" className="block secondary">verify</button>
                            </div>
                                
                        </div>
                    
                    </form>

                </div>
                :<span></span>
            }
            {panform ?
                <div className="form_hide">
                    <form className="form" onSubmit={panhandaler}>
                    <div>
                        <h2>
                            Enter Pan And GST Number<br></br>
                            To approve as a Vendor
                        </h2>
                        
                    </div>
                        <div> 
                            <div>
                            <input 
                                    type="text" 
                                    id="pan" 
                                    placeholder="pan Number"
                                    onChange={e =>setPan(e.target.value)}
                                    
                                ></input>
                            </div>
                                <div>
                                    <input 
                                        type="text" 
                                        id="gst" 
                                        placeholder="GSt Number"
                                        onChange={e =>setGst(e.target.value)}
                                        
                                    ></input>
                                </div>
                                <div className="btn_center">
                                    <button type="submit" className="block secondary">Save </button>
                                </div>
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