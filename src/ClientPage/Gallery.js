import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageList } from '../Action/ImageAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function Gallery() {

    const imgList = useSelector(state => state.imgList);
    const { loading, error, Img } = imgList
    
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(ImageList()) 
    },[dispatch])

    return <div className='container-fluid '>
        <div className='main center'>
            {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox>{error || error.message}</MessageBox>
                        :
                        <div className='row center'>
                            {Img.length === 0 && <MessageBox>No image Found</MessageBox>}
                            {
                                Img.map(i => (
                                   
                                        <div className='col-md-4 mt-3 col-lg-3 pb-4'>
                                       
                                            <img className="custom-img" src={i.media} alt="images"></img>    
                                            <figcaption className="figure-caption">{ i.venue.name}</figcaption>
                                       
                                        </div>
                                        
                                ))
                            }
                        </div>

            }
            

        </div>
     
  </div>;
}
