import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

export default function VenueEdit(props) {
         const venueId = props.match.params.id;
         

          
    const [Name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [displayprice, SetDisplayPrice] = useState('');
    const [city, setCity] = useState();
    const [venue_type, setVenueType] = useState('');
    const [image, setImage] = useState('');
    const [about, setAbout] = useState('');
    const [features, setFeatures] = useState('');

    const dispatch = useDispatch();
    
    useEffect(() => {
        
       
        
    }, [])

    return (
        <div>
            
        </div>
    )
}
