import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CreateServiceComment, ServiceDetails, ServicesListaction } from '../Action/ServicesAction';
import { createComment, VenueDetails, VenueReviewAction } from '../Action/VenueAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import {Link} from 'react-scroll'
import { VenueImageList } from '../Action/ImageAction';

import { addtoCartS, reomveFromCart, } from '../Action/CartAction';
import swal from 'sweetalert';
import { ADD_REVIEW_RESET } from '../Constants/venueConstants';
import { ADD_SERVICE_REVIEW_RESET } from '../Constants/servicesConstants';

function ServiceDetailsPage(props){
    // const venue1 = data.venders.find((x) => x._id === props.match.params.id);

    const serviceId = props.match.params.id;
    const dispatch = useDispatch();
    const serviceDetails = useSelector((state) =>state.serviceDetails);
    const {loading, error, serviceD} = serviceDetails;
    const venueService =useSelector(state =>state.venueService);
    const {loading:loading_service, error:error_service, vService} = venueService;
    const venueImage = useSelector(state => state.venueImage);
    const { loading:loadingImage, error:errorImage, venImg} = venueImage;
    const userProfileView = useSelector((state) => state.userProfileView);
    const {profile} = userProfileView;
    const ReviewAdd = useSelector((state) => state.ReviewAdd);
    const {loading:loading_addreview, ReviewAdd:success,error:ReviewAddError} = ReviewAdd;
    const serviceReviewView = useSelector((state) => state.serviceReviewView);
    const {loading:ServiceReviewLoading,serviceReview,error:ServiceReviewError} = serviceReviewView;

    const [, setserviceADD] = useState(['']);
    const [total, setTotal] = useState();
    const [people, SetPeople] = useState(0);
    const [checkedState, setCheckedState] = useState([false, false, false,false])
    const [imageDisplay , setImageDispaly] = useState(false);
    const [videoDisplay , setVideoDispaly] = useState(false);
    const [rating, setRating] = useState();
    const [comment, setComment] = useState();



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
   
    }, [dispatch, serviceId, success] );
  
  
  const DisplayImage = () => {
    
    setImageDispaly(true);
    setVideoDispaly(false);
  }
  const DisplayVideo = () => {
    
    setVideoDispaly(true);
    setImageDispaly(false);
  }
    
    // console.log(services)
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    
    
    const totalPrice = updatedCheckedState.reduce(
      (sum,  currentState, index) => {
         
        if (currentState === true) {
           
            const calcpric = parseInt(vService[index].display_price);

          if(vService[index].is_true ===true){

            

            return sum +  calcpric * people;
          }
          else{
            return sum + calcpric;
          }
        }
        return sum ;
      },
      0
    );
    const venueprice = parseInt(serviceD.display_price);
    const finalprice  = venueprice + totalPrice;
    setTotal( finalprice);

    // for adding service name
    const SelectedService = updatedCheckedState.reduce(
        (serviceId, currentState, index) =>{
            if(currentState === true){
                // return  names = names + ","+ vService[index].id;
                const serviceId = vService[index].id
                dispatch(addtoCartS(serviceId))
                console.log(serviceId)
                return serviceId;
            }
           else{
                dispatch(reomveFromCart(serviceId));
            }
            return serviceId;
        },
        ''

    );
    setserviceADD(SelectedService)
    
   
  };


    
    const Carthandaler=()=>{
        dispatch(addtoCartS(serviceId))
        setTotal( 0);
        props.history.push(`/cart/`);
    //    setTimeout ((e)=>{
    //     
    //     console.log("bibash")
    //    }, 3000)
       
        

    }

    const [IsOpen, setIsOpen] = useState(false);
    return(
        
        <div>
        {
            loading? <LoadingBox></LoadingBox>
        :
            error? <MessageBox variant="danger">{error}</MessageBox>
        :
        loadingImage? <LoadingBox></LoadingBox>
        :
            errorImage? <MessageBox variant="danger">{errorImage}</MessageBox>
        :
        ServiceReviewLoading ? <LoadingBox></LoadingBox>
        :
        ServiceReviewError ? <MessageBox variant="danger">{ServiceReviewError}</MessageBox>
        
        :
        <div> 
            <div className="main top_center">
            
                <div className="col-1">
                
                        <img id="myimage"  className="large" src={serviceD.display_image} alt={serviceD.name}></img>
                
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
                                <Link to='photo' activeStyle={{color: "red"}} activeClass="active" style={{color:'black',cursor:'pointer'}} spy={true} smooth={true}>Photo</Link>
                                </div>
                                <div>
                                <Link to ='about' activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>About</Link>
                                </div>
                                <div>
                                    <Link to='features'  activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Features</Link>
                                </div>
                                <div>
                                <Link to="reviews"  activeStyle={{color: "red"}} spy={true} style={{color:'black',cursor:'pointer'}}  smooth={true}>Reviews</Link>
                                </div>
                            </div>
                    </div>
                </div>
                    <form className="form col-2">
                        <div>
             
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
                                    Start Date
                                </div>
                                <div>
                                    
                                        Number of days
                                    
                                </div>
                                <div>
                                    Search Availablity
                                </div>
                            </div>
                            
                            <div className="single_row">
                                <button className="secondary block" onClick={Carthandaler}>Continue</button>
                            </div>
                            <div className ="single_row">
                                    <input type="text" placeholder="leave a comment"></input>
                            </div>
                        </div>
                    
    
                    </div>
                </form>
                
            </div>
            <div className="main top">
                        <div className="venue_details_row-bottom">
                            {
                                loadingImage? <LoadingBox></LoadingBox>
                                :
                                    errorImage? <MessageBox variant="danger">{errorImage}</MessageBox>
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
                                                            { ReviewAddError && <MessageBox variant="danger">{ReviewAddError}</MessageBox> }
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