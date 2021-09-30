import React, {  } from'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { Account } from './Profile/account'
import { Orders } from './Profile/orders'
import { Review } from './Profile/Review'
import { Wishlist } from './Profile/Wishlist'


export default function ProfilePage(){

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    return(
        <BrowserRouter>
            <div className="profile">
            
            <div className="pro_col-1-main">
                    <div  className="pro_col-1">
                        <div className="pro_setting">
                           <Link to='/account'> Manage Account</Link>
                        </div>
                        <div className="pro_setting">
                        <Link to='/orders'> My Orders</Link>
                        </div>
                        <div className="pro_setting">
                        <Link to='/wishlist'> My Wishlist</Link>
                        </div>
                        <div className="pro_setting">
                        <Link to='/reviews'> My Reviews</Link>
                        </div>
                        {/* <div className="pro_setting">
                        <Link to='account'> Manage Account</Link>
                        </div> */}
                  
                    </div>
                </div>    
                <div className="pro_col-2">
                    <Route path="/account" component={Account}></Route>
                    <Route path="/orders" component={Orders}></Route>
                    <Route path="/wishlist" component={Wishlist}></Route>
                    <Route path="/reviews" component={Review}></Route>
                </div>
           
            </div>
        </BrowserRouter>
    )
}