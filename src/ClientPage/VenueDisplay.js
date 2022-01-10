import React from "react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { VenueTypeParticularList } from "../Action/VenueAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Venue from "../components/venues";
import './VenueDisplay.scss'

export default function VenueDisplay(props) {
  const typeid = props.match.params.id;
  console.log(typeid)
  const typeList = useSelector(state => state.typeList);
  const {loading, error, particulartypeVenue} = typeList;


  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(VenueTypeParticularList(typeid))
  }, [dispatch, typeid])

  return (
   
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-8 col-md-3">
              <select className="form-select rounded-0 mt-2 mb-2">
                <option value={""}>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div className="w-100" />
    {
      loading ?<LoadingBox></LoadingBox>
      :
      error ? <MessageBox>{error}</MessageBox>
      :
    
            <div className="row-flex" >
            {particulartypeVenue.map((venue) => (
              
              <div className="col-xl-3 col-lg-4 col-6" >
                <Venue  venue={venue} key={venue.id}/>
              </div>
            
          ))}
            </div>
}
          </div>
        </div>
      </div>
    
  );
}