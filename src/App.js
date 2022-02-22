// import pictures from './images/wp.png';

import { BrowserRouter,  Link,  NavLink,  Route } from 'react-router-dom'

import VenueDetailsPage from './ClientPage/VenuesDetails';
import SignupPage from './ClientPage/signupPage';
import SignupPageVendor from './VenderPage/signupPage';
import SignInPage from './ClientPage/signinPage';
import Vendorpage from './VenderPage/VenderPage';
import CartScreen from './ClientPage/Cartpage';


import './App.scss'
import ProfilePage from './ClientPage/Profile';
import  Footer  from './components/Footer';
import { Orders } from './ClientPage/Profile/orders';
import {  Accounts } from './ClientPage/Profile/account';
import { Wishlist } from './ClientPage/Profile/Wishlist';
import { Review } from './ClientPage/Profile/Review';
import EditProfile from './ClientPage/Profile/EditProfile';
import PrivateRoute from './components/PrivateRoute';
import VendorRoute from './components/VendorRoute';
import Terms from './ImpFiles/Terms';
import Policy from './ImpFiles/Policy';
import PaymentScreen from './ClientPage/paymentScreen';
import CityVenue from './ClientPage/CityVenue';

import { signout } from './Action/UserAction';
import { useEffect, useState } from 'react';

import { VenueTypeList } from './Action/VenueAction';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './components/LoadingBox';
import LandingPage from './ClientPage/landingpage.js';
import { ServicesTypeList } from './Action/ServicesAction.js';
import ServiceDetailsPage from './ClientPage/ServiceDetailsPage.js';
import VenueDisplay from './ClientPage/VenueDisplay.js';
import ServiceDisplay from './ClientPage/serviceTypeDisplay.js';
import MessageBox from './components/MessageBox';
import ForgetPassword from './ClientPage/forgetPassword';
import VenueLists from './ClientPage/VenueLists';
import Gallery from './ClientPage/Gallery';
import swal from 'sweetalert';
import FAQ from './ImpFiles/FAQ';
import Contactus from './ClientPage/contactus';
import ServiceLists from './ClientPage/ServiceLists';



function App(props) {

    const userProfileView = useSelector((state) => state.userProfileView);
    const {profile, error:profileError} = userProfileView;
    // const VendorTypes = useSelector((state) => state.VendorTypes);
    // const {loading:loading_types, error:error_types, types} =VendorTypes;

    const typeService = useSelector(state => state.typeService);
    const {loading:serv_loading, error:serv_error, servicetype} = typeService;
    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading, error, venueType} = venueTypeList;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(()=>{
          
        
        
          dispatch(VenueTypeList())
      dispatch(ServicesTypeList())
      if (profileError) {
        swal({
          title: "Account Not Approved.",
          text: "Contact Admin or Email at info@sevenoath.com!",
          icon: "error",
          buttons: true,
          dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            dispatch(signout());
            window.location.reload();
          }
        });
        setTimeout(() => {
          dispatch(signout());
          window.location.reload();
        },10000)
      }
    },[dispatch, profileError, props.history])
    // const [checkedState, setCheckedState] = useState([false, false, false,false, false, false, false, false,false,false])
 
    
    
    // // console.log(services)
    // const handleOnChange = (position) => {
    // const updatedCheckedState = checkedState.map((item, index) =>
    //   index === position ? !item : false
     
    // );
    

    // setCheckedState(updatedCheckedState);
    // }
   
    


   
    const Signouthandler = () =>{
        dispatch(signout());
        window.location.reload();
       
      
    }

    const [loadvenue, setloadvenue] = useState(false);
    const [loadservice, setloadService] = useState(false)
    
    const [blur, setBlur] = useState(false);
    const loadVenue =(e)=>{
        e.preventDefault()
        setloadvenue(true)
    }
    const loadService = (e) =>{
      e.preventDefault()
      setloadService(true)
    }
    const CancelVenue  = (e) =>{
      e.preventDefault()
      setloadvenue(false)
      setloadService(false)
    }
  

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById('btnclose').style.right = '5px'
      setBlur(true);
    }
    
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById('btnclose').style.right = '-20px'
      setBlur(false);
    }
    
    
 
  return (
    <BrowserRouter  >
      <div   className={blur ? 'scroll-disable grid-container' : 'grid-container'} >  
        <div className={blur ? 'actives' : 'overlay'} onClick={()=> closeNav()}></div>
          <header >
          <div className="header" >
            <div className="brand" >  
              <span >
                  <  Link to='' > Sevenoath</Link>
              </span>
            </div>
            <div >
                <div className="nav-left-menu">
                  <div className="col-auto ">
                  < Link to="/cart"><i className="ai-cart" />
                        {cartItems.length > 0 && (
                          <span className="badge">{cartItems.length}</span>
                          )
                        }
                        </Link>
                  </div>
                
                  {
                    profile ? 
                    <div className="col-auto desk"><NavLink to="/profile">{profile.fullname} <i className="fa fa-user-circle" /></NavLink></div>
                    :
                    <div className="col-auto desk"><NavLink to="/signin"><i className="ai-lock-on" /></NavLink></div>
                  }
                    
                  <div className="col-auto bar" onClick={()=> openNav()} style={{fontSize:"2.3rem"}}><i className="ai-three-line-horizontal" /></div>
                </div>
            </div>
          </div>
          </header> 
          <div id="mySidenav" className="sidenav sidenavs">
            <span href="#" id="btnclose" className="closebtn" onClick={()=> closeNav()}>&times;</span>
            {
              profile ? 
              <>
                {
                  profile.user_type === 'Vendor' ?
                  <NavLink to="/dashboard" className="mg-bot" onClick={()=> closeNav()}>{profile.fullname} <i className="fa fa-user-circle" /></NavLink>
                    :
                    <NavLink to="/profile" className="mg-bot" onClick={()=> closeNav()}>{profile.fullname} <i className="fa fa-user-circle" /></NavLink>
                }
              </>
              :
              <NavLink to="/signin" className="mob mg-bot" onClick={()=> closeNav()}><i className="ai-lock-on" /></NavLink>
            }
            <div className={loadvenue ? 'hidecat' : '' || loadservice ? 'hidecat' :''}>
              <div className='side-head'>Our Services</div>
              <div className ="row-hover" style={{display:'flex', justifyContent:"space-between"}}>
                  <div>
                    <NavLink to="/venues" onClick={()=> closeNav()}>Venues</NavLink>
                  </div>
                  <div className='right-angle'  onClick={loadVenue}>
                      <i className="fa fa-angle-right" />
                  </div>
              </div>
              <div className ="row-hover" style={{display:'flex', justifyContent:"space-between"}}>
                  <div>
                  <NavLink to="/services" onClick={()=> closeNav()}>Services</NavLink>
                  </div>
                  <div className='right-angle'  onClick={loadService}>
                      <i className="fa fa-angle-right" />
                  </div>
              </div>
              <div>
                <div className='side-head'>Helps & Settings</div>
                <div>
                  <NavLink to="/profile"  onClick={()=> closeNav()}>Accounts</NavLink>
                  </div>
                  {
                    profile ?
                    <div>
                      <NavLink to="/" onClick={ Signouthandler}>Sign Out</NavLink>
                    </div>
                    :
                    <div>
                      <NavLink to="/signin" onClick={()=> closeNav()} >Sign In</NavLink>
                    </div>
                  }
                  {
                    profile ?

                    <div>
                      { profile.user_type === 'Vendor' ?

                          <div>
                            <NavLink to="/dashboard"  onClick={()=> closeNav()}>Dashboard</NavLink>
                          </div>
                          :
                          <div>
                          <NavLink to="/vendor_register"  onClick={()=> closeNav()}>Vendor Register</NavLink>
                        </div>
                      }
                    </div>
                    :
                    <div>
                      <NavLink to="/vendor_register"  onClick={()=> closeNav()}>Vendor Register</NavLink>
                    </div>
                  }
              </div>
            </div>
            <div  className={loadvenue ? 'animated fadeIn ' : 'hidecat'}>
              <div className='back-head row-hover ' onClick={CancelVenue}>
                <div className='left-angle'> 
                  <i className='fa fa-angle-left'></i>
                </div>
                <div>
                Main Menu
                </div>
              </div>
              <div className='subcat-head'>
                Venues
              </div>
              { 
                loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error.message}</MessageBox>
                :
                <div>
                  {
                    venueType.map((t) =>(
                      <NavLink key={t.id} className='row-hover' to={`/type/venue/${t.id}`}>{t.type}{t.id}</NavLink>
                    ))
                  } 
                </div>
              }
            </div>
            <div  className={loadservice ? 'animated fadeIn ' : 'hidecat'}>
              <div className='back-head row-hover ' onClick={CancelVenue}>
                <div className='left-angle'> 
                  <i className='fa fa-angle-left'></i>
                </div>
                <div>
                Main Menu
                </div>
              </div>
              <div className='subcat-head'>
                Services
              </div>
              {
                  serv_loading ? <LoadingBox></LoadingBox>
                  :
                  serv_error ? <MessageBox>{error.message}</MessageBox>
                  :
                  <div >
                    {
                      servicetype.map((service) =>(
                        <NavLink  key={service.id} className='row-hover' to={`/type/service/${service.id}`}>{service.type}</NavLink>

                      ))
                    }  
                </div>
              }
            </div>
          </div>
          <main >
            {/*vender Screeen  */}
            <VendorRoute path="/dashboard" component={Vendorpage}></VendorRoute>
            <VendorRoute path="/service/:id/edit"  component={Vendorpage}></VendorRoute>
            <VendorRoute path="/edit/:id/venue" component={Vendorpage}>  </VendorRoute>
            <VendorRoute path="/accounts"  component={Vendorpage}></VendorRoute>
            <VendorRoute path="/upload_image"   component={Vendorpage}></VendorRoute>
            <VendorRoute path="/serviceManage"  component={Vendorpage}></VendorRoute>
            <VendorRoute path="/VenueManage"  component={Vendorpage}></VendorRoute>
            <VendorRoute path="/orders"  component={Vendorpage}></VendorRoute>
            <Route path="/vendor_register" component={SignupPageVendor}></Route>


            {/* Client screen */}

            
            <PrivateRoute path="/user"  component={Accounts}></PrivateRoute>
            <PrivateRoute path="/order" component={Orders}></PrivateRoute>
            <PrivateRoute path="/wishlist" component={Wishlist}></PrivateRoute>
            <PrivateRoute path ='/edit/profile' component ={EditProfile}></PrivateRoute>
            <PrivateRoute path="/review" component={Review}></PrivateRoute>
            <PrivateRoute path ='/profile' component ={ProfilePage}></PrivateRoute>
          
          
          <PrivateRoute path="/payment/:amount" component={PaymentScreen}></PrivateRoute>  
          <Route path='/contactUs' component={Contactus}></Route>
            <Route path="/gallery" component={Gallery}></Route>
            <Route path="/faq" component={FAQ}></Route>
            <Route path="/terms&Conditions" component={Terms}></Route>
            <Route path="/PrivacyPolicy" component={Policy}></Route>
            <Route path="/type/service/:id" component={ServiceDisplay}></Route>
            <Route path="/type/venue/:id" component={VenueDisplay}></Route>
            <Route path="/city/venue/:id" component={CityVenue}></Route>
            <Route path='/cart/:id?' component={CartScreen}></Route>
            <Route path='/forget' component={ForgetPassword}></Route>
            <Route path='/signin' component={SignInPage}></Route>
            <Route path="/register" component={SignupPage}></Route>
            <Route path="/service/:id" component={ServiceDetailsPage}></Route>
            <Route path="/venue/:id" component={VenueDetailsPage}></Route>
            <Route path='/services' component={ServiceLists}></Route>
            <Route path='/venues' component={VenueLists}></Route>
            <Route path="/" component={LandingPage } exact></Route>
        </main>     
        <Footer/>
         
      </div>
    </BrowserRouter>
  );
};

export default App;
