import React, {  } from'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Account } from './Profile/account'
import { Orders } from './Profile/orders'
import { Review } from './Profile/Review'
import { Wishlist } from './Profile/Wishlist'


export default function ProfilePage(){

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    return(
      
           
            
            <div className="">
                <h2>Your Account </h2>
                    <div  className="main center">
                        <Link to='/account'>
                            <div className="pro_setting">
                               <img className=""src="../images/order-tracking.png" alt="order" ></img>
                                <div style={{display:'grid'}}>
                                    <h5 style={{color:'black'}}> Your Profiles </h5>
                                    <p style={{color:'#262626', marginTop:'-2rem'}}>bibash</p>
                                </div>
                                
                            </div>
                        </Link>
                        <Link to='/orders'>
                            <div className="pro_setting">
                            My Orders
                            </div>
                        </Link>
                        <Link to='/wishlist'>
                            <div className="pro_setting">
                            My Wishlist
                            </div>
                        </Link>
                        <Link to='/reviews'>
                            <div className="pro_setting">
                            My Reviews
                            </div>
                        </Link>
                        {/* <div className="pro_setting">
                        <Link to='account'> Manage Account</Link>
                        </div> */}
                  
                    </div>
                </div>    
               
           
          
    
    )
}