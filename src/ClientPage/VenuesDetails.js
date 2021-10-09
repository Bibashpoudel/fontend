import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ServicesListaction } from '../Action/ServicesAction';
import { VenueDetails } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-scroll'




function VenueDetailsPage(props){
    // const venue1 = data.venders.find((x) => x._id === props.match.params.id);

    const venueId = props.match.params.id;

    const dispatch = useDispatch();
   
    const DetailsVenue = useSelector((state) =>state.DetailsVenue);
    const {loading, error, venue} = DetailsVenue;
    
    const venueService =useSelector(state =>state.venueService);
    const {loading:loading_service, error:error_service, vService} = venueService;


    const [serviceADD, setserviceADD] = useState(['']);
    const [total, setTotal] = useState(0);
    const [people, SetPeople] = useState(0)
    

   
    useEffect(() =>{
        
        
        
        dispatch(VenueDetails(venueId));
       
      
        dispatch(ServicesListaction(venueId))
       
       
        
    }, [dispatch, venueId] );
    

    
    
  
  const [checkedState, setCheckedState] = useState([false, false, false,false])
 
    console.log(checkedState)
    
    // console.log(services)
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    
    
    const totalPrice = updatedCheckedState.reduce(
      (sum,  currentState, index) => {
         
        if (currentState === true) {
           
            const calcpric = parseInt(vService[index].display_price);

          if(vService[index].is_true ===true){

            

            return sum +  calcpric * people;
          }
          else{
            return sum + calcpric;
          }
        }
        return sum ;
      },
      0
    );
    const venueprice = parseInt(venue.display_price);
    const finalprice  = venueprice + totalPrice;
    setTotal( finalprice);

    // for adding service name
    const SelectedService = updatedCheckedState.reduce(
        (names, currentState, index) =>{
            if(currentState === true){
                return  names = names + " "+ vService[index].name;
            }
            return names;
        },
        ''

    );
    setserviceADD(SelectedService)
    
   
  };


    
    const addtoCart=()=>{
        
        props.history.push(`/cart/${venueId}/people=${people}/total=${total}/services=${serviceADD}`);
        // ?total=${total}?services=${serviceADD}

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
                               <Link to='photo' activeStyle={{color: "red"}} activeClass="active" style={{color:'black',cursor:'pointer'}} spy={true} smooth={true}>Photo</Link>
                            </div>
                            <div>
                               <Link to ='about' activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>About</Link>
                            </div>
                            <div>
                                <Link to='features'  activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Features</Link>
                            </div>
                            <div>
                              <Link to="reviews"  activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Reviews</Link>
                            </div>
                        </div>
                   </div>
            </div>
            <form className="form col-2">
            <div className="">
            {
            loading_service? <LoadingBox></LoadingBox>
        :
            error_service? <MessageBox variant="danger">{error_service}</MessageBox>
        :
                <div className="g_service">
                    <div className="g_ser_hed">
                        <h3>
                            Available Services
                        </h3>
                    </div>
                    {
                        vService.map((serv, index) =>(
                           
                            <div key={serv.id} className="Ven_service">
                        <div className="dts_service">
                           <div className="dts_col_1">
                                {serv.is_true? (
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
                                        name={serv.name}
                                        value={serv.name}
                                        checked={serv[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                </span>
                                }
                               <span>
                               <label htmlFor={`custom-checkbox-${index}`}>{serv.name}</label>
                               </span>
                               <span>
                                   {serv.display_price}
                                   {
                                       serv.is_true ? (
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
                                    serv.is_true ? (
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
                                
                                    {venue.display_price}
                                                                    
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
                        <div className="venue_details_row-bottom">
                            <div className="photos" id ="photo">
                                <div className="image">
                                        images
                                </div>
                                <div className="video">
                                        video
                                </div>
                            </div>
                            <div id="about">
                               <h4> About Venues</h4>
                                {venue.about}
                            </div>
                            <div id="features">
                               <h4> Venues Features</h4>
                                {venue.features}
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