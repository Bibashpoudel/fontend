import React from 'react'
import data from '../data'
import Venue from './venues'

import Carousel from 'react-elastic-carousel'



function GallerySlider(props ){

    const {venue} = props;
    return(
     
           
           <div  >
             
              <Carousel itemsToShow={3} itemsToScroll={3}>
              
                           
                    { venue.gallery.map(img =>(
                                <img src={img.g_image} className="small" alt='gallery' ></img>
                           
                    ))}
                     
                  
               
              </Carousel>
            
           </div>

       
    )
}
export default GallerySlider;