import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VendorCityList } from '../Action/vendorAction';
import { CityVenueList, VenueList } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Venue from '../components/venues';

export default function VenueLists() {
    const Listvenue =  useSelector((state) => state.Listvenue);
  const { loading, error, venues } = Listvenue
  const VendorCitys = useSelector((state) => state.VendorCitys);
  const { error: city_error, citys } = VendorCitys;
  const CityVenue = useSelector(state => state.CityVenue)
    const {loading:cityloading, error:cityerror, cityvenue} = CityVenue;
  const dispatch = useDispatch();
  const [CityId, setCityId] = useState('all')
 
    useEffect(() =>{
      if (CityId === 'all') {
        dispatch(VenueList());
        dispatch(VendorCityList());
       }
      
      else {
       
        dispatch(CityVenueList(CityId))
      }

      
      
      
       
    },[CityId, dispatch])
  return (

  
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-8 col-md-3">
            {city_error && <MessageBox>{city_error.message}</MessageBox>}
            {
              citys ?
                <select className="form-select rounded-0 mt-2 mb-2" onChange={e => setCityId(e.target.value)}>
                  <option value={"all"}>Select City</option>
                  {citys.map(c => (
              
                    <option key={c.id} value={c.id}>{c.city}</option>
                  ))}
                </select>
                : <select className="form-select rounded-0 fs-17"><option value={""}>Loading</option></select>
            }
          </div>
       
          <div className="w-100" />
          {
            loading ? <LoadingBox></LoadingBox>
              :
              error ? <MessageBox>{error}</MessageBox>
                :
                cityloading ? <LoadingBox></LoadingBox>
                  :
                  cityerror ? <MessageBox>{cityerror}</MessageBox>
                    :
                

                    <div className="row-flex" >
                      {
                        CityId === 'all' ?
                          <>
                            {venues.map((venue) => (
        
                              <div className="col-xl-3 col-lg-4 col-6" key={venue.id} >
                                <Venue venue={venue} key={venue.id} />
                              </div>
                            ))}
                          </>
                          :
                          <>
                            {cityvenue.map((venue) => (
        
                              <div className="col-xl-3 col-lg-4 col-6" key={venue.id}>
                                <Venue venue={venue} key={venue.id} />
                              </div>
                            ))}
                          </>
                      }
      
   
                    </div>
          }
        </div>
      </div>
    </div>

  );
}
