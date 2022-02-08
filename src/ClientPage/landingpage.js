import React, { useEffect, useState } from 'react'
import pwed from '../images/pwed.png'
;

import { useDispatch, useSelector } from 'react-redux';
import { VendorCityList, VendorTypeList } from '../Action/vendorAction';
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



import { TrendingVenueList } from '../Action/VenueAction';
import { TrendingServicesList } from '../Action/ServicesAction';
import Venue from '../components/venues';
import { Link } from 'react-router-dom';
SwiperCore.use([Autoplay, Pagination, Navigation]);
function LandingPage(props){

    const [ city, setCity] = useState()
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const { error:city_error, citys} = VendorCitys;
    const ListTrendingVenue =  useSelector((state) => state.ListTrendingVenue);
    const {loading, error, Tvenues} = ListTrendingVenue
    const trendingservicelist = useSelector(state => state.trendingservicelist);
  const { loading: loading_ser, error: error_ser, Tservices } = trendingservicelist
  const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(VendorCityList());
        dispatch(TrendingVenueList());
      dispatch(TrendingServicesList())
      dispatch(VendorTypeList())
    },[dispatch])
    const Venuehandaler = ()=>{
        props.history.push(`/city/venue/${city}`)
        
  }
  const imageScreen = () => {
    props.history.push('/gallery');
  }
    return(
        <div className="land-top">
        <div className="main ">
                <div className="ms1_search" >
                    {/* <img src={pictures} alt="pictures"></img> */}
                    <div className="ms1_text">
                      <h1 className="fs-25">Select best venues for your wedding</h1>
                      <div className="mt-3">
                <div className="d-inline-flex">
                  {city_error && <MessageBox>{ city_error.message}</MessageBox>}
                                {
                                citys ?
                                <select className="form-select rounded-0 fs-17" onChange={e=>setCity(e.target.value)}>
                                    <option value={""}>Select City</option>
                                    {citys.map(c=>(
                                    <option key={c.id} value={c.id}>{c.city}</option>
                                    ))}
                                </select>
                                :<select className="form-select rounded-0 fs-17"><option value={""}>Loading</option></select>
                                }
                            
                            </div> 
                            <div className="d-inline-flex">
                                <button
                                onClick={Venuehandaler}
                                type="button"
                                className="btn rounded-0 text-light fs-17"
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
                            <button onClick={imageScreen}>
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
            <div className="row align-items-end" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" ,marginBottom:'-1.8rem'}}>
              <div className="col">
                Venues
              </div>
              <div className="col-auto" style={{ fontSize: "1.2rem" }}>
                <Link style={{ color: "rgba(255, 0, 56, 0.77)" }} to='/venues'>See All</Link>
              </div>
            </div>
                <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            loop={true}
              pagination={{
                "clickable": true,
                dynamicBullets: true,
            }}
            autoplay ={{
                "delay": 2500,
                "disableOnInteraction": false }}
                breakpoints={{
                  
                  "0": {
                    "slidesPerView": 1,
                    
                  },
                  "450": {
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
             <div>{Tvenues.length === 0 && <span>No Venue Available</span>}</div>
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
                    
          <div className="row align-items-end" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)"  ,marginBottom:'-1.8rem'}}>
            <div className="col">
              Services
            </div>
            <div className="col-auto" style={{ fontSize: "1.2rem" }}>
              <Link style={{ color: "rgba(255, 0, 56, 0.77)" }} to='/services'>See All</Link>
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
                "clickable": true,
                dynamicBullets: true,}}
                breakpoints={{
                  "0": {
                    "slidesPerView": 1,
                    
                  },
                  "450": {
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
             <div>{Tservices.length === 0 && <span>No Service Available</span>}</div>
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
       
        {
          loading_types ? " "
            :
            error ? <MessageBox>{error}</MessageBox>
              :
       
        <div className="mgall">
            <div className="row gs-0 ge-0">
              <div className="col" style={{ fontSize: "1.5rem", color: "rgba(255, 0, 56, 0.77)" }}>Vendor Types</div>
              {/* <div className="col-auto">See all</div> */}
              <div className="w-100 mt-4"></div>
              {
                types.map(cat => (
                  <div className="col-6 mb-3" key={cat.id} >
                    <div style={{ position: "relative" }} >
                      <img src={cat.display_images} alt={cat.name} className="w-100" style={{ height: "146px", objectFit: "cover" }} />
                      <div className="w-100 h-100" style={{position: "absolute", top:"0",background:"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 84.9%)"}}>
                      </div>
                      <div style={{ position: "absolute", bottom: "10%", }} className="w-100 text-center text-white cat-name">{cat.type}</div>
                    </div>
                  </div>
              
                ))
              }
             
         
              </div>
            </div>
        
      }
        </div>
    )
    
}

export default LandingPage;