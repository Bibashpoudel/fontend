import React, { useState } from'react'


export default function ProfilePage(){

    // const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    return(
        <div className="profile">
            
            <div className="pro_col-1-main">
                    <div  className="pro_col-1">
                        <div className="pro_setting">
                            Manage Account
                        </div>
                        <div className="pro_setting">
                            My orders
                        </div>
                        <div className="pro_setting">
                            My Reviews 
                        </div>
                        <div className="pro_setting">
                            My Wishlist 
                        </div>
                        <div className="pro_setting">
                            Recommande for me
                        </div>
                  
                    </div>
                </div>    
            <div className="pro_col-2">
                poudel
            </div>
           
        </div>
    )
}