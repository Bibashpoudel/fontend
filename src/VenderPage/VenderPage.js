import React from 'react'
import { BrowserRouter, Link , Route } from 'react-router-dom';
import Account from './SubPage/Acccount';
import Bookingorder from './SubPage/BookingOrders';
import Dashboard from './SubPage/Dashboard';
import ServiceEdit from './SubPage/ServiceEdit';
import { ServiceManage } from './SubPage/ServiceManage';


import UploadImage from './SubPage/UploadsImages';
import VenueEdit from './SubPage/venueEdit';
import Venuemanage from './SubPage/Venuemanage';


function Vendorpage(){
    return (
        <BrowserRouter>
        <div className="dashboard">
           <div className="main space">
               <div className="das_aside ">

                    
                        <div>
                           <Link to='/dashboard' >
                                <i className="fa fa-dashboard"></i>
                                    {' '} Dashboard
                           </Link>
                           
                        </div>
                        <div>
                           <Link to='/orders'>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Booking Orders
                           </Link>
                           
                        </div>
                        <div>
                           <Link to='/VenueManage'>
                                <i className="fa fa-dashboard"></i>
                                    {' '}  Venue Manage
                           </Link>
                           
                        </div>
                        <div>
                           <Link to='/serviceManage'>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Service Manage
                           </Link>
                           
                        </div>
                        <div>
                           <Link to='/upload_image'>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Upload Image
                           </Link>
                           
                        </div>
                        <div>
                           <Link to='/account'>
                                <i className="fa fa-dashboard"></i>
                                    {' '} Acccount Setting
                           </Link>
                           
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
        </div>
        </BrowserRouter>
    )

}

export default Vendorpage;