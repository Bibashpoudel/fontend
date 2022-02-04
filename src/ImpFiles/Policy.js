import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Privacy } from '../Action/ImpfileAction';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
import parse from 'html-react-parser';
 
export default function Policy() {

    
    const privacyList = useSelector(state => state.privacyList);
    const {loading, error, privacy} = privacyList;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(Privacy())

    },[dispatch])
    return (
        <div className="main top center">
            {
                loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error.message}</MessageBox>
                : 
                <div style={{margin:'1.5rem'}}>
                    <h2>Privacy Policy</h2>
                            {
                                privacy.map(p => (
                                    
                                    <div style={{textAlign:'justify'}} key={p.id}>
                                        <div dangerouslySetInnerHTML={{__html: p.description}} />
                                    </div>
                                ))
                   }
                       
                </div>
            }
        </div>
    )
}
