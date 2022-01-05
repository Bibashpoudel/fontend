import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import "./Card.scss";
import Card from '../assets/card.png'

 function Service(props){
    const {service} = props;
   
    return(
      <div className="row align-items-center"  >
      <div className="col-12">
        <Link to={`/service/${service.id}`}>
          <img
            src={Card}
            className="img-fluid"
            alt="img"
            style={{ width: "100%" }}
          />
        </Link>
      </div>
      <div className="col pb-4 card-text ps-3" >
        {service.name}
        <div>{}</div>
      </div>
      <div className="col-auto text-center pb-4 pe-4 card-text">{service.display_price}</div>
    </div>
    )
}

export default Service;