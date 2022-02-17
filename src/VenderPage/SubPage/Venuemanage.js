/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { VendorCityList, VendorVenueList } from '../../Action/vendorAction';
import {  addVenueAction, venueDeleteAction, VenueTypeList } from '../../Action/VenueAction';

import LoadingBox from '../../components/LoadingBox'
import MessageBox from '../../components/MessageBox'
import { VENUE_ADD_RESET, VENUE_DELETE_RESET } from '../../Constants/venueConstants';
function Venuemanage(props){
    
    
    const [Name, setName] = useState();
    const [price, setPrice] = useState();
    const [displayprice, SetDisplayPrice] = useState();
    const [city, setCity] = useState();
    const [venue_type, setVenueType] = useState();
    const [image, setImage] = useState();
    const [about, setAbout] = useState();
    const [features, setFeatures] = useState();


    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading, error, venueType} = venueTypeList;
    const VendorCitys = useSelector((state) => state.VendorCitys);
    const {loading:loading_city, error:error_city, citys} = VendorCitys;
    const addVenue = useSelector(state =>state.addVenue);
    const{loading:loading_venueadd, error:error_venueadd, venueadd} = addVenue;
    const VVenues = useSelector(state =>state.VVenues)
    const{loading:loading_vv,error:error_vv, VendorVenues} = VVenues;
    const deleteVenue = useSelector(state => state.deleteVenue);
    const {loading: loadingDelete, error:errorDelete, success:successDelete} = deleteVenue;
 
    
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

      const dispatch = useDispatch();
     
     
      useEffect(()=>{
        if(venueadd){
            dispatch({
                type:VENUE_ADD_RESET
            })
            swal("congratulations! your Garden has been added successfully", "Thanks for believing us", "success");
          }
          if(successDelete){
              dispatch({
                  type:VENUE_DELETE_RESET
              })
            swal("Your Venue has been deleted SuccessFully !!!", "Venue Delete", "success");
          }

          
          dispatch(VendorVenueList())
          dispatch(VenueTypeList())
          dispatch(VendorCityList())
         
          
      },[dispatch,venueadd,successDelete])

      const addVenuehandaler =(e)=>{
          e.preventDefault()
         
          dispatch(addVenueAction(Name, price, displayprice, city, venue_type, image, about, features))
      }
      const deleteHandaler = (vv)=>{
          dispatch(venueDeleteAction(vv.id))
      }



    
    return (
        <div>
            {loadingDelete && <LoadingBox ></LoadingBox>}
            {
            errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
            {loading ? <LoadingBox ></LoadingBox>
            :
            error ? <MessageBox variant="danger">{error}</MessageBox>
            
             :
             loading_city ?<LoadingBox></LoadingBox>
             :
             error_city ? <MessageBox variant="danger">{error_city}</MessageBox>
             :
             
             loading_vv ?<LoadingBox></LoadingBox>
             :
             error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
             :
             loading_venueadd ?<LoadingBox></LoadingBox>
             :
             error_venueadd ? <MessageBox variant="danger">{error_venueadd}</MessageBox>
             :
            <div>   
            <div className="ven_serv_manage">
                <form className=" " onSubmit={addVenuehandaler} enctype="multipart/form-data">
                    <div>
                            <h2 style={{textAlign:'center'}}>Update Your's venue Details !</h2>
                    </div>
                        <div className="form-col-2">
                            <div className='form-first-fields'>
                                <div className="fields mb-4">
                                    <label>Garden Name</label>
                                    <input 
                                        className=''
                                        type="text" 
                                        id="gardenname" 
                                        placeholder="Garden Name"
                                        onChange={e => setName(e.target.value)}
                                        required={true} 
                                        style={{width:'80%'}}
                                    ></input>
                                </div>
                            
                                <div className="fields mb-4">
                                    <label>Garden Price</label>
                                    <input 
                                        type="text" 
                                        id="gardenPrice" 
                                        placeholder="Garden Price"
                                        required={true} 
                                        style={{width:'80%'}}
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
                                    <div className="fields mb-4">
                                    <label>Garden Type</label>
                                    
                                       <select 
                                            onChange={e =>setVenueType(e.target.value)}
                                            required={true} 
                                            style={{width:'80%'}}
                                        >
                                       <option  value="">Select Your garden type</option>
                                           {venueType.map(ven =>(
                                               <option key={ven.id} value={ven.id}>{ven.type}</option>
                                           ))}
                                       </select>
                                    </div>
                                }
                            
                                
                            </div>
                            <div className="ser-mng-col-3">
                            <div className="fields mb-4">
                                    <label>Image</label>
                                    <input 
                                        type="file" 
                                        id="image" 
                                        placeholder="image"
                                        onChange={e =>setImage(e.target.files[0])}
                                        required={true} 
                                        style={{width:'80%'}}
                                    ></input>
                                </div>
                               
                                <div className="fields mb-4">
                                    <label>City</label>
                                { loading_city ?<LoadingBox></LoadingBox>
                                    :
                                    error_city ? <MessageBox variant="danger">{error_city}</MessageBox>
                                    :
                                    <select 
                                        onChange={e=>setCity(e.target.value)} 
                                        required={true} 
                                        style={{width:'80%'}}>
                                        <option  value="">Select Your Venue City</option>
                                        {citys.map(c=>(
                                                <option key={c.id} value={c.id}>{c.city}</option>
                                        ))}
                                        
                                        
                                    </select>
}
                                </div>
                            </div>
                        </div>
                        <div className="form-row-2">
                        <div className="fields mb-4">
                                    <label>About Garden</label>
                                
                                <textarea 
                                    type="text" 
                                    id="textcontent"
                                    placeholder=" About Garden"
                                    onChange={e =>setAbout(e.target.value)}
                                    required={true} 
                                    style={{width:'80%'}}
                                ></textarea>
                                <div id="countWord"></div>
                            </div>
                            <div className="fields mb-4">
                                    <label>Features</label>
                                <textarea 
                                    type="text" 
                                    id="garden name" 
                                    placeholder="Features of Garden"
                                    onChange={e =>setFeatures(e.target.value)}
                                    required={true} 
                                    style={{width:'80%'}}
                                ></textarea>
                            </div>
                            <div className="btn_center">
                            <button type="submit" className="block secondary">Add Venue</button>
                            </div>
                        </div>
                        
                        
                </form>
            </div>
            <div>
            {
                    loading_vv ?<LoadingBox></LoadingBox>
                    :
                    error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
                    :
                <table>
                    <thead>
                        <tr>
                            
                            <th>
                                id
                            </th>
                            <th>
                                Name of Venue
                            </th>
                            <th>
                                Garden type
                            </th>
                            <th>
                                price
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Action
                            </th>
                            
                        </tr>
                    </thead>
                    {VendorVenues ?
                        <tbody>
                        
                            {
                                VendorVenues.map((vv )=>(
                            
                            <tr key={vv.id}>
                                <td >
                                    {vv.id}
                                </td>
                                <td>
                                    {vv.name}
                                </td>
                                <td>
                                    {vv.venue_type.type}
                                </td>
                                <td>
                                    {vv.actual_price}
                                </td>
                                <td>
                                    {vv.city.city}
                                </td>
                                <td>
                                    <div>
                                        <button className="btn_edit" onClick={() => props.history.push(`/venue/${vv.id}/edit`)}>edit</button>
                                        {'    '}
                                        <button className="btn_danger" onClick={() => deleteHandaler(vv)}>Delete</button>
                                        { '   '}
                                       
                                    </div>
                                    <div>
                                 
                                 
                              </div>
                                </td>
                            </tr>
                                
                                ))
                                }
                        </tbody>
    :
    <span></span>
                            }
                </table>
}
            </div>
            </div>
}
        </div>   
    )
}

export default Venuemanage;