import { Link, NavLink } from 'react-router-dom';
import './Nav.scss'

export default function Nav(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return (
      <header>
            <div className="container-fluid nav-fluid">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col" style={{fontSize:"2.3rem"}} onClick={()=> closeNav()}>
                      <Link to='/'>  Sevenoath</Link>
                    </div>
                    <div className="col-auto desk"><NavLink to="/cart"><i className="ai-cart" /></NavLink></div> 
                    <div className="col-auto desk"><NavLink to="/signin"><i className="ai-lock-on" /></NavLink></div>
                    <div className="col-auto bar" onClick={()=> openNav()} style={{fontSize:"2.3rem"}}><i className="ai-three-line-horizontal" /></div>
                </div>
            
            <div id="mySidenav" className="sidenav">
            <span href="#" className="closebtn" onClick={()=> closeNav()}>&times;</span>
            <NavLink to="/signin" className="mob" style={{textAlign:'center'}} onClick={()=> closeNav()}>SignIn <i className="ai-lock-on" /></NavLink>
            <NavLink to="/cart" className="mob" onClick={()=> closeNav()}>Cart <i className="ai-cart" /></NavLink>
          
            <NavLink to="/venues" onClick={()=> closeNav()}>Venues</NavLink>
            <NavLink to="/services" onClick={()=> closeNav()}>Services</NavLink>
            <NavLink to="/gallery" onClick={()=> closeNav()}>Gallery</NavLink>
            <NavLink to="/contactus" onClick={()=> closeNav()}>Contact Us</NavLink>
</div>
            </div>
        </div>
      </header>
    )
}