import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";


 function Venue(props){
    const {venue} = props;
    return(
      <div className="row align-items-center"  style={{margin:'0'}}>
      <div className="col-12">
       <Link to={`/venue/${venue.id}`}>
       <img
           src={venue.display_image}
          className="img-fluid"
          alt="img"
          style={{ width: "100%" }}
        />
       </Link>
      </div>
      <div className="col pb-4 card-text ps-3" >
        <Link  style={{color:"black"}} to={`/venue/${venue.id}`}>{venue.name}</Link>
        <div>Location: {venue.city[1]}</div>
      </div>
      <div className="col-auto text-center pb-4 pe-4 card-text">Price: {venue.display_price}</div>
    </div>
    )
}

export default Venue;