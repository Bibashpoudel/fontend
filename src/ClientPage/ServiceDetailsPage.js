import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateServiceComment, ServiceDetails } from '../Action/ServicesAction';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-scroll'


import { addtoCartS } from '../Action/CartAction';
import swal from 'sweetalert';
import { ADD_SERVICE_REVIEW_RESET } from '../Constants/servicesConstants';
import { CheckServiceStatusAction } from '../Action/OrderAction';

function ServiceDetailsPage(props){
    // const venue1 = data.venders.find((x) => x._id === props.match.params.id);

    const serviceId = props.match.params.id;
    const dispatch = useDispatch();
    const serviceDetails = useSelector((state) =>state.serviceDetails);
    const {loading, error, serviceD} = serviceDetails;
   
    const venueImage = useSelector(state => state.venueImage);
    const { loading:loadingImage, error:errorImage, venImg} = venueImage;
    const userProfileView = useSelector((state) => state.userProfileView);
    const {profile} = userProfileView;
    const ReviewAdd = useSelector((state) => state.ReviewAdd);
    const {loading:loading_addreview, ReviewAdd:success,error:ReviewAddError} = ReviewAdd;
    const serviceReviewView = useSelector((state) => state.serviceReviewView);
    const {loading:ServiceReviewLoading,serviceReview,error:ServiceReviewError} = serviceReviewView;
    const CheckStatus = useSelector(state => state.CheckStatus)
    const { loading: statusLoading, eror: statusError, status } = CheckStatus;
    // const [, setserviceADD] = useState(['']);
    const [total, setTotal] = useState();
    // const [people, SetPeople] = useState(0);
    // const [checkedState, setCheckedState] = useState([false, false, false,false])
    const [imageDisplay , setImageDispaly] = useState(false);
    const [videoDisplay , setVideoDispaly] = useState(false);
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();
    const [dateErrorMessage, setDateErrorMessage] = useState("");
    const [from, setFrom] = useState(' ');
    const [to, setTo] = useState(' ');

    const AddReview =(e) =>{
        e.preventDefault();
        if(comment ){
            dispatch(CreateServiceComment(serviceId, comment));
        }
    }
   
    useEffect(() =>{ 


        if(success){
            setRating('');
            setComment('')
            swal("Review Added successfully", "Wait For Approval", "success");
            dispatch({
                type:ADD_SERVICE_REVIEW_RESET
            })
        }
       
        dispatch(ServiceDetails(serviceId));
        if (error || errorImage || ReviewAddError || ServiceReviewError || statusError) {
            console.log(error.status)
        }
   
    }, [ReviewAddError, ServiceReviewError, dispatch, error, errorImage, serviceId, statusError, success] );
  
  
  const DisplayImage = () => {
    
    setImageDispaly(true);
    setVideoDispaly(false);
  }
  const DisplayVideo = () => {
    
    setVideoDispaly(true);
    setImageDispaly(false);
  }
    
    // console.log(services)
//   const handleOnChange = (position) => {
//     const updatedCheckedState = checkedState.map((item, index) =>
//       index === position ? !item : item
//     );

//     setCheckedState(updatedCheckedState);
    
    
//     const totalPrice = updatedCheckedState.reduce(
//       (sum,  currentState, index) => {
         
//         if (currentState === true) {
           
//             const calcpric = parseInt(vService[index].display_price);

//           if(vService[index].is_true ===true){

            

//             return sum +  calcpric * people;
//           }
//           else{
//             return sum + calcpric;
//           }
//         }
//         return sum ;
//       },
//       0
//     );
//     const venueprice = parseInt(serviceD.display_price);
//     const finalprice  = venueprice + totalPrice;
//     setTotal( finalprice);

//     // for adding service name
//     const SelectedService = updatedCheckedState.reduce(
//         (serviceId, currentState, index) =>{
//             if(currentState === true){
//                 // return  names = names + ","+ vService[index].id;
//                 const serviceId = vService[index].id
//                 dispatch(addtoCartS(serviceId))
//                 console.log(serviceId)
//                 return serviceId;
//             }
//            else{
//                 dispatch(reomveFromCart(serviceId));
//             }
//             return serviceId;
//         },
//         ''

//     );
//     setserviceADD(SelectedService)
    
   
//   };

const CheckAvailable = (e) => {
    e.preventDefault();
    
    const date = new Date()
    function addLeadingZeros(n) {
        if (n <= 9) {
          return "0" + n;
        }
        return n
      }
    const today =date.getFullYear()+ "-" + addLeadingZeros(date.getMonth() + 1) + "-" + addLeadingZeros(date.getDate())
    
    console.log(from , to,today)
    if (from === ' ') {
        setDateErrorMessage("Please Select Start Date")
        return
    }
    if(to === '') {
        setDateErrorMessage("Please Select end Date")
        return
    }
    
    if (from > to) {
        setDateErrorMessage("End date can not be smaller")
        return
    }
    if(from < today || to < today)
    {
        setDateErrorMessage("Your Can't Select this format of date")
        return
        }
        setDateErrorMessage('')
        dispatch(CheckServiceStatusAction(from, to,serviceId))
}


    
    const Carthandaler=()=>{
        dispatch(addtoCartS(serviceId))
        setTotal( 0);
        props.history.push(`/cart/`);
    //    setTimeout ((e)=>{
    //     
    //     console.log("bibash")
    //    }, 3000)
       
        

    }

    // const [IsOpen, setIsOpen] = useState(false);
    return(
        
        <div>
        {
            loading? <LoadingBox></LoadingBox>
        :
            error? <MessageBox variant="danger">{error || error.message}</MessageBox>
        :
        loadingImage? <LoadingBox></LoadingBox>
        :
            errorImage? <MessageBox variant="danger">{errorImage || errorImage.message}</MessageBox>
        :
        ServiceReviewLoading ? <LoadingBox></LoadingBox>
        :
        ServiceReviewError ? <MessageBox variant="danger">{ServiceReviewError || ServiceReviewError.message}</MessageBox>
        
        :
        <div> 
            <div className="main top_center">
                <div className="det-col-1">
                    
                        <img id="myimage"  className="det-large" src={serviceD.display_image} alt={serviceD.name}></img>
                    
                <div className="venue_details_margin">
                    <div className="venue_details_row">
                        <div>{serviceD.name}</div>
                        <div>  
                            {/* <Rating rating={venue.rating} numReviews={venue.numReviews}></Rating> */}
                        </div>
                    </div>
                    <div className="venue_details_row">
                        <span>
                        <i className="fa fa-location"></i>
                            {serviceD.location}
                        </span>
                    </div>
                    <div className="venue_details_row_buttom">
                        <div className="colm-4">
                            <i className="fa fa-image"></i>
                            {/* {venue.gallery.length} */}
                        </div>
                        <div className="colm-4">
                            <i className="fa fa-image"></i>
                        </div>
                        <div className="colm-4">
                            <i className="fa fa-share"></i>
                        </div>
                        <div className="colm-4">
                            <i className="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                    </div> 
                </div>
                <div className="venue_details">
                    <div className="venue_details_row">
                        <div>
                            <Link to='photo'  activeClass="active" style={{color:'black',cursor:'pointer'}} spy={true} smooth={true}>Photo</Link>
                        </div>
                        <div>
                            <Link to ='about' spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>About</Link>
                        </div>
                        <div>
                            <Link to='features'   spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Features</Link>
                        </div>
                        <div>
                            <Link to="reviews"  spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Reviews</Link>
                        </div>
                    </div>
                </div>
                </div>
                <div className='det-col-2'>
                    <form className="form ">
                        <span className="form-fst-div">
                            <div className="g_service" >
                                <div className="g_ser_hed">
                                    <h3>
                                        Available Services
                                    </h3>
                                </div>
                                <div className="g_details">
                                    <div className="ven_price_loc">
                                        <div>
                                            Price
                                        </div>
                                        
                                        <div>
                                            
                                            {serviceD.display_price}
                                                                                
                                        </div>
                                    </div>
                                    <div className="ven_price_loc">
                                        <div>
                                            Location
                                        </div>
                                        <div>
                                            
                                                {serviceD.location}
                                            
                                        </div>
                                    </div>
                                    <div className="ven_price_loc">
                                        <div>
                                            final Price
                                        </div>
                                        <div>
                                            
                                            {total}
                                            
                                        </div>
                                    </div>
                                    

                                </div>
                                <div className="g_details">
                                    <div className="ven_price_loc">
                                        <div>
                                        <label>Start Date</label>
                                            <div>
                                                <input
                                                    type='date'
                                                    className='form-select form-select-lg mb-3 w-100'
                                                    onChange={e => setFrom(e.target.value)}   
                                                >   
                                                </input>
                                            </div>
                                        </div>
                                        <div>
                                            <label>End Date</label>
                                            <div>
                                                <input
                                                    type='date'
                                                    className=' form-select form-select-lg mb-3 w-100'
                                                    onChange={e => setTo(e.target.value)}
                                                ></input>
                                            </div> 
                                        </div>
                                        <div>
                                            <button className='primary' style={{fontSize:'1rem'}} onClick={CheckAvailable} >Check Availability</button>
                                        </div>
                                    </div>
                                    <div className='single_row'>
                                        { dateErrorMessage !== ' ' &&
                                            <div style={{ color: 'rgba(213, 19, 62, 0.77)' }}>
                                                {dateErrorMessage}
                                            </div>    
                                        }
                                        {statusLoading ?
                                            <div style={{ color: 'rgba(213, 19, 62, 0.77)' }} >
                                                Loading...
                                            </div>
                                        :
                                        statusError ?
                                            <div style={{color:'rgba(213, 19, 62, 0.77)'}}>
                                                {status }
                                            </div>
                                        :
                                            <div style={{ color: 'rgba(213, 19, 62, 0.77)' }}>
                                                {status.status}
                                            </div>
                                        }
                                        </div>
                                        {statusLoading ?
                                            <div style={{ color: 'rgba(213, 19, 62, 0.77)' }} >
                                               ''
                                            </div>
                                            :
                                            statusError ?
                                                <div style={{ color: 'rgba(213, 19, 62, 0.77)' }}>
                                                    {statusError || statusError.message}
                                                </div>
                                                :
                                            <span>
                                               { status.status === 'Available' &&
                                                <div className="single_row">
                                                    <button className="secondary block"  onClick={Carthandaler}>Continue</button>
                                                </div>
                                                }
                                            
                                            
                                        
                                                {
                                                    status.status === 'Unavailable' &&
                                                    <div style={{color: 'rgba(213, 19, 62, 0.77)'}}>
                                                        Already booked
                                                    </div>
                                                }                                                  
                                            </span>
                                        }
                                    <div className ="single_row" style={{display:'none'}}>
                                            <input type="text" placeholder="leave a comment"></input>
                                    </div>
                                </div>
                            </div>    
                        </span>
                    </form>
                
                </div>
                
            </div>
            <div className="main top">
                        <div className="venue_details_row-bottom">
                            {
                                loadingImage? <LoadingBox></LoadingBox>
                                :
                                    errorImage? <MessageBox variant="danger">{errorImage || errorImage.message}</MessageBox>
                                :
                                
                           
                            <div  id ="photo">
                                <h4>Pictures</h4>   
                                <div className="photos">
                                    <div className="image" onClick={DisplayImage} style={{cursor:'pointer'}}>
                                            Images
                                    </div>
                                    <div className="video" onClick={DisplayVideo} style={{cursor:'pointer'}}>
                                            Videos
                                    </div>
                                </div>
                                {
                                    imageDisplay ?
                                    <div className="img-area">
                                        {
                                            venImg.map((img)=>(
                                                <span>
                                                    <img className="small" src={img.media} alt="imgs"></img>
                                                </span>
                                            ))
                                        }
                                    </div>
                                    :<span></span>
                                }
                                {
                                    videoDisplay ?
                                    <div className="img-area">
                                            Video
                                            
                                    </div>
                                    :<span></span>
                                }
                            </div>
}
                            <div id="about">
                               <h4> About Venues</h4>
                                {serviceD.about}
                            </div>
                            <div id="features">
                               <h4> Venues Features</h4>
                                {serviceD.description}
                            </div>
                            <div id="reviews"> 
                                
                                    <h4>Review</h4>
                                   <ul>
                                       
                                   {serviceReview.length === 0 && (
                                           <MessageBox>There is no review </MessageBox>
                                       )}
                                     
                                     {
                                         serviceReview.map((review)=>(
                                            <div>
                                              
                                                    <li>
                                                    <p>{review.feedback}</p>
                                                </li>
                                             
                                            </div>
                                         ))
                                     }
                                      
                                    
                                       
                                       <li>
                                           {profile ?(
                                               <form onSubmit={AddReview} className="form-dts">
                                                   <div>
                                                       <h4>
                                                           Write a Review
                                                       </h4>
                                                       <div className="ven_dts_fields">
                                                           <label htmlFor="rating">Rating</label>
                                                           <select id="rating" value={rating}
                                                            onChange={(e)=>setRating(e.target.value)}
                                                           >
                                                               <option value="">select</option>
                                                               <option value="1">1- Poor</option>
                                                               <option value="2">2- Fair</option>
                                                               <option value="3">3- Good</option>
                                                               <option value="4">4- Very Good</option>
                                                               <option value="5">5- Excelent</option>
                                                           </select>
                                                        </div>
                                                        <div className="ven_dts_fields">
                                                            <label htmlFor="comment">
                                                                Comment
                                                            </label>
                                                            <textarea id="comment" value={comment} onChange={(e)=>setComment(e.target.value)}>

                                                            </textarea>
                                                        </div>
                                                        <div>
                                                            {loading_addreview && <LoadingBox></LoadingBox> }
                                                            { ReviewAddError && <MessageBox variant="danger">{ReviewAddError || ReviewAddError.message}</MessageBox> }
                                                        </div>
                                                        <div >
                                                            <label/>
                                                            <button className="primary" type="submit">Submit</button>
                                                        </div>
                                                   </div>
                                                
                                                </form>
                                           ):
                                           <MessageBox><Link to="/signin">Sign In</Link> to write a review</MessageBox>
                                           }
                                       </li>
                                   </ul>
                            </div>
                        </div>
        </div>
        

    
        </div>
}
</div>
    )
}

export default ServiceDetailsPage;