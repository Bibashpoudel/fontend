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
          <Rating rating={venue.rating} numReviews={venue.no_of_user}></Rating>
       <img
           src={Card}
          className="img-fluid"
          alt="img"
          style={{ width: "100%" }}
        />
       </Link>
      </div>
        <div className="card-data">
        <div className="col  card-text " >
        <Link className='show-less' style={{color:"black"}} to={`/venue/${venue.id}`}>{venue.name}</Link>
        <div className='col '>
          Location: {' '}
          <span className='sub-text'>
            {venue.city.city}
          </span>
        </div>
      </div>
      <div className="col-auto text-center card-text start-texts">
        <div >
          Price: <span className='sub-text'>{venue.display_price}</span>
        </div>
        <div style={{fontSize:'1.7rem'}}>
         
        </div>
      </div>
      </div>
    </div>
    )
}

export default Venue;