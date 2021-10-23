import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateUserProfileAction, UserProfileViewAction } from '../../Action/UserAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';

export default function EditProfile() {


    const[name, setName] =useState();
    const[email, setEmail] =useState();
    const[gender, setGender] =useState();
    const[dob, setDOBB] =useState();
    const[mobile, setPhone] =useState();

    const userProfileView = useSelector(state => state.userProfileView)
    const {loading, error, profile} = userProfileView;


    const dispatch = useDispatch();


    useEffect(() => {
      if(!profile){
        dispatch(UserProfileViewAction())
      }
      else{
          setName(profile.fullname);
          setEmail(profile.email)
          setPhone(profile.mobile);
          setGender(profile.gender)
          setDOBB(profile.dob)
      }
    }, [dispatch, profile])


    const submitHandaler = (e)=>{
        e.preventDefault()
        dispatch(updateUserProfileAction({name, gender,dob}))
    }

    return (
        <div className="Profile-Account top">
            <div>
                <h2 style={{marginLeft:'10%'}}> Update Profile</h2>
            </div>
            
           {loading ? <LoadingBox></LoadingBox> 
           :
           error ? <MessageBox variant="danger">{error}</MessageBox>
           :
            <div>
            <form onSubmit={submitHandaler}>
            <div key={profile.id}>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                            Full Name
                        </div>
                        <div>
                        <input 
                            required
                            type="text" 
                            id="name" 
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}        
                        ></input>
                        </div>
                    </div>
                    <div className="pro-info-items">
                        <div style={{display:"flex" ,justifyContent:'space-between'}}>
                            <span>Email</span>
                            <span>
                                <Link style={{fontSize:'1.3rem', color:'blue'}}>Change</Link>
                            </span>
                        </div>
                        <div>
                        {email}
                        </div>
                    </div>
                    <div className="pro-info-items">
                    <div style={{display:"flex" ,justifyContent:'space-between'}}>
                            <span>Mobile</span>
                            <span>
                                <Link style={{fontSize:'1.3rem', color:'blue'}}>Change</Link>
                            </span>
                        </div>
                        <div>
                            {mobile}
                        </div>
                    </div>
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                        <div>
                        Date of Birth
                        </div>
                        <div>
                        <input 
                            required
                            type="date" 
                            id="gender" 
                            value={dob}
                            onChange={(e) => setDOBB(e.target.value)}        
                        ></input>
                        </div>
                    </div>
                    <div className="pro-info-items">
                        <div>
                            Gender
                        </div>
                        <div>
                        <input 
                            required
                            type="text" 
                            id="gender" 
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        ></input>
                        </div>
                    </div> 
                </div>
                <div className="pro-info">
                    <div className="pro-info-items">
                    <div>
                        <button className="btn secondary_size">Update</button>
                        </div>
                    </div>       
                </div>
            </div>
            </form>
        </div>   
        }      
    </div>
    )
}
