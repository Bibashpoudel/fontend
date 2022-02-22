import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CityServiceList, ServicesList } from '../Action/ServicesAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Card from "../components/Card";
import { VendorCityList } from '../Action/vendorAction';

export default function ServiceLists() {


    const [cityId, setCityId] = useState('all')
    
    const servicelist = useSelector(state => state.servicelist);
    const { loading, error, services } = servicelist
    const CityService = useSelector(state => state.CityVenue)
    const { loading: cityloading, error: cityerror, cityservice } = CityService;
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const { error: city_error, citys } = VendorCitys;
    const dispatch = useDispatch();
    useEffect(() => {
        if (cityId === 'all') {
            dispatch(VendorCityList());
            dispatch(ServicesList())
        }
        else {
            dispatch(CityServiceList(cityId))
        }
       
        
    },[cityId, dispatch])
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
                                    {cityId === 'all' ?
                                        <>
                                            {services.map((service) => (
                    
                                                <div className="col-xl-3 col-lg-4 col-6" >
                                                    <Card venue={service} key={service.id} />
                                                </div>
        
                                            ))}
                                        </>
                                        :
                                        <>
                                            {cityservice.map((service) => (
        
                                                <div className="col-xl-3 col-lg-4 col-6" key={service.id}>
                                                    <Card venue={service} key={service.id} />
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
