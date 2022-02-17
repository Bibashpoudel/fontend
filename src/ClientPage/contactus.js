import React from 'react'
import './contactus.scss'

export default function Contactus() {
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
                            <p></p>
                        </div>
                    </div>
                    <div className='boxs'>
                        <div className='icons'>
                        <ion-icon name="mail"></ion-icon>
                        </div>
                        <div className='texts'>
                            <h3>Email</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className='boxs'>
                        <div className='icons'>
                        <ion-icon name="call"></ion-icon>
                        </div>
                        <div className='texts'>
                            <h3>Phone</h3>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='contactForm'>
                    <form>
                        <h2>Send Message</h2>
                        <div className='inputBox'>
                            <input type="text" name='' required={true}></input>
                            <span>Full Name</span>
                        </div>
                        <div className='inputBox'>
                            <input type="text" name='' required={true}></input>
                            <span>Email</span>
                        </div>
                        <div className='inputBox'>
                            <textarea type="text" name='' required={true}></textarea>
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
