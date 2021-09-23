import React from 'react'
import { Link } from 'react-router-dom';



function SignInPage(){
    return(
        <div className="main top_center">
            <div className="col-1">
                <div className="cli_log">
                    <h3>Book your wedding venue now !!</h3>
                </div>
                <img className="cus_log" src="../images/customerlogin.png" alt="registerimg"></img>
                
            </div>
            <div className="form col-2">

                <form>
                    <div>
                        <h2>Log In  !</h2>
                    </div>
                    
                    
                    
                    <div className="">
                        
                        <input 
                            type="text" 
                            id="phone" 
                            placeholder="Email Or Phone"
                            
                            
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