// import pictures from './images/wp.png';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import LandingPage from './ClientPage/landingpage';
import VenueDetailsPage from './ClientPage/VenuesDetails';
import SignupPage from './ClientPage/signupPage';
import SignupPageVendor from './VenderPage/signupPage';
import SignInPage from './ClientPage/signinPage';
import Vendorpage from './VenderPage/VenderPage';

function App() {
  return (
      <BrowserRouter>
    <div className="grid-container">
        <header>
            <div className="header">
                <div className="brand">
                    Wedding
                </div>
                <div className="nav-left-menu">
                    <div>
                        <a href="">venues</a>
                        
                    </div>
                    <div>
                        <a href="">Home</a>
                    </div>
                    <div>
                        |
                    </div>
                    <div>
                        |s
                    </div>
                    <div>
                        <a href="">Sign Up</a>
                    </div>
                    <div>
                        <a href="">Sign In</a>
                    </div>

                </div>
            </div>

        </header>
        <main>
              {/* Admin Screen */}


                {/*vender Screeen  */}
            <Route path="/dashboard" component={Vendorpage}></Route>
            <Route path="/account"  component={Vendorpage}></Route>
            <Route path="/upload_image"   component={Vendorpage}></Route>
            <Route path="/manageServices"  component={Vendorpage}></Route>
            <Route path="/orders"  component={Vendorpage}></Route>
            <Route path="/vendor_register" component={SignupPageVendor}></Route>


                {/* Client screen */}

            <Route path='/signin' component={SignInPage}></Route>
            <Route path="/register" component={SignupPage}></Route>
            <Route path="/venue/:id" component={VenueDetailsPage}></Route>
            <Route path="/" component={LandingPage} exact></Route>
            
            
           

        </main>
        <footer >
            <div className=" sub-footer">
              <div className="column1">
               
                <h2> Know Us</h2>
              
              
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
                <div className="footerlink">
                  <Link to="about">About us</Link>
                </div>
              </div>
              <div className="column1">
                <div>
                   <h2> Make A Money With us</h2>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div >                   
                  </div>
                  
                </div>
              <div className="column1">
                <div>
                  <h2> Let help You</h2>
                </div>
                  <div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  <div className="footerlink">
                    <Link to="about">About us</Link>
                  </div>
                  </div>
                
              </div>

            </div>
             <div className="main-footer row center">
              All Right Reserved 
             </div>

          </footer>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
