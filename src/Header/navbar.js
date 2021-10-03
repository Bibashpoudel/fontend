import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Action/UserAction';



function  NavBar(){

    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo} = userSignin;
    const userProfileView = useSelector((state) => state.userProfileView);
    const {profile} = userProfileView;


    const dispatch = useDispatch();
    const Signouthandler = (e) =>{
        e.preventDefault();
   
        dispatch(signout());
    }

    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [divOpen, setDivOpen] = useState(false);


    const loadCategory =(e)=>{
        e.preventDefault()
        setDivOpen(true)
    }
    return(
        <div>
        <header>
        <div className="header">
        <div className="brand">
        <button
                    type="button"
                    className="open-sidebar"
                    onClick={() => setSidebarIsOpen(true)}
                  >
                    <i className="fa fa-bars" style={{color:"black"}}></i>
                  </button>
           <Link to=''> Sevenoath</Link>
        </div>
        <div className="nav-left-menu">
            <div>
              <Link to="/venue">Venue</Link>
                
            </div>
            <div>
            <Link to="/home">Home</Link>
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
                        <Link to={`/profile/${profile.fullname}`} >Profile</Link>
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
             <div>
            <Link to="/register">Sign Up</Link>
            </div>
           }
           </div>
           
           

        </div>
    </div>
    </header>
     <aside className={sidebarIsOpen ? 'open' : ''}>
     <div className="aside-top" style={{color:'black', textAlign:'center'}}>
       {
         profile ? (
             <Link style={{color:'black',fontSize:'2.3rem'}} to={`/profile/${profile.fullname}`}>
               {profile.fullname}
             </Link> 
         )
         :
         <div>
         </div>
       }
     </div>
     <ul className="categories">
       <li>
         <strong>Categories</strong>
         <button
           onClick={() => setSidebarIsOpen(false)}
           className="close-sidebar"
           type="button"
           style={{float:"right"}}
         >
           <i className="fa fa-close"></i>
         </button>
       </li>
       

     </ul>
       <ul className="sub_category">
       <div className={ divOpen ? 'open': ''} >
       
         <span>
           
           <li>
           <i className="fa fa-caret-left" style={{cursor:"pointer",padding:'1rem'}} onClick={loadCategory}></i>
             bibash
           </li>
         </span>
         </div>
       </ul>
     

   </aside>
 

  
   </div>
    )
}

export default NavBar;