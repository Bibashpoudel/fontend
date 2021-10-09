import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileViewAction } from '../../Action/UserAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';



export function Account(){
    const userProfileView = useSelector(state => state.userProfileView)
    const {loading, error, profile} = userProfileView;


    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(UserProfileViewAction())
    }, [dispatch])


    return (
        <div className="Profile-Account">
            <div>
                <h2> My Profile</h2>
            </div>
            
           {loading ? <LoadingBox></LoadingBox> 
           :
           error ? <MessageBox variant="danger">{error}</MessageBox>
           :
        <div>
            
            <div key={profile.id}>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                            Full Name
                        </div>
                        <div>
                            {profile.fulname}
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        email
                        </div>
                        <div>
                        {profile.email}
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        Mobile
                        </div>
                        <div>
                            {profile.mobile}
                        </div>

                    </div>
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                        Date Of birth
                        </div>
                        <div>
                           
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                            Gender
                        </div>
                        <div>
                           
                        </div>

                    </div>
                
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                    <div>
                        <button className="btn secondary">Edit Profile</button>
                        </div>
                        <div>
                            <button className="btn secondary">    Change Password</button>
                        </div>


                    </div>
                    
                
                </div>
            </div>
         
            </div>
}
            
        </div>
    )
}