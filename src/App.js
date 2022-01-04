// import pictures from './images/wp.png';

import { BrowserRouter,  Link,  Route } from 'react-router-dom'
import Home from './ClientPage/Home.js';
import VenueDetailsPage from './ClientPage/VenuesDetails';
import SignupPage from './ClientPage/signupPage';
import SignupPageVendor from './VenderPage/signupPage';
import SignInPage from './ClientPage/signinPage';
import Vendorpage from './VenderPage/VenderPage';
import CartScreen from './ClientPage/Cartpage';


import './App.css'

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
import VenueTypeScreen from './ClientPage/VenueTypeScreen';
import { signout } from './Action/UserAction';
import { useEffect, useState } from 'react';
import { VendorTypeList } from './Action/vendorAction';
import { VenueTypeList } from './Action/VenueAction';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
import Nav from './components/Nav';




function App() {

  const userProfileView = useSelector((state) => state.userProfileView);
    const {profile} = userProfileView;
    const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;
    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading, error, venueType} = venueTypeList;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const dispatch = useDispatch();
    useEffect(()=>{
          
        dispatch(VendorTypeList())
        dispatch(VenueTypeList())
        

        
    },[dispatch])
    const [checkedState, setCheckedState] = useState([false, false, false,false, false, false, false, false,false,false])
 
    
    
    // console.log(services)
    const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : false
     
    );
    

    setCheckedState(updatedCheckedState);
    }
   
    


   
    const Signouthandler = () =>{
        dispatch(signout());
        window.location.reload();
       
      
    }

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    

    const loadCategory =(e)=>{
        e.preventDefault()
        setSidebarIsOpen(false)
    }
  
 
 
  return (
      <BrowserRouter>
    <div className="grid-container">  

    <Nav/>
    {/* <header >
        <div className="header" >
        <div className="brand" >
        <button
                    type="button"
                    className="open-sidebar"
                    onClick={() => setSidebarIsOpen(true)}
                   
                  >
                    <i className="fa fa-bars" style={{color:"whitesmoke"}}></i>
                  </button>
           <span onClick={loadCategory} >
              <  Link to='' > Sevenoath</Link>
           </span>
        </div>
        <div className="nav-search" onClick={loadCategory}>
                <input  className="search" type="text" placeholder="search"></input>
                <span className="btn-search"><i className="fa fa-search"></i></span>
              </div>
        <div onClick={loadCategory}>
            <div className="nav-left-menu">
              <div>
              < Link to="/cart">cart
                    {cartItems.length > 0 && (
                      <span className="badge">{cartItems.length}</span>
                      )
                    }
                    </Link>
              </div>
              <div>
              {
              profile ?(
                <span className="dropdown">
                  <Link to="#">
                    {profile.fullname} {' '}
                      <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      
                      <li>
                        <Link to={`/profile`} >Profile</Link>
                      </li>
                      <li>
                        <Link to="/order" >My Order</Link>
                      </li>
                      {
                        profile && profile.user_type === "Vendor" &&(
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        
                        )
                        
                      }
                      <li>
                          <Link to="/" onClick={Signouthandler}>sign out</Link>
                      </li>
                      </ul>
                 </span>
              
                ):
                <div style={{marginTop:"-0.5rem"}}> 
                  <Link to="/register">Sign Up</Link>
                </div>
                }
            </div>
           </div>
           <div className="hidden">
             <div className="hidden-display">
               
             {
              profile ?(
                <span className="dropdown">
                  <Link to="#">
                    
                      <i className="fa fa-user"></i>
                    </Link>
                    <ul className="dropdown-content">
                      
                      <li>
                        <Link to={`/profile`} >Profile</Link>
                      </li>
                      <li>
                      < Link to="/cart">cart
                        {cartItems.length > 0 && (
                          <span className="badge">{cartItems.length}</span>
                          )
                        }
                    </Link>
                      </li>
                      <li>
                        <Link to="/order" >My Order</Link>
                      </li>
                      {
                        profile && profile.user_type === "Vendor" &&(
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        
                        )
                        
                      }
                      <li>
                          <Link to="/" onClick={Signouthandler}>sign out</Link>
                      </li>
                      </ul>
                 </span>
              
                ):
             
                  <span className="dropdown">
                 
                  
                        <i className="fa fa-user"></i>
                    
                      <ul className="dropdown-content">
                        
                        <li>
                          <Link to="/register">Sign Up</Link>
                        </li>
                        <li>
                          <Link to="/vendor_register">Vendor Register</Link>
                        </li>
                        
                      
                      </ul>
                 </span>
                
                }
             </div>
            
           </div>
           
           

        </div>
    </div>
        <div className="mob-search">
                <input  className="search" type="text" placeholder="search"></input>
                <span className="btn-search"><i className="fa fa-search"></i></span>
        </div>     
        </header>
     <aside className={sidebarIsOpen ? 'open' : ''} >
      <div className="aside-padding">
     <div className="aside-top" style={{color:'black', textAlign:'center'}} onClick={loadCategory}>
       {
         profile ? (
             <Link style={{color:'black',fontSize:'2.3rem'}} to={`/profile`} >
               {profile.fullname}
             </Link> 
         )
         :
         <div>
                <div > 
                  <Link style={{color:"black"}} to="/signin">Sign In</Link>
                </div>
         </div>
       }
     </div>
     {
                loading_types ? <LoadingBox></LoadingBox>
                :      
                error_types ? <MessageBox variant="danger">{error_types}</MessageBox>
                :
                loading ?<LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error}</MessageBox>
                :
        <div>
          <div>
          <strong>Our Services</strong>
         <button
           onClick={() => setSidebarIsOpen(false)}
           className="close-sidebar"
           type="button"
           style={{float:"right"}}
         >
           <i className="fa fa-close"></i>
         </button>
          </div>
     {
            types.map((t, index) =>(
     <div className="categories" key={t.id}>
     <ul >
        <li onMouseEnter={() => handleOnChange(index)}>
         {
           t.type === "Marriage Gardens" ?
           <Link 
            to={`/venue/${t.id}`} 
            style={{color:'black'}}  
            onClick={() => setSidebarIsOpen(false)}> 
              {t.type}
            </Link> 
           :
           <Link 
           to={`/services/${t.id}`} 
           style={{color:'black'}}
           onClick={() => setSidebarIsOpen(false)}> 
           {t.type}</Link> 
         }
          
        </li>
      
        { checkedState[index] ?
        <div className="sub_category" onClick={loadCategory}>
          {
            t.type === "Marriage Gardens" ?
            venueType.map(VT =>(
                <li className={`display-${index}`} key={VT.id} >
                  <Link to={`/type/venue/${VT.id}`} style={{color:'black'}}>  {VT.type}</Link>
                 
                </li>
            ))
            
            :<li></li>
          }   
        </div>
        
        
        :<span></span>
        
      }
      </ul>
      </div>
              ))}
      </div>
    }
      <div className="aside-menu" onClick={loadCategory}>
        <h3>Helps And Settings</h3>
        {
          profile ?
          <ul>
              <li>
                <Link to='/profile'>
                  Your Account
                </Link>
              </li>
              <li>
                <Link to="/" onClick={Signouthandler}>Sign Out</Link>
              </li>
          </ul>:
          <ul>
          <li>
            <Link to="/signin">Sign In</Link>
            
          </li>
          <li>
            <Link to="/vendor_register">Vendor Register</Link>
          </li>
        </ul>

        }
       
        
      </div>
      </div>
    </aside> */}
        <main  >
              {/* Admin Screen */}


                {/*vender Screeen  */}
             
              
                <VendorRoute path="/dashboard" component={Vendorpage}></VendorRoute>
                <VendorRoute path="/service/:id/edit"  component={Vendorpage}></VendorRoute>
                <VendorRoute path="/venue/:id/edit" component={Vendorpage}>  </VendorRoute>
                <VendorRoute path="/accounts"  component={Vendorpage}></VendorRoute>
                <VendorRoute path="/upload_image"   component={Vendorpage}></VendorRoute>
                <VendorRoute path="/serviceManage" exact component={Vendorpage}></VendorRoute>
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
                <Route path="/terms&Conditions" component={Terms}></Route>
                <Route path="/PrivacyPolicy" component={Policy}></Route>
                <Route path="/type/venue/:id" component={VenueTypeScreen}></Route>
                <Route path="/city/venue/:id" component={CityVenue}></Route>
                <Route path='/cart/:id?' component={CartScreen}></Route>
                <Route path='/signin' component={SignInPage}></Route>
                <Route path="/register" component={SignupPage}></Route>
                <Route path="/venue/:id" component={VenueDetailsPage}></Route>
                <Route path="/" component={Home } exact></Route>
            
            
           

        </main>
        {/* <footer>
        <div className=" sub-footer">
              <div className="column1">
               
                <h4> Get to Know Us</h4>
              
              
                <div className="footerlink">
                  <Link to="/about">Careers</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">Blog</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About Sevenoath</Link>
                </div>
              </div>
              <div className="column1">
                <div>
                   <h4> Make A Money With us</h4>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">Affilate With us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">Advertise Your Service</Link>
                  </div >                   
                  </div>
                  
                </div>
                <div className="column1">
                <div>
                  <h4> Download Our Apps</h4>
                </div>
                  <div style={{display:'flex',  fontSize:'2.3rem',justifyContent:'center'}}>
                    <div className="footerlink" style={{padding:'2rem',color:"black", fontSize:'3rem'}}>
                       
                       <i className="fa fa-android"></i>
                    </div>
                    <div className="footerlink" style={{padding:'2rem',color:"black", fontSize:'3rem'}}>
                         <i className="fa fa-apple"></i>
                    </div>
                  
                  </div>
                
              </div>
                
              <div className="column1">
                <div>
                  <h4> Let us help You</h4>
                </div>
                  <div>
                    <div className="footerlink">
                        <Link to="/signin">Account</Link>
                    </div>
                    <div className="footerlink">
                        <Link to="/orders">Orders</Link>
                    </div>
                  
                  </div>
                
              </div>

            </div>
             <div className="mob-footer">
                <div>
                  <div className="footerlink">
                    <Link to="/about">Careers</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">Blog</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">About Sevenoath</Link>
                  </div>
                </div>
                <div>
                  <div className="footerlink">
                    <Link to="about">Affilate With us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">Advertise Your Service</Link>
                  </div > 
                </div>

             </div>
             <div className="main-footer  center">
              <div className=" main center footer_items">
                  <div>
                   <Link to="/terms&Conditions"> Terms and Conditions </Link>
                  </div>
                  <div>
                    <Link to="PrivacyPolicy">Privacy and Policy</Link>
                  </div>
              </div>

              
              <div style={{textAlign:'center'}}>
              All Right Reserved 
              </div>
             
             </div>
        </footer> */}
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
