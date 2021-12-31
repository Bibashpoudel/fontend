import { NavLink } from 'react-router-dom';
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
                    <div className="col" style={{fontSize:"1.7rem"}}>
                        Sevenoath
                    </div>
                    <div className="col-auto desk"><NavLink to="/"><i className="ai-cart" /></NavLink></div> 
                    <div className="col-auto desk"><NavLink to="/"><i className="ai-lock-on" /></NavLink></div>
                    <div className="col-auto bar" onClick={()=> openNav()} style={{fontSize:"1.7rem"}}><i className="ai-three-line-horizontal" /></div>
                </div>
            
            <div id="mySidenav" className="sidenav">
            <span href="#" className="closebtn" onClick={()=> closeNav()}>&times;</span>
            <NavLink to="/" className="mob">Cart <i className="ai-cart" /></NavLink>
            <NavLink to="/" className="mob">SignIn <i className="ai-lock-on" /></NavLink>
            <NavLink to="/">Venues</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Gallery</NavLink>
            <NavLink to="/">Contact Us</NavLink>
</div>
            </div>
        </div>
      </header>
    )
}