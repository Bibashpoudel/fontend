import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { VendorCityList } from '../Action/vendorAction';
import { CityVenueList, VenueList } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Venue from '../components/venues'
import './CityVenue.scss'

export default function CityVenue(props) {

    const Cityid =props.match.params.id;

    const CityVenue = useSelector(state => state.CityVenue)
    const { loading, error, cityvenue } = CityVenue;
    const VendorCitys = useSelector((state) => state.VendorCitys);
  const { error: city_error, citys } = VendorCitys;
  const Listvenue =  useSelector((state) => state.Listvenue);
  const { loading:ven_loading, error:ven_error, venues } = Listvenue

    const dispatch = useDispatch();
    const [CityId, setCityId] = useState('all')

    useEffect(() => {
        if (CityId === 'all'){
          dispatch(VenueList());
          dispatch(VendorCityList());
      }
      dispatch(CityVenueList(Cityid))
        
       
    }, [dispatch, CityId, Cityid])
    return (
        <div className="container-fluid">
        <div className="container">
          <div className="row">
              <div className="col-8 col-md-3">
              {city_error && <MessageBox>{ city_error.message}</MessageBox>}
                {
                  citys ?
                    <select className="form-select rounded-0 mt-2 mb-2"  onChange={e=>setCityId(e.target.value)}>
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
              ven_loading ? " " :
                ven_error ? <MessageBox>{error}</MessageBox>
                  :
          loading ?<LoadingBox></LoadingBox>
                            :
                            
                                
          error ? <MessageBox>{error.message}</MessageBox>
                      
                        :
                      
            
                        <div className="row-flex" >
                        {
                          CityId === 'all' ?
                          <>
                              {venues.map((venue) => (
              
                      <div className="col-xl-3 col-lg-4 col-6"  key={venue.id} >
                        <Venue  venue={venue} key={venue.id}/>
                                </div>
                                 ))}
                          </>
                      :
                          <>
                              {cityvenue.map((venue) => (
              
                      <div className="col-xl-3 col-lg-4 col-6"  key={venue.id}>
                        <Venue  venue={venue} key={venue.id}/>
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