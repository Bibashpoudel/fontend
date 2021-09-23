import React from 'react'
import data from '../data'
import Venue from './venues'

import Carousel from 'react-elastic-carousel'



function TrendingSlider( ){

  
    return(
     
           
           <div  >
             
              <Carousel itemsToShow={3} itemsToScroll={3}>
               {
                            data.venders.map((venue)=>(
                                <Venue key={venue._id} venue={venue}></Venue>
 
                            ))
                            }
             
               
              </Carousel>
            
           </div>

       
    )
}
export default TrendingSlider;