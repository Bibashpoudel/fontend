import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { VendorCityList } from '../../Action/vendorAction';
import { updateVeneAction, vendorVenueDetails, VenueTypeList } from '../../Action/VenueAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { VENUE_UPDATE_RESET } from '../../Constants/venueConstants';

export default function VenueEdit(props) {
         const venueId = props.match.params.id;
         

          
    const [name, setName] = useState('');
    const [actual_price, setPrice] = useState('');
    const [display_price, SetDisplayPrice] = useState('');
    const [city, setCity] = useState();
    const [venue_type, setVenueType] = useState('');
    const [display_image, setImage] = useState('');
    const [about, setAbout] = useState('');
    const [features, setFeatures] = useState('');


    const vvDetailsList = useSelector(state =>state.vvDetailsList);
    const {loading, error, vvDetails} = vvDetailsList;
    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading:loading_vtype, error:error_vtype, venueType} = venueTypeList;
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;
    const venueUpdate =useSelector(state => state.venueUpdate);
    const {loading:updateLoading, error:updateError, success:updateSuccess} =venueUpdate
    const dispatch = useDispatch();
    
    useEffect(() => {
        if(updateSuccess){
            dispatch({
                type:VENUE_UPDATE_RESET
            })
            swal("congratulations! your Garden has been  successfully updated", "Thank you for believing us", "success");
            props.history.push('/VenueManage');
            
        }
        dispatch(VenueTypeList())
          
          dispatch(VendorCityList())
        if(!vvDetails ){
            dispatch(vendorVenueDetails(venueId))
        }else{
            setName(vvDetails.name);
            setPrice(vvDetails.actual_price);
            setCity(vvDetails.city);
            setVenueType(vvDetails.venue_type);
            setImage(vvDetails.display_image);
            setAbout(vvDetails.about);
            setFeatures(vvDetails.features);
            SetDisplayPrice(vvDetails.display_price)
        }
       
        
    }, [ venueId,dispatch, vvDetails,updateSuccess,props.history])
    const updateVenuehandaler = (e) =>{
        e.preventDefault()
        dispatch(updateVeneAction(
            {id:venueId,
            name,
            actual_price, 
            display_price, 
            city, 
            venue_type, 
            display_image, 
            about, 
            features
        }))
    }
    const annotate =() =>{
        const typed= document.getElementById("gardenPrice").value;

        const price = parseInt(typed);
        const DisplayPrice = price + price * 0.05;
        console.log(DisplayPrice)
        setPrice(price);
        SetDisplayPrice(DisplayPrice)
        if(typed === ''){
            document.getElementById("printchatbox").innerHTML= ' ';
        }
        else{
            document.getElementById("printchatbox").innerHTML= DisplayPrice;
        }

        
      }

    return (
        <div className="ven_serv_manage">
            {
                                loading ?<LoadingBox></LoadingBox>
                                :
                                error ? <MessageBox></MessageBox>
                                :
                                
                                loading_city ?<LoadingBox></LoadingBox>
                                :
                                error_city ? <MessageBox variant="danger">{error_city}</MessageBox>
                                
                                :
                                loading_vtype ?<LoadingBox></LoadingBox>
                                :
                                error_vtype ? <MessageBox variant="danger">{error_vtype}</MessageBox>
                                :
                                
                                updateLoading ?<LoadingBox></LoadingBox>
                                :
                                updateError ? <MessageBox variant="danger">{updateError}</MessageBox>
                                :

                           
                <form className=" " onSubmit={updateVenuehandaler}>
                    <div>
                            <h2 style={{textAlign:'center'}}>Update Your's venue Details !</h2>
                    </div>
                    
                        <div className="form-col-2">
                            
                            <div>
                                <div className="">
                                    
                                    <input 
                                        type="text" 
                                        id="gardenname" 
                                        placeholder="Garden Name"
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                    ></input>
                                </div>
                            
                                <div className="">
                                    
                                    <input 
                                        type="text" 
                                        id="gardenPrice" 
                                        placeholder="Garden Price"
                                        value={actual_price}
                                        onChange={annotate}
                                        
                                    ></input>
                                    <span>
                                    <div id='printchatbox'></div>
                                    </span>
                                </div>
                                {loading ? <LoadingBox></LoadingBox>
                                    :
                                    error ? <MessageBox variant="danger">{error}</MessageBox>
                                    
                                    :
                                    <div className="">
                                    
                                       <select value={venue_type} onChange={e =>setVenueType(e.target.value)}>
                                       <option  value="">Select Your garden type</option>
                                           {venueType.map(ven =>(
                                               <option key={ven.id} value={ven.id}>{ven.type}</option>
                                           ))}
                                       </select>
                                    </div>
                                }
                            
                                
                            </div>
                            <div className="ser-mng-col-3">
                                <div className=" image_field">
                                    
                                    <input 
                                        type="file" 
                                        id="image" 
                                        placeholder="image"
                                        onChange={e =>setImage(e.target.files[0])}
                                      
                                    ></input>
                                </div>
                                <div>
                                    <img src={display_image}></img>
                                </div>
                                {/* <div className="">
                                    
                                    <select>
                                        <option>Available</option>
                                        <option>UnAvailable</option>
                                    </select>
                                </div> */}
                                <div className="">
                                { loading_city ?<LoadingBox></LoadingBox>
                                    :
                                    error_city ? <MessageBox variant="danger">{error_city}</MessageBox>
                                    :
                                    <select value={city} onChange={e=>setCity(e.target.value)}>
                                        <option  value="">Select Your Venue City</option>
                                        {citys.map(c=>(
                                                <option key={c.id} value={c.id}>{c.city}</option>
                                        ))}
                                        
                                        <option>city2</option>
                                    </select>
                }
                                </div>
                            </div>
                        </div>
                        <div className="form-row-2">
                            <div className="">
                                
                                <textarea 
                                    type="text" 
                                    id="textcontent"
                                    placeholder=" About Garden"
                                    value={about}
                                    onChange={e =>setAbout(e.target.value)}
                                    
                                ></textarea>
                                <div id="countWord"></div>
                            </div>
                            <div className="">
                                
                                <textarea 
                                    type="text" 
                                    id="garden name" 
                                    placeholder="Features of Garden"
                                    value={features}
                                    onChange={e =>setFeatures(e.target.value)}
                                    
                                ></textarea>
                            </div>
                            <div className="btn_center">
                                <button type="submit" className="block secondary">Update Venue</button>
                            </div>
                        </div>
                        
                        
                </form>
            }
            </div>
            
    )}
