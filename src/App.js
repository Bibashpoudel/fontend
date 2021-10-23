// import pictures from './images/wp.png';
import './App.css';
import { BrowserRouter,  Route } from 'react-router-dom'
import LandingPage from './ClientPage/landingpage';
import VenueDetailsPage from './ClientPage/VenuesDetails';
import SignupPage from './ClientPage/signupPage';
import SignupPageVendor from './VenderPage/signupPage';
import SignInPage from './ClientPage/signinPage';
import Vendorpage from './VenderPage/VenderPage';
import CartScreen from './ClientPage/Cartpage';
import NavBar from './Header/navbar';
import ProfilePage from './ClientPage/Profile';
import { Footer } from './components/Footer';
import { Orders } from './ClientPage/Profile/orders';
import {  Accounts } from './ClientPage/Profile/account';
import { Wishlist } from './ClientPage/Profile/Wishlist';
import { Review } from './ClientPage/Profile/Review';
import EditProfile from './ClientPage/Profile/EditProfile';
import PrivateRoute from './components/PrivateRoute';
import VendorRoute from './components/VendorRoute';
import Terms from './ImpFiles/Terms';
import Policy from './ImpFiles/Policy';




function App() {


  
 
 
  return (
      <BrowserRouter>
    <div className="grid-container">
        
            
          <NavBar></NavBar>
       
       
          
      
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
                
                    
                <Route path="/terms&Conditions" component={Terms}></Route>
                <Route path="/PrivacyPolicy" component={Policy}></Route>
                <Route path='/cart/:id?' component={CartScreen}></Route>
                <Route path='/signin' component={SignInPage}></Route>
                <Route path="/register" component={SignupPage}></Route>
                <Route path="/venue/:id" component={VenueDetailsPage}></Route>
                <Route path="/" component={LandingPage} exact></Route>
            
            
           

        </main>
        <footer>
        <Footer ></Footer>
        </footer>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
