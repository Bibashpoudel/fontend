import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './contactus.scss'
import swal from 'sweetalert';
import { CONTACT_SEND_RESET } from '../Constants/contactConstants';
import { ContactusAction } from '../Action/contactusAction';

export default function Contactus() {

    const [fullname, setFullname] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const messageSend = useSelector(state => state.messageSend);
    const { loading, error, success } = messageSend;

    const dispatch = useDispatch();
    useEffect(() => {
        if (success) {
            swal("Message send", "We will contact soon", "success");
            dispatch({
                type:CONTACT_SEND_RESET
            })
        }
    })
    const sendMessage = (e) => {
        e.preventDefault()
        dispatch(ContactusAction(fullname, email,message))
    }
    return (
        <div className="contact">
            <div className='content'>
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in </p>

            </div>
            <div className='containers'>
                <div className='contactInfo'>
                    <div className='boxs'>
                        <div className='icons'>
                        <ion-icon name="locate"></ion-icon>
                        </div>
                        <div className='texts'>
                            <h3>Address</h3>
                            <p>G4, vinayak apartment, kiran bihar, mangevas road mansarovar 302020 Jaipur Rajasthan</p>
                        </div>
                    </div>
                    <div className='boxs'>
                        <div className='icons'>
                        <ion-icon name="mail"></ion-icon>
                        </div>
                        <div className='texts'>
                            <h3>Email</h3>
                            <p>info@sevenoath.com</p>
                        </div>
                    </div>
                    <div className='boxs'>
                        <div className='icons'>
                        <ion-icon name="call"></ion-icon>
                        </div>
                        <div className='texts'>
                            <h3>Phone</h3>
                            <p>+91 7357187164</p>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form onSubmit={sendMessage}>
                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input
                                type="text"
                                name='fullname'
                                required={true}
                                autoComplete='off'
                                onChange={e => setFullname(e.target.value)}
                            ></input>
                            <span>Full Name</span>
                        </div>
                        <div className='inputBox'>
                            <input
                                type="email"
                                name='email'
                                required={true}
                                autoComplete='off'
                                onChange={e=> setEmail(e.target.value)}
                            ></input>
                            <span>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea
                                type="text"
                                name='message'
                                required={true}
                                autoComplete='off'
                                onChange={e=>setMessage(e.target.value)}
                            ></textarea>
                            <span>Type your Message</span>
                        </div>
                        <div className='inputBox'>
                            <button type="submit" >Send</button>
                           
                        </div>
                    </form>

                </div>

            </div>
          
        </div>
    );
}
