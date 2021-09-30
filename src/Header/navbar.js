import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../Action/UserAction';



function  NavBar(){

    const userSignin = useSelector(state => state.userSignin);
    const {  userInfo} = userSignin;
    const ProfileUser = useSelector((state) => state.ProfileUser);
    const {UserProfile} = ProfileUser;


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
             userInfo ?(
                <span className="dropdown">
                  <Link to="#">
                    {userInfo.username} {' '}
                      <i className="fa fa-caret-down"></i>
                    </Link>
                    <ul className="dropdown-content">
                      
                      <li>
                        <Link to={`/profile/${userInfo.username}`} >Profile</Link>
                      </li>
                      <li>
                        <Link to="/order" >My Order</Link>
                      </li>
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
         userInfo ? (
             <Link style={{color:'black',fontSize:'2.3rem'}} to={`/profile/${UserProfile.username}`}>
               {UserProfile.username}
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
       {/* <li className={divOpen ? 'close_category': ''}>
       {
                 loading? <LoadingBox></LoadingBox>
             :
                 error? <MessageBox variant="danger">{error}</MessageBox>
             :  
             
             <form onSubmit={submitHandaler}>
               <div className="aside-category">
               <ul  >
                     {
                     categories.map((category)=>(    
                         <li  > 
                           <div >
                             <Link 
                               to={`/category/${category.cat_name}/${category.id}`}
                               style={{color:"blueviolet"}}
                               onClick={() => setSidebarIsOpen(false)}
                             >  
                             
                               {category.cat_name}
                           </Link>
                           </div>
                           <div >
                             <button type="submit" onClick={(e) =>setCategory(e.target.value)}
                               value={category.cat_name} 
                               style={{style:"font-weight: bolder"}}
                             >
                               
                             </button>
                           </div>
                         </li>    
                     ))
                     }
                   </ul>
               </div> 
             </form> 
         }
       </li> */}

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