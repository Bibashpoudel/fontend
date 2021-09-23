import React from 'react'
import { BrowserRouter, Link , Route } from 'react-router-dom';
import Account from './SubPage/Acccount';
import Bookingorder from './SubPage/BookingOrders';
import Dashboard from './SubPage/Dashboard';
import ServicesManage from './SubPage/servicesmanage';
import UploadImage from './SubPage/UploadsImages';


function Vendorpage(){
    return (
        <BrowserRouter>
        <div className="dashboard">
           <div className="main space">
               <div className="das_aside ">

                    
                        <div>
                           <Link to='/dashboard'>
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
                           <Link to='/manageServices'>
                                <i className="fa fa-dashboard"></i>
                                    {' '}  Manage Services
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

                    <Route path="/account" exact component={Account}></Route>
                    <Route path="/upload_image" exact  component={UploadImage}></Route>
                    <Route path="/manageServices" exact component={ServicesManage}></Route>
                    <Route path="/orders"exact  component={Bookingorder}></Route>
                    <Route path="/dashboard" exact component={Dashboard}></Route>
               </div>

           </div>
        </div>
        </BrowserRouter>
    )

}

export default Vendorpage;