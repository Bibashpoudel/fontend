import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { VenueDetails, VenueServices } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';

import data from '../data'




function VenueDetailsPage(props){
    const venue1 = data.venders.find((x) => x._id === props.match.params.id);

    const venueId = props.match.params.id;

    const dispatch = useDispatch();
   
    const DetailsVenue = useSelector((state) =>state.DetailsVenue);
    const {loading, error, venue} = DetailsVenue;
    const ServiceVenue = useSelector((state) =>state.ServiceVenue);
    const {loading_service, error_service, services}  = ServiceVenue;
    const [venueService, setvenueService] = useState(['']);
    
  
        
  const [total, setTotal] = useState(0);
  const [people, SetPeople] = useState(0)


    const [fetchService , SetFetchService] = useState([]);
    useEffect(() =>{
        dispatch(VenueServices())
        dispatch(VenueDetails(venueId));
       
        
    }, [dispatch, venueId, ] );
    

    
    
  
  const [checkedState, setCheckedState] = useState(new Array((services? services.fill(false):null)))
 
    console.log(services)
    
    // console.log(services)
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    
    
    const totalPrice = updatedCheckedState.reduce(
      (sum,  currentState, index) => {
         
        if (currentState === true) {
           
            
          if(services[index].PerPlate ===true){

            return sum + services[index].price * people;
          }
          else{
            return sum + services[index].price
          }
        }
        return sum ;
      },
      0
    );
    const finalprice  =venue.price+totalPrice
    setTotal( finalprice);

    // for adding service name
    const SelectedService = updatedCheckedState.reduce(
        (names, currentState, index) =>{
            if(currentState === true){
                return  names + services[index].name
            }
            return names;
        },
        ''

    );
    setvenueService(SelectedService)
    
   
  };


    
    const addtoCart=(e)=>{
        props.history.push(`/cart/${venueId}?people=${people}?total=${total}?services=${venueService}`)


    }
    
    

    const [IsOpen, setIsOpen] = useState(false);
    return(
        
        <div>
        {
            loading? <LoadingBox></LoadingBox>
        :
            error? <MessageBox variant="danger">{error}</MessageBox>
        :
        <div> 
        <div className="main top_center">
            <div className="col-1">
              
                    <img id="myimage"  className="large" src={venue.display_image} alt={venue.name}></img>
               
               <div className="venue_details_margin">
                   <div className="venue_details_row">
                    <div>{venue.name}</div>
                    <div>
                        
                        {/* <Rating rating={venue.rating} numReviews={venue.numReviews}></Rating> */}
                    
                        </div>
                   </div>
                   <div className="venue_details_row">
                       <span>
                       <i className="fa fa-location"></i>
                        {venue.location}
                       </span>
                   </div>
                   <div className="venue_details_row_buttom">
                        <div className="colm-4">
                            <i className="fa fa-image"></i>
                            {/* {venue.gallery.length} */}
                        </div>
                        <div className="colm-4">
                        <i className="fa fa-image"></i>
                           
                        </div>
                        <div className="colm-4">
                        <i className="fa fa-share"></i>
                           
                        
                        </div>
                        <div className="colm-4">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>

                        </div>
                   </div>
                   
               </div>
               <div className="venue_details">
                        <div className="venue_details_row">
                            <div>
                                Photos
                            </div>
                            <div>
                                About
                            </div>
                            <div>
                                Review
                            </div>
                            <div>
                               Map View
                            </div>
                        </div>
                   </div>
            </div>
            <form className="form col-2">
            <div className="">
            {
            loading_service? <LoadingBox></LoadingBox>
        :
            error_service? <MessageBox variant="danger">{error}</MessageBox>
        :
                <div className="g_service">
                    <div className="g_ser_hed">
                        <h3>
                            Available Services
                        </h3>
                    </div>
                    {
                        services.map((serv, index) =>(
                           
                            <div key={serv.id} className="Ven_service">
                        <div className="dts_service">
                           <div className="dts_col_1">
                                {serv.PerPlate? (
                                    <span>
                                        {/* <i className="fa fa-plus"></i> */}

                                        <div className="tooltip">
                                            <input className="tooltip"
                                            type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                name={serv.name}
                                                value={serv.name}
                                                checked={serv[index]}
                                                onChange={() => handleOnChange(index)}
                                            />
                                       
                                            <span class="tooltiptext">First Enter the number of guest and click me</span>
                                        </div>
                                    </span>

                                ):
                                    <span>
                                    {/* <i className="fa fa-plus"></i> */}

                                
                                    <input
                                    type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={serv.service}
                                        value={serv.service}
                                        checked={serv[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                </span>
                                }
                               <span>
                               <label htmlFor={`custom-checkbox-${index}`}>{serv.service}</label>
                               </span>
                               <span>
                                   {serv.price}
                                   {
                                       serv.PerPlate ? (
                                           <span> Per Plate</span>
                                       ):
                                       <span></span>
                                   }
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
                                
                                {
                                    serv.PerPlate ? (
                                        <span  className={IsOpen ? 'open' : ''}>
                                        <input type="number" placeholder="no of guest eg(50)" onChange={(e) =>SetPeople(e.target.value)}></input>
                                    </span>

                                    
                                    ):
                                    <span></span>
                                }
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
                        <div className="ven_price_loc">
                            <div>
                                final Price
                            </div>
                            <div>
                                
                                   {total}
                                
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
                            <button className="secondary block" onClick={addtoCart}>Continue</button>
                        </div>
                        <div className ="single_row">
                                <input type="text" placeholder="leave a comment"></input>
                        </div>
                    </div>
                </div>
}
            </div>
            </form>
            
        </div>
        <div className="main top">
                        <div className="venue_details_row">
                            <div>
                                Photos
                            </div>
                            <div>
                                About
                            </div>
                            <div>
                                Review
                            </div>
                            <div>
                               Map View
                            </div>
                        </div>
        </div>
        

    
        </div>
}
</div>
    )
}

export default VenueDetailsPage;