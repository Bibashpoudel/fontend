import React, { useEffect, useState } from 'react'

import "./Home.scss";
import Gallery from "../assets/wp.png";
import Categories from '../components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { VendorCityList } from '../Action/vendorAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";



import { VenueList } from '../Action/VenueAction';
import { ServicesList } from '../Action/ServicesAction';
import Venue from '../components/venues';




SwiperCore.use([Autoplay, Pagination, Navigation]);
function NewLanding(props){

    const [ city, setCity] = useState()
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;
    const Listvenue =  useSelector((state) => state.Listvenue);
    const {loading, error, venues} = Listvenue
    const servicelist = useSelector(state => state.servicelist);
    const {loading:loading_ser, error:error_ser,services} = servicelist

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(VendorCityList());
        dispatch(VenueList());
        dispatch(ServicesList())
    },[dispatch])
    const Venuehandaler = ()=>{
        props.history.push(`/city/venue/${city}`)
        
    }
    return(
        <div className="land-top">
            <div className="main ">
                <div className="ms1_search" >
                    {/* <img src={pictures} alt="pictures"></img> */}
                    <div className="ms1_text">
                      <h1>Select best venues for your wedding</h1>
                        <div className="mt-3">
                            <div className="d-inline-flex">
                                {
                                citys ?
                                <select className="form-select rounded-0" onChange={e=>setCity(e.target.value)}>
                                    <option value={""}>Select City</option>
                                    {citys.map(c=>(
                                    <option key={c.id} value={c.id}>{c.city}</option>
                                    ))}
                                </select>
                                :<select className="form-select rounded-0"><option value={""}>Loading</option></select>
                                }
                            
                            </div> 
                            <div className="d-inline-flex">
                                <button
                                onClick={Venuehandaler}
                                type="button"
                                className="btn rounded-0 text-light"
                                style={{
                                    backgroundColor: "rgba(255, 0, 56, 0.77)",
                                    border: "1px solid rgba(255, 0, 56, 0.77)",
                                }}
                                >
                                Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style={{height: "11.67px"}}/>
            <div className="row mglr-6" >
            <div
              className="col-12"
              style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" }}
            >
              Wedding Gallery
            </div>
            <div className="w-100 mt-4" />
            <div
              className="col-6"
              style={{ backgroundColor: "rgba(212, 19, 62, 0.26)" }}
            >
              <div className="row h-100 align-items-center">
                <div className="col text-center browse mt-sm-0 mt-3 mb-sm-0 mb-3 fs-5">
                  Browse 100+ wedding photos
                  <div className="mt-2">
                    <button
                      className="btn"
                      style={{ border: "1px solid rgba(212, 19, 62, 0.77)" }}
                    >
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6  p-0">
              <img className="img-fluid w-100 h-100" src={Gallery} alt="gallery" />
            </div>
          </div>
            <div className="mglr-6">
                <div className="trend_text ">
                    <div>
                    <h2>Trending Now</h2>
                    </div>
                   <div>
                   <h2>Show All</h2>
                   </div>
                </div>
                  
                <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            autoplay={{
              "delay": 2500,
              "disableOnInteraction": false }}
              pagination={{
                "clickable": true }}
                breakpoints={{
                  "0": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                  },
                  "768": {
                    "slidesPerView": 3,
                    "spaceBetween": 40
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 50
                  }
                }}
            className="mySwiper mt-4 mb-2"
          >
            {
              loading ? <div>Loading</div>
           : error ? <MessageBox variant="danger">{error}</MessageBox>
           :


           <span>
           {
              venues ? 
                venues.map((item) =>(
              <SwiperSlide>
                
                <Venue venue={item} key={item.id}></Venue>
              </SwiperSlide>
            
                ))
              :<span>bibash</span>
              }
           </span>
}
          </Swiper>

          <div className="row align-items-end" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" }}>
            <div className="col">
              Services
            </div>
            <div className="col-auto" style={{ fontSize: "1rem" }}>
              See All
            </div>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            // autoplay={{
            //   "delay": 2500,
            //   "disableOnInteraction": false }}
              pagination={{
                "clickable": true }}
                breakpoints={{
                  "0": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                  },
                  "768": {
                    "slidesPerView": 3,
                    "spaceBetween": 40
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 50
                  }
                }}
            className="mySwiper mt-4 mb-2"
          >
            {
              loading_ser ? <div>Loading</div>
           : error_ser ? <MessageBox variant="danger">{error}</MessageBox>
           :
           <span>
           {
              services ? 
              services.map((service) =>(
              <SwiperSlide>
                
                <Card service={service} key={service.id}></Card>
              </SwiperSlide>
            
                ))
              :<span>bibash</span>
              
              }
           </span>
}
           
          </Swiper>
                
                        
            </div>
            <div>
                    <Categories></Categories>
            </div>
        </div>
    )
    
}

export default NewLanding;