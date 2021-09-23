import React, { useState } from 'react'
import GallerySlider from '../components/item';
import data from '../data';




function VenueDetailsPage(props){
    const venue = data.venders.find((x) => x._id === props.match.params.id);



    const [IsOpen, setIsOpen] = useState(false);
    return(
        <div className="main top">
            <div className="col-1">
               <div>
                    <img id="myimage"  className=" large" src={venue.image} alt={venue.name}></img>
               </div>
               <div className="">
                   
                   
                           <GallerySlider key={venue._id} venue={venue}></GallerySlider>
                           
             
                      
                       
                

               </div>
            </div>
            <div className="col-2">
                <div className="g_service">
                    <div className="g_ser_hed">
                        <h3>
                            Available Services
                        </h3>
                    </div>
                    {
                        venue.service.map((serv) =>(
                            <div className="Ven_service">
                        <div className="dts_service">
                           <div className="dts_col_1">
                                <span>
                                    <i className="fa fa-plus"></i>
                                </span>
                               <span>
                                    {serv.name}
                               </span>
                               <span>
                                   {serv.price}
                               </span>
                           </div>
                           <div className="dts_col_2">
                                <span className={IsOpen ? 'hide_content' : ''}>
                                
                                    <span >
                                            <i className ="fa fa fa-angle-down"
                                                    onClick={() => setIsOpen(true)}
                                            ></i>

                                    </span>
                               </span>
                               <span className="hide_content">
                               <span className={IsOpen ? 'open' : ''}>
                               <i className ="fa fa fa-angle-up"
                                    onClick={() => setIsOpen(false)}
                               ></i>
                               </span>
                               </span>

                              
                           </div>
                        </div>
                        <div className="hide_content dts_desc">
                            <span className={IsOpen ? 'open' : ''}>
                                
                                    {serv.description}
                                
                            </span>
                        </div>
                        

                    </div>

                        ))
                    }
                    
                    <div className="g_details">
                        <div className="ven_price_loc">
                            <div>
                                Price
                            </div>
                            <div>
                                
                                    {venue.price}
                                
                            </div>
                        </div>
                        <div className="ven_price_loc">
                            <div>
                                Location
                            </div>
                            <div>
                                
                                    {venue.location}
                                
                            </div>
                        </div>
                        

                    </div>
                    <div className="g_details">
                        <div className="ven_price_loc">
                            <div>
                                Start Date
                            </div>
                            <div>
                                
                                    Number of days
                                
                            </div>
                            <div>
                                Search Availablity
                            </div>
                        </div>
                        
                        <div className="single_row">
                            <button className="secondary block" >Book Now</button>
                        </div>
                        <div className ="single_row">
                                <input type="text" placeholder="leave a comment"></input>
                        </div>
                           
                        
                        

                    </div>
                </div>
            </div>

        </div>
    )
}

export default VenueDetailsPage;