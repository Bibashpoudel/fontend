import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  termscondition } from '../Action/ImpfileAction';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import parse from 'html-react-parser';
 
export default function Terms() {
    
    const tcList = useSelector(state => state.tcList);
    const {loading, error, tc} = tcList;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(termscondition())

    },[dispatch])
    return (
        <div className="main top center">
        {
            loading ? <LoadingBox></LoadingBox>
            :
            error ? <MessageBox>{error.message}</MessageBox>
            :
            <div style={{margin:'1.5rem'}}>
                <h2>Terms & Conditions</h2>
                {
                    tc.map(pp=>(
                        <div style={{textAlign:'justify'}} key={pp.id}>
                            {parse(pp.description)}
                        </div>
                    ))
                }
            </div>
        }
    </div>
    )
}
