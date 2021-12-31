import React from 'react';
import './LoadingBox.scss'

export default function LoadingBox(){
    return(
        <div className="load-spinner">
            <div className="ring">
            </div>
            <div className="ring">
            </div>
            <div className="ring">
            
            </div>
            <div className="loading-text">
                Loading...

            </div>

        
       </div> 
    )
}