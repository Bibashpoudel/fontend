import React from 'react'
import { Link } from 'react-router-dom';



function SignupPage(){
    return(
        <div className="main top_center">
            <div className="col-1">
                <img className="large" src="../images/customerregister.png" alt="registerimg"></img>
            </div>
            <div className="form col-2">

                <form>
                    <div>
                        <h2>Welcome !</h2>
                    </div>
                    
                    <div className="">
                       
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Name"
                            
                            
                        ></input>
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
                    <div>
                        <button type="submit" className="block primary">Sign Up</button>
                    </div>
                    <div>
                        <span>
                            Already Have account? { ' '}
                            <Link  style={{ color:"blue"}}>
                                Sign In
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
export default SignupPage;