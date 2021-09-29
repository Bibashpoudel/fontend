import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';


 function Venue(props){
    const {venue} = props;
    return(
        <div key={Venue._id} className="card">
                    
                      <Link to={`/venue/${venue.id}`}>
                        <img className="medium" src={venue.display_image} alt ={Venue.name}></img>
                      </Link>
                      <div className="card-body">
                        
                          <Link to={`/venue/${venue.id}`}>
                              <h2 >
                                {venue.name}
                              </h2>
                          </Link>
                          <Rating rating={venue.rating} numReviews={venue.numReviews}></Rating>
                        
                        
                        {/* <div className="price">
                            Price: {Venue.price}
                        </div> */}
                    </div>
                  </div>
    )
}

export default Venue;