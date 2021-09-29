import React, { useEffect } from 'react'


import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux';
import { VenueList } from '../Action/VenueAction';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Venue from './venues.js'


function TrendingSlider( ){

    const dispatch = useDispatch();


    const Listvenue =  useSelector((state) => state.Listvenue);
    const {loading, error, venues} = Listvenue

    useEffect(() =>{
       
        dispatch(VenueList());
    

    }, [ dispatch]);
  
    return(
     
           
           <div  >
                {
                            loading? <LoadingBox></LoadingBox>
                        :
                            error? <MessageBox variant="danger">{error}</MessageBox>
                        :  
             
              <Carousel itemsToShow={2} itemsToScroll={2}>
              {
                                venues.map((venue)=>(
                                    <Venue key={venue.id} venue={venue}></Venue>
    
                                ))
                                }
              </Carousel>
}
           </div>

       
    )
}
export default TrendingSlider;