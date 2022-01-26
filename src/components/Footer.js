import { Link, NavLink } from "react-router-dom"
import "./Footer.scss"
import ios from '../images/ios.png'
import android from '../images/android.png'

export default function Footer(){
    return (
       <footer>
            <div className="container-fluid pt-3 pb-2 footer-text" style={{backgroundColor:"rgba(212.50, 19.48, 61.87, 0.77)", color:"white"}}>
        <div className="container">
        <div className="row" >
                        <div className="col">
                            <div className="footer-header"> Know Us</div>
            <NavLink to="/">About Us</NavLink><br/>
            <NavLink to="/">Venues</NavLink><br/>
            <NavLink to="/">Photos</NavLink><br/>
            </div>
            <div className="col">
                <span className="footer-header"> Contact Us</span><br />
                <span>Contact Number</span><br />
                <span>Address</span>
            </div>
            <div className="col">
                <span className="footer-header">Follow Us</span><br />
                            <span className="tooltips">
                                <i style={{ color: '#4267B2', fontSize: '2rem' }} className="ai-facebook-fill pe-2"></i>
                                <span className="tooltiptext"> Facebook</span>
                            </span>
                            <span className="tooltips">
                                <i style={{ color: '#405DE6', fontSize: '2rem' }} className="ai-instagram-fill "></i>
                                <span className="tooltiptext"> Instagram</span>
                            </span>
                            <span className="tooltips">
                                <i style={{ color: '#1DA1F2', fontSize:'2rem'}} className="ai-twitter-fill ps-2"></i>
                                <span className="tooltiptext"> Twitter</span>
                            </span>
                            <span className="tooltips">
                                <i style={{ color: '#1DA1F2', fontSize: '2rem' }} className="ai-linked-in-v1-fill"></i>
                                <span className="tooltiptext"> LinkedIn</span>
                            </span>
                           
                            
                            
            </div>
            <div className="col">
                            <span className="footer-header">Download Our App</span>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                <img className="small" style={{display:'none'}} src={ios} alt="Download on the App store"></img>
                                <img className="small" src={android} alt="Download on the App store"></img>

                            </div>
            </div>
                        <div className="w-100 mt-2" />
                        
                        <div className="col text-left footer-down">
                            <i className="ai-coin" /> 2021 All Right Reserved
                        </div>
                        <div className="col text-end footer-down">
                             <Link to='/terms&Conditions'>Terms & Conditions</Link> ||  <Link to="/PrivacyPolicy">Privacy Policy</Link>
                        </div>
                            
                </div>
        </div>
        </div>
       </footer>
    )
}