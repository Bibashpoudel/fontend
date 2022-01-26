import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServicesList } from '../Action/ServicesAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Card from "../components/Card";

export default function ServiceLists() {
    const servicelist = useSelector(state => state.servicelist);
    const {loading, error,services} = servicelist
    const dispatch = useDispatch();
    useEffect(() =>{
       
        dispatch(ServicesList())
    },[dispatch])
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
                            {services.map((service) => (
                            
                            <div className="col-xl-3 col-lg-4 col-6" >
                                <Card  venue={service} key={service.id}/>
                            </div>
                            
                        ))}
                </div>
                }
            </div>
        </div>
    </div>
  
  );
  }
