import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import GallerySlider from '../components/item';
import data from '../data';




function VenueDetailsPage(props){
    const venue = data.venders.find((x) => x._id === props.match.params.id);

    const productId = props.match.params.id;

    const [service, SetService] = useState(
        new Array(venue.service.length).fill(false)
    )

        
  const [total, setTotal] = useState(0);
  const [people, SetPeople] = useState()
 

  const handleOnChange = (position) => {
    const updatedCheckedState = service.map((item, index) =>
      index === position ? !item : item
    );

    SetService(updatedCheckedState);
    
    
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
         
        if (currentState === true) {
          if(venue.service[index].PerPlate ===true){

            return sum + venue.service[index].price * people;
          }
        }
        return sum;
      },
      0
    );
    const finalprice  =venue.price+totalPrice

    setTotal( finalprice);
   
  };


    
    const addtoCart=(e)=>{
        e.preventDefault();
        console.log(service)
        // dispatch(addtoCart(productId ))

    }
    

     
    
   
    

   

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
            <form>
            <div className="col-2">
                <div className="g_service">
                    <div className="g_ser_hed">
                        <h3>
                            Available Services
                        </h3>
                    </div>
                    {
                        venue.service.map((serv, index) =>(
                           
                            <div key={serv._id} className="Ven_service">
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
                                                checked={service[index]}
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
                                        checked={service[index]}
                                        onChange={() => handleOnChange(index)}
                                    />
                                </span>
                                }
                               <span>
                               <label htmlFor={`custom-checkbox-${index}`}>{serv.name}</label>
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
            </div>
            </form>
        </div>
    )
}

export default VenueDetailsPage;