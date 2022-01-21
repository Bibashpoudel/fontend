import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VenueDetails } from '../../Action/VenueAction';
import MessageBox from '../../components/MessageBox';

export default function OrderVCard(props) {
    const {venues} = props;

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
          <div>{venue.name}</div>
          <div>
            Rs:  {venue.display_price}
          </div>
        </div>
     
    </div>
}
  </div>;
}
