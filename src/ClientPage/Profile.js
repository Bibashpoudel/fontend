import React, {  } from'react'
import {Link } from 'react-router-dom'
import profile from  '../profile.png'
import wishlist from '../wishlist.png'
import ordertrack from '../order.png'
import positivereview from '../review.png'



export default function ProfilePage(){

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    return(
      
           
            
            <div className="top_center">
                <h2 style={{marginLeft:'5%'}}>Your Account </h2>
                    <div  className="main center">
                        <Link to='/user' className="pro_setting">
                            
                               <img className="extra-small"src={profile} alt="profile" ></img>
                                <div style={{display:'grid'}}>
                                    <h5 style={{color:'black'}}> Your Profiles </h5>
                                    <p style={{color:'#262626', marginTop:'-2rem',fontSize:'1rem'}}>View , Modify Name, Email, Phone</p>
                                </div>
                                
                            
                        </Link>
                        <Link to='/order' className="pro_setting">
                            
                               <img className="extra-small"src={ordertrack} alt="order" ></img>
                                <div style={{display:'grid'}}>
                                    <h5 style={{color:'black'}}>Orders </h5>
                                    <p style={{color:'#262626', marginTop:'-2rem',fontSize:'1rem'}}>View and Manage Your Order</p>
                                </div>
                                
                            
                        </Link>
                        <Link to='/wishlist' className="pro_setting">
                           
                               <img className="extra-small"src={wishlist} alt="wishlist" ></img>
                                <div style={{display:'grid'}}>
                                    <h5 style={{color:'black'}}> Your Wishlist </h5>
                                    <p style={{color:'#262626', marginTop:'-2rem',fontSize:'1rem'}}>View, modify, share your list</p>
                                </div>
                                
                            
                        </Link>
                        <Link to='/reviews' className="pro_setting">
                            
                               <img className="extra-small"src={positivereview} alt="review" ></img>
                                <div style={{display:'grid'}}>
                                    <h5 style={{color:'black'}}> Your Reviews </h5>
                                    <p style={{color:'#262626', marginTop:'-2rem',fontSize:'1rem'}}>View Your Review</p>
                                </div>
                                
                            
                        </Link>
                        {/* <div className="pro_setting">
                        <Link to='account'> Manage Account</Link>
                        </div> */}
                  
                    </div>
                </div>    
               
           
          
    
    )
}