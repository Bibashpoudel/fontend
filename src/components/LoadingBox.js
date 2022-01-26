import React from 'react';
import ReactLoading from 'react-loading';
import './LoadingBox.scss'

export default function LoadingBox(){
    return(
        <div  className="loading">
             <div className="loading-item">
                <ReactLoading type={"bubbles"} color={'red'} height={"10%"} width={'30%'} />
            </div>
       </div>
    )
}