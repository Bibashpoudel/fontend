import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Account from './SubPage/Account';
import Bookingorder from './SubPage/BookingOrders';
import Dashboard from './SubPage/Dashboard';
import ServiceEdit from './SubPage/ServiceEdit';
import { ServiceManage } from './SubPage/ServiceManage';


import UploadImage from './SubPage/UploadsImages';
import VenueEdit from './SubPage/venueEdit';
import Venuemanage from './SubPage/Venuemanage';


function Vendorpage(){

   const userProfileView = useSelector(state => state.userProfileView);
   const{profile} = userProfileView;


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
                  <Route path="/service/:id/edit" exact component={ServiceEdit}></Route>
                  <Route path="/venue/:id/edit" exact component={VenueEdit}></Route>
                  <Route path="/serviceManage" exact component={ServiceManage}></Route>
                  <Route path="/account" exact component={Account}></Route>
                  <Route path="/upload_image" exact  component={UploadImage}></Route>
                  <Route path="/VenueManage" exact component={Venuemanage}></Route>
                  <Route path="/orders"exact  component={Bookingorder}></Route>
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
               <div>
                  <NavLink to='/VenueManage' activeStyle={{color: "red"}}>
                        <span><i className="fa fa-dashboard"></i></span>
                           <span>{' '}  Venue Manage</span>
                  </NavLink>
                  
               </div>
               <div>
                  <NavLink to='/serviceManage' activeStyle={{color: "red"}}>
                        <span><i className="fa fa-dashboard"></i></span>
                        <span>   {' '} Service Manage</span>
                  </NavLink>
                  
               </div>
            </div>
        </div>
        </BrowserRouter>
    )

}

export default Vendorpage;