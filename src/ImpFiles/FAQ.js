import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import parse from 'html-react-parser';
export default function FAQ() {

    const faqList = useSelector(state => state.faqList);
    const {loading, error, faq} = faqList;
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(FAQ())

    },[dispatch])
    return (
        <div className="main top center">
            {
                loading ? <LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error.message}</MessageBox>
                :
                <div style={{margin:'1.5rem'}}>
                    <h2>FAQ</h2>
                    {
                        faq.map(f=>(
                            <div style={{textAlign:'justify'}} key={f.id}>
                                {parse(f.description)}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
  )
}
