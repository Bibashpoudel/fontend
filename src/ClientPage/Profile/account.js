import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserProfileViewAction } from '../../Action/UserAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';



export function Accounts(props){
    const userProfileView = useSelector(state => state.userProfileView)
    const {loading, error, profile} = userProfileView;


    const dispatch = useDispatch();


    useEffect(() => {
      dispatch(UserProfileViewAction())
    }, [dispatch])


    return (
        <div className="Profile-Account top">
            <div>
                <h2 style={{marginLeft:'10%'}}> My Profile</h2>
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
                            {profile.fullname}
                        </div>

                    </div>
                    <div className="pro-info-items">
                        <div>
                        Email
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
                        Date of Birth
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
                        <button className="btn secondary_size" onClick={() => props.history.push(`/edit/profile`)}>Edit Profile</button>
                        </div>
                        <div>
                            <button className="btn secondary_size">    Change Password</button>
                        </div>


                    </div>
                    
                
                </div>
            </div>
         
            </div>
}
            
        </div>
    )
}