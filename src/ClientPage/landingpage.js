import React, { useEffect, useState } from 'react'
import pwed from '../images/pwed.png'
;

import Categories from '../components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { VendorCityList } from '../Action/vendorAction';
import MessageBox from '../components/MessageBox';

import "./Home.scss";

import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";



import { TrendingVenueList, VenueList } from '../Action/VenueAction';
import { ServicesList, TrendingServicesList } from '../Action/ServicesAction';
import Venue from '../components/venues';
SwiperCore.use([Autoplay, Pagination, Navigation]);
function LandingPage(props){

    const [ city, setCity] = useState()
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const { error:city_error, citys} = VendorCitys;
    const ListTrendingVenue =  useSelector((state) => state.ListTrendingVenue);
    const {loading, error, Tvenues} = ListTrendingVenue
    const trendingservicelist = useSelector(state => state.trendingservicelist);
    const {loading:loading_ser, error:error_ser,Tservices} = trendingservicelist

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(VendorCityList());
        dispatch(TrendingVenueList());
        dispatch(TrendingServicesList())
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
                  {city_error && <MessageBox>{ city_error.message}</MessageBox>}
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
            <div className="mgall">
                <div className="wg2_title">
                    Wedding Gallery
                </div>
                <div className="pto_section">
                  <div className="pto_section_column1">
                      <div className="pto_sec_col1_content">
                        <div className="pto_sec_col1_text">
                            Browse 100+ wedding photos
                            
                        </div>
                        <div>
                            <button>
                                Explore More
                            </button>
                        </div>
                      </div>
                  </div>
                  <div className="pto_section_column2">
                      <img className="pto_section_image"src={pwed} alt="wed"></img>
                  </div>
                </div>

            </div>
            <div className="mgall">
                <div className="trend_text" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" }}>
                    <div>
                    Trending Now
                    </div>
                   <div>
                   Show All
                   </div>
                </div>
                <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            
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
           : error ? <MessageBox variant="danger">{error.message}</MessageBox>
           :


           <span>
           {
              Tvenues ? 
                Tvenues.map((item) =>(
              <SwiperSlide key={item.id}>
                
                <Venue venue={item} key={item.id}></Venue>
              </SwiperSlide>
            
                ))
              :<span>No Venues </span>
              }
           </span>
}
          </Swiper>
                    
          <div className="row align-items-end" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" }}>
            <div className="col">
              Services
            </div>
            <div className="col-auto" style={{ fontSize: "1.2rem" }}>
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
          : error_ser ? <MessageBox variant="danger">{error_ser.message}</MessageBox>
          :
          <span>
          {
              Tservices ? 
              Tservices.map((service) =>(
              <SwiperSlide key={service.id}>
                
                <Card service={service} key={service.id}></Card>
              </SwiperSlide>
            
                ))
              :<span>No services</span>
              
              }
          </span>
          }
          
          </Swiper>
                
                        
            </div>
            
        </div>
    )
    
}

export default LandingPage;