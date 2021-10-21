import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Action/UserAction';
import { VendorTypeList } from '../Action/vendorAction';
import { VenueTypeList } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



function  NavBar(props){

    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo} = userSignin;
    const userProfileView = useSelector((state) => state.userProfileView);
    const {profile} = userProfileView;
    const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;
    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading, error, venueType} = venueTypeList;

    const dispatch = useDispatch();
    useEffect(()=>{
          
        dispatch(VendorTypeList())
        dispatch(VenueTypeList())
        

        
    },[dispatch])
    const [checkedState, setCheckedState] = useState([false, false, false,false])
 
    console.log(checkedState)
    
    // console.log(services)
    const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : false
     
    );
    console.log(position)

    setCheckedState(updatedCheckedState);
    }
    console.log(checkedState)
    


   
    const Signouthandler = () =>{
        dispatch(signout());
       
      
    }

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [divOpen, setDivOpen] = useState(false);


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
                    <i className="fa fa-bars" style={{color:"black"}}></i>
                  </button>
           <span onClick={() => setSidebarIsOpen(false)} >
              <  Link to='' > Sevenoath</Link>
           </span>
        </div>
        <div onClick={loadCategory}>
            <div className="nav-left-menu">
              <div>
                <Link to="/vendor_register">Vender Register</Link>
                  
              </div>
            
              <div>
                  |
              </div>
              <div>
                  |s
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
                        <Link to={`/account`} >Profile</Link>
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
    </header>
     <aside className={sidebarIsOpen ? 'open' : ''} onClick={loadCategory}>
       <div>
     <div className="aside-top" style={{color:'black', textAlign:'center'}}>
       {
         profile ? (
             <Link style={{color:'black',fontSize:'2.3rem'}} to={`/profile/${profile.fullname}`}>
               {profile.fullname}bibash
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
     <div>
     <ul className="categories">
       <li>
         
       </li>
       
                
       <div>
         
         <li onMouseEnter={() => handleOnChange(index)}>
           {t.type} 
           {/* {
                      checkedState[index] ?
                      <i className="fa fa-angle-up"></i>
                      :
                      <i className="fa fa-angle-down"></i>
                  } */}
         </li>
           
       </div>
    
       

     </ul>
     { checkedState[index] ?
       <ul className="sub_category">
       {
          t.type === "Marriage Gardens" ?
          venueType.map(VT =>(
              <li className={`display-${index}`}>
                  {VT.type}
                
              </li>
          ))
          
          :<li></li>
      }   
      <hr></hr>
       </ul>
       
       :<span></span>
  }
     </div>
            ))}
     </div>
  }
    <div style={{borderTop:'.1rem solid grey'}} className="aside-menu">
      <h3>Helps And Settings</h3>
      <ul>
        <Link to="/vendor_register">Vendor Register</Link>
      </ul>
    </div>
    </div>
   </aside>
 

  
   </div>
    )
}

export default NavBar;