import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Signup } from '../Action/UserAction';



function SignupPageVendor(props){
    const[name, SetName] =useState();
    const [email, SetEmail] =useState();
    const [phone, SetPhone] = useState();
    const [password, setPassword] = useState();
    const customer_type ="Vendor"

    const redirect = props.location.search ? props.location.search.split('=')[1]: '/'

    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error} =userRegister;

    const dispatch = useDispatch();
    const SignUphandaler =(e)=>{
        e.preventDefault();
        
        dispatch(Signup(name, email, phone, customer_type, password));
    }
    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
            
        }

    }, [props.history,redirect,  userInfo]);

    return(
        <div className="main top_center vendor">
            <div className="col-1">
                <img className="large" src="../images/vendorregister.jpg" alt="registerimg"></img>
            </div>
            <div className="form col-2">

                <form>
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
                            placeholder="Brand Name"
                            
                            
                        ></input>
                    </div>
                    <div className="">
                        
                        <select>
                            <option selected> City Name </option>
                            <option> City Name</option>
                            <option> City Name</option>
                            <option> City Name</option>
                            <option> City Name</option>
                            <option> City Name</option>
                        </select>
                    </div>
                    <div className="">
                        
                        <select >
                            <option selected>Select Vendor Type</option>
                            <option> Marriage Gardens</option>
                            <option>Catering</option>
                            <option> Photographer </option>
                            <option>Mehndi Designer</option>
                            <option>DJ or Band</option>
                            <option> Beauty Specialists</option>
                            <option>Decorators</option>
                            
                        </select>
                    </div>
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="email" 
                            placeholder="Email"
                        ></input>
                    </div>
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Phone"
                            
                            
                        ></input>
                    </div>
                    
                    <div className="">
                       
                        <input 
                            type="password" 
                            id="password" 
                            placeholder="Password"
                            
                            
                        ></input>
                    </div>
                    <div className="btn_center">
                        <button type="submit" className="block primary">Continue</button>
                    </div>
                    <div>
                        <span>
                            Already Have account? { ' '}
                            <Link  style={{ color:"blue"}}>
                                Sign In
                            </Link> 
                        </span>
                    </div>
                    <div className="btn_center">
                        <button type="submit" className="block primary">Sign in as Customer</button>
                    </div>
                    
                </form>
                
                
           
            </div>
            
        </div>
    )
}
export default SignupPageVendor;