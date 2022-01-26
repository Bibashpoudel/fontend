import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.scss";
import Rating from './Rating'
import Card from '../images/pwed.png'

 function Venue(props){
    const {venue} = props;
    return(
      <div className="row align-items-center card-design"  style={{margin:'0'}}>
      <div className="col-12">
       <Link to={`/venue/${venue.id}`}>
       <img
           src={Card}
          className="img-fluid"
          alt="img"
          style={{ width: "100%" }}
        />
       </Link>
      </div>
      <div className="col pb-4 card-text ps-3" >
        <Link  style={{color:"black"}} to={`/venue/${venue.id}`}>{venue.name}</Link>
        <div >
          Location: {' '}
          <span className='sub-text'>
            {venue.city.city}
          </span>
        </div>
      </div>
      <div className="col-auto text-center pb-4 pe-4 card-text start-texts">
        <div >
          Price: <span className='sub-text'>{venue.display_price}</span>
        </div>
        <div style={{fontSize:'1.7rem'}}>
          <Rating rating={venue.rating} numReviews={venue.no_of_user}></Rating>
        </div>
      </div>
    </div>
    )
}

export default Venue;