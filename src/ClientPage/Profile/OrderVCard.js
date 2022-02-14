import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VenueDetails } from '../../Action/VenueAction';
import MessageBox from '../../components/MessageBox';

export default function OrderVCard(props) {
  const { venues } = props;
  const { details } = props;
    const DetailsVenue = useSelector((state) =>state.DetailsVenue);
    const {loading, error, venue} = DetailsVenue;
    const dispatch = useDispatch();
    
    useEffect(()=> {
      dispatch(VenueDetails(venues));

    },[dispatch, venues])
   
  return <div>
    {loading ? <div></div>
    :
    error ? <MessageBox>{error} </MessageBox>
  :
    <div>
      
   
        <div  className='order-Card'>
          <div>
            <img className='small' src={venue.display_image} alt={venue.name}></img>
          </div>          
            <div style={{ display:'flex', flexDirection:'column', fontSize:'1.5rem'}}>
              <span > Venue Name: <span style={{color:'#c0c0c0'}}>{venue.name}</span></span>
              <span> From: <span style={{color:'#c0c0c0'}}>{details.from}</span></span>
              <span> To: <span style={{color:'#c0c0c0'}}>{details.to}</span></span>
          </div>
          <div>
            Rs:  {venue.display_price}
          </div>
        </div>
     
    </div>
}
  </div>;
}
