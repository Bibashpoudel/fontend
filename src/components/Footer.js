import React from "react";
import { Link } from "react-router-dom";


export function Footer() {
    return (
        <div >
            <div className=" sub-footer">
              <div className="column1">
               
                <h4> Get to Know Us</h4>
              
              
                <div className="footerlink">
                  <Link to="/about">Careers</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">Blog</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About Sevenoath</Link>
                </div>
              </div>
              <div className="column1">
                <div>
                   <h4> Make A Money With us</h4>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">Affilate With us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">Advertise Your Service</Link>
                  </div >                   
                  </div>
                  
                </div>
                <div className="column1">
                <div>
                  <h4> Download Our Apps</h4>
                </div>
                  <div style={{display:'flex',  fontSize:'2.3rem',justifyContent:'center'}}>
                    <div className="footerlink" style={{padding:'2rem',color:"black", fontSize:'3rem'}}>
                       
                       <i className="fa fa-android"></i>
                    </div>
                    <div className="footerlink" style={{padding:'2rem',color:"black", fontSize:'3rem'}}>
                         <i className="fa fa-apple"></i>
                    </div>
                  
                  </div>
                
              </div>
                
              <div className="column1">
                <div>
                  <h4> Let us help You</h4>
                </div>
                  <div>
                    <div className="footerlink">
                        <Link to="/signin">Account</Link>
                    </div>
                    <div className="footerlink">
                        <Link to="/orders">Orders</Link>
                    </div>
                  
                  </div>
                
              </div>

            </div>
             <div className="main-footer  center">
              All Right Reserved 
             </div>

          </div>
    )
}