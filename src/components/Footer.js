import { NavLink } from "react-router-dom"
import "./Footer.scss"

export default function Footer(){
    return (
       <footer>
            <div className="container-fluid pt-3 pb-2 footer-text" style={{backgroundColor:"rgba(212, 19, 62, 0.77)", color:"white"}}>
        <div className="container">
        <div className="row" >
            <div className="col">
            <NavLink to="/">About Us</NavLink><br/>
            <NavLink to="/">Venues</NavLink><br/>
            <NavLink to="/">Photos</NavLink><br/>
            </div>
            <div className="col">
                <span> Contact Us</span><br />
                <span>Contact Number</span><br />
                <span>Address</span>
            </div>
            <div className="col">
                <span>Follow Us</span><br />
                <i className="ai-facebook-fill pe-2"></i>
                <i className="ai-instagram-fill "></i>
                <i className="ai-twitter-fill ps-2"></i>
                <i className="ai-linked-in-v1-fill"></i>
            </div>
            <div className="col">
                <span>Download Our App</span><br />
            </div>
            <div className="w-100 mt-2" />
            <div className="col text-center">
            <i className="ai-coin" /> 2021 All Right Reserved
            </div>
        </div>
        </div>
        </div>
       </footer>
    )
}