import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceDetails } from '../../Action/ServicesAction';
import MessageBox from '../../components/MessageBox';
export default function OrderSCard(props) {
   
    const {services} = props;

    const serviceDetails = useSelector((state) =>state.serviceDetails);
    const {loading, error, serviceD} = serviceDetails;
    const dispatch = useDispatch();
    
    useEffect(()=> {
        dispatch(ServiceDetails(services));

    },[dispatch, services])
  return <div>
     {loading ? <div></div>
    :
    error ? <MessageBox>{error} </MessageBox>
  
  :
    <div>
      
   
        <div  className='order-Card'>
          <div>
            <img className='small' src={serviceD.display_image} alt={serviceD.name}></img>
          </div>          
          <div>{serviceD.name}</div>
          <div>
            {serviceD.display_price}
          </div>
        </div>
     
    </div>
}
  </div>;
}
