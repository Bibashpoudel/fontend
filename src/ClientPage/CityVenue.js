import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { CityVenueList } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Venue from '../components/venues'
import './CityVenue.scss'

export default function CityVenue(props) {

    const CityId =props.match.params.id;

    const CityVenue = useSelector(state => state.CityVenue)
    const {loading, error, cityvenue} = CityVenue;
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(CityVenueList(CityId))
    }, [dispatch, CityId])
    return (
        <div>
         {
                loading? <LoadingBox></LoadingBox>
            :
                error? <MessageBox variant="danger">{error}</MessageBox>
            :  
                <div className="City_Venue">
                    {
                        cityvenue.map((venue)=>(
                            <Venue key={venue.id} venue={venue}></Venue>

                        ))
                    }
                </div>
            }
        </div>
    )
}
