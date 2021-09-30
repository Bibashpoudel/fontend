import React, {  } from 'react'
import pwed from '../pwed.png'
;
import TrendingSlider from '../components/TrendingSlider';





function LandingPage(){

    
    
    return(
        <div>
        <div className="main">
                <div className="ms1_search" >
                    {/* <img src={pictures} alt="pictures"></img> */}
                    <div className="ms1_text">
                      <h1>Select best venues for your wedding</h1>
                      <div className="search_city">
                          <div>
                            <select value="Select City">

                                <option>Kathmandu</option>
                                <option>Kathmandu</option>
                                <option>Kathmandu</option>
                                <option>Kathmandu</option>
                            </select>
                          </div>
                          <div>
                              <button>Get Started</button>
                          </div>
                      </div>
                    </div>
                </div>

            </div>
            <div className="wg2_gallary">
                <div className="wg2_title">
                    Wedding Gallary
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
                        <img src={pwed} alt="wed"></img>
                    </div>

                </div>

            </div>
            <div className="trend_venues">
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
        </div>
    )
    
}

export default LandingPage;