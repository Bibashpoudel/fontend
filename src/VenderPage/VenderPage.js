import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { userDetailsAction } from '../Action/UserAction';
import MessageBox from '../components/MessageBox';
import Account from './SubPage/Account';
import Bookingorder from './SubPage/BookingOrders';
import Dashboard from './SubPage/Dashboard';
import ServiceEdit from './SubPage/ServiceEdit';
import { ServiceManage } from './SubPage/ServiceManage';


import UploadImage from './SubPage/UploadsImages';
import VenueEdit from './SubPage/venueEdit';
import Venuemanage from './SubPage/Venuemanage';


function Vendorpage(){

   const vendorDetails = useSelector(state => state.vendorDetails);
   const{loading, error, userDetails} = vendorDetails;

  
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(userDetailsAction())
      
   }, [dispatch])

    return (
        <BrowserRouter>
        
        <div className="dashboard">
           <div className="main space">
               <div className="das_aside ">
                        <div>
                           <NavLink to='/dashboard' activeStyle={{color: "red"}} >
                                <i className="fa fa-dashboard"></i>
                                    {' '} Dashboard
                           </NavLink>
                           
                        </div>
                        
                        
                        <div>
                           <NavLink to='/orders'activeStyle={{color: "red"}}>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Booking Orders
                           </NavLink>
                           
                        </div>
                        {loading ? ' '
                        :
                        error ? <MessageBox>{error || error.message}</MessageBox>
                        :
                        <span> {userDetails.vendor_type.type === 'Marriage Gardens' 
                        ?
                           <span>
                              <div>
                                 <NavLink to='/VenueManage' activeStyle={{color: "red"}}>
                                    <i className="fa fa-dashboard"></i>
                                          {' '}  Venue Manage
                                 </NavLink>
                                 
                              </div>
                              
                           </span>
                           :
                           <div>
                                 <NavLink to='/serviceManage' activeStyle={{color: "red"}}>
                                    <i className="fa fa-dashboard"></i>
                                          {' '} Service Manage
                                 </NavLink>
                                 
                              </div>
                        }
                        
                        </span>
                        }
                        
                        <div>
                           <NavLink to='/upload_image' activeStyle={{color: "red"}}>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Upload Image
                           </NavLink>
                           
                        </div>
                        <div>
                           <NavLink to='/account' activeStyle={{color: "red"}}>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Acccount Setting
                           </NavLink>
                           
                        </div>
                    
                   
               </div>
               <div className="ven_col-2">
                  <Route path="/service/:id/edit"  component={ServiceEdit}></Route>
                  <Route path="/venue/:id/edit"  component={VenueEdit}></Route>
                  <Route path="/serviceManage"  component={ServiceManage}></Route>
                  <Route path="/account"  component={Account}></Route>
                  <Route path="/upload_image"   component={UploadImage}></Route>
                  <Route path="/VenueManage" exct component={Venuemanage}></Route>
                  <Route path="/orders"  component={Bookingorder}></Route>
                  <Route path="/dashboard" exact component={Dashboard}></Route>
               </div>
               

           </div>
           <div className='mob_bottom_nav'>
               <div>
                  <NavLink to='/dashboard' activeStyle={{color: "red"}} >
                        <span><i className="fa fa-dashboard"></i></span>
                           <span>{' '} Dashboard</span>
                  </NavLink>
                  
               </div>
               <div>
                  <NavLink to='/orders'activeStyle={{color: "red"}}>
                        <span><i className="fa fa-dashboard"></i></span>
                           <span>{' '} Booking Orders</span>
                  </NavLink>
                  
               </div>
               {loading ? ' '
                        :
                        error ? <MessageBox>{error}</MessageBox>
                        :
                        <span> {userDetails.vendor_type.type === 'Marriage Gardens' 
                        ?
                           <span>
                              <div>
                                 <NavLink to='/VenueManage' activeStyle={{color: "red"}}>
                                    <i className="fa fa-dashboard"></i>
                                          {' '}  Venue Manage
                                 </NavLink>
                                 
                            </div>
                            <div>
                                 <NavLink to='/serviceManage' activeStyle={{color: "red"}}>
                                    <i className="fa fa-dashboard"></i>
                                          {' '} Service Manage
                                 </NavLink>
                                 
                              </div>
                             
                           </span>
                           :
                           <div>
                                 <NavLink to='/serviceManage' activeStyle={{color: "red"}}>
                                    <i className="fa fa-dashboard"></i>
                                          {' '} Service Manage
                                 </NavLink>
                                 
                              </div>
                        }
                        
                        </span>
                        }
            </div>
        </div>
        </BrowserRouter>
    )

}

export default Vendorpage;