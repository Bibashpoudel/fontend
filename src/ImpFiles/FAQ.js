import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import parse from 'html-react-parser';
import { FAQAction } from '../Action/ImpfileAction';
export default function FAQ() {

    const faqList = useSelector(state => state.faqList);
    const {loading, error, faq} = faqList;
    const dispatch = useDispatch()
    

    useEffect(() => {
        
        
        if (!error) {
            dispatch(FAQAction())
        }
       

    },[dispatch, error])
    return (
        <div className="main top ">
            {
                loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error || error.message}</MessageBox>
                :
                
                <div>
                  
                    <ul style={{margin:'1.5rem'}}>
                        <h2>FAQ</h2>
                        {
                            faq.map(f=>(
                                <li  key={f.id}>
                                    <div>
                                        <h3>{f.question}</h3>
                                    </div>
                                    <div>
                                        <p>{f.description}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
  )
}
