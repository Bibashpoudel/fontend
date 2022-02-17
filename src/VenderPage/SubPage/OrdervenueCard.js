import React from 'react'
import Popup from 'reactjs-popup';
import './order.scss'

export default function OrdervenueCard(props) {
    // document.getElementById('myModal').on('shown.bs.modal', function () {
    //     document.getElementById('myInput').trigger('focus')
    //   })
    

   
    const {venue} = props
    return (
     
        <>
              <tr>  
                
                <td>
                    <Popup
                        trigger={ <span style={{color:"blue", cursor:'pointer'}}>{venue.order.user.fullname}</span>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modals">
                            <button className="closes" onClick={close}>
                            &times;
                            </button>
                                <div className="headers"> { venue.order.user.fullname} { ' '} Details </div>
                            <div className="contents">
                            {' '}
                            FullName: {venue.order.user.fullname}
                            <br />
                            Email :  {venue.order.user.email}
                            <br/>
                            Phone Number : {venue.order.user.mobile}
                            </div>
                            
                        </div>
                        )}
                    </Popup>
                </td>
            
                <td>{venue.From}</td>
                <td>{venue.To}</td>
                <td >
                <Popup
                        trigger={ <span style={{color:"blue", cursor:'pointer'}}>{venue.venue.name}</span>}
                        modal
                        nested
                    >
                        {close => (
                        <div className="modals">
                            <button className="closes" onClick={close}>
                            &times;
                            </button>
                                <div className="headers"> { venue.venue.name} { ' '} Details </div>
                            <div className="contents">
                                    {' '}
                                    <img className='small' src={ venue.venue.display_image} alt={venue.venue.name}></img>
                                    {'  '}
                            Name: {venue.venue.name}
                            <br />
                              
                            <br/>
                            Price : {venue.venue.display_price}
                            </div>
                            
                        </div>
                        )}
                    </Popup>
                </td>
                <td>{venue.order.status}</td>
                <td>{venue.order.totalPrice}</td>
            </tr>
         
        </>
        
    
  )
}
