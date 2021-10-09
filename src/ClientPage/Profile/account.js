import React from 'react'
import { useSelector } from 'react-redux'



export function Account(){
    const userProfileView = useSelector(state => state.userProfileView)
    const {profile} = userProfileView;




    return (
        <div className="Profile-Account">
            <div>
                <h2> My Profile</h2>
            </div>
            {profile.length === 0?
            
        <div>error</div>:<div></div>}
            {profile.map((user) =>(
            <div key={user.id}>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                            Full Name
                        </div>
                        <div>
                            {user.fulname}
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        email
                        </div>
                        <div>
                        {user.email}
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        Mobile
                        </div>
                        <div>
                            {user.mobile}
                        </div>

                    </div>
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                        Date Of birth
                        </div>
                        <div>
                            Full name
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        email
                        </div>
                        <div>
                            email
                        </div>

                    </div>
                
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                    <div>
                        <button className="secondary">Edit Profile</button>
                        </div>
                        <div>
                            <button className="secondary">    Change Password</button>
                        </div>


                    </div>
                    
                
                </div>
            </div>
            ))}
            
        </div>
    )
}