import React, { useEffect, useState } from 'react'
import pwed from '../pwed.png'
;
import TrendingSlider from '../components/TrendingSlider';
import Categories from '../components/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { VendorCityList } from '../Action/vendorAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

function LandingPage(props){

    const [ city, setCity] = useState()
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;

    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(VendorCityList())
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
                      <div className="search_city">
                          {
                               
                               loading_city ?<LoadingBox></LoadingBox>
                               :
                               error_city ? <MessageBox variant="danger">{error_city}</MessageBox>
                               :
                        
                          <div>
                            {
                                citys ?
                                <select onChange={e=>setCity(e.target.value)}>
                                        <option  value="">Select City</option>
                                        {citys.map(c=>(
                                                <option key={c.id} value={c.id}>{c.city}</option>
                                        ))}
                                    </select>
                                    :<span>{error_city}</span>
                            }
                          </div>
}
                          <div>
                              <button onClick={Venuehandaler}>Get Started</button>
                          </div>
                      </div>
                    </div>
                </div>

            </div>
            <div style={{height: "11.67px"}}/>
            <div className="wg2_gallary">
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
            <div className="">
                <div className="trend_text">
                    <div>
                    <h2>Trending Now</h2>
                    </div>
                   <div>
                   <h2>Show All</h2>
                   </div>
                </div>
                  
                <div className="trends" >
                   
                        <TrendingSlider>
                      
                        </TrendingSlider>
                    
                </div>
                
                        
            </div>
            <div>
                    <Categories></Categories>
            </div>
        </div>
    )
    
}

export default LandingPage;