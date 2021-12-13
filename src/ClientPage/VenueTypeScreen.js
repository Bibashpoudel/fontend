import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { VenueTypeParticularList } from '../Action/VenueAction'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import Venue from '../components/venues'
export default function VenueTypeScreen(props) {


    const typeId = props.match.params.id;
    const typeList = useSelector(state => state.typeList)
    const {loading, error, particularVenue} = typeList

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(VenueTypeParticularList(typeId))
    }, [dispatch, typeId])
    return (
        
        <div>
            {loading ? <LoadingBox></LoadingBox>
            :error ? <MessageBox variant="danger">{error}</MessageBox>
            :
            <div>
                { particularVenue.length === 0 && (<MessageBox>Venue Not Found <Link to="/" style={{color:'red'}}>Go back</Link></MessageBox>)}
                <div className="City_Venue">
                    {
                        particularVenue.map((venue)=>(
                            <Venue key={venue.id} venue={venue}></Venue>

                        ))
                    }
                </div>
            </div>
}
               
        </div>
    )
}
