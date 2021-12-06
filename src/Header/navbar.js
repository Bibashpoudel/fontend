import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Action/UserAction';
import { VendorTypeList } from '../Action/vendorAction';
import { VenueTypeList } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



function  NavBar(props){

    // const userSignin = useSelector(state => state.userSignin);
    // const {  userInfo} = userSignin;
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
    return(
        <div className="top_section">
        <header >
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
          {t.type} 
          {/* {
                    checkedState[index] ?
                      <i className="fa fa-angle-up"></i>
                      :
                      <i className="fa fa-angle-down"></i>
                  } */}
        </li>
      
        { checkedState[index] ?
        <div className="sub_category" onClick={loadCategory}>
          {
            t.type === "Marriage Gardens" ?
            venueType.map(VT =>(
                <li className={`display-${index}`} key={VT.id}>
                    {VT.type}
                  
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
    </aside>
  

    
    </div>
      )
  }

export default NavBar;