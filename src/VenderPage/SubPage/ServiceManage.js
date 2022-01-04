import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { ServiceAdd, VenueServices } from '../../Action/ServicesAction';

import MessageBox from '../../components/MessageBox';
import LoadingBox from '../../components/LoadingBox'
import { VendorVenueList } from '../../Action/vendorAction';

export function ServiceManage(props) {

        const [name, setName] = useState('');
    const [actual_price, setPrice] = useState('');
    const [display_price, SetDisplayPrice] =useState('');
    const [display_image, setImages] =useState('');
    const [images, setImage] =useState('');
    const [description, setDescription] =useState('');
    const [ is_true ,setisChecked] = useState(false);
    const [venue, setVenue] = useState('');

    const addService = useSelector(state =>state.addService);
    const{loading:addloading, error:adderror, success} =addService;
    const venueService =useSelector(state =>state.venueService);
    const {loading:loading_vs, error:error_vs, vService} = venueService;
    const VVenues = useSelector(state =>state.VVenues)
    const{loading:loading_vv,error:error_vv, VendorVenues} = VVenues;
    const  dispatch = useDispatch();
    
    const chekcedhandaler = ()=>{
             
        setisChecked(!is_true)
        }
    const addServicehandaler = ( e) =>{
            e.preventDefault();

          
            dispatch(ServiceAdd(name, venue ,actual_price, display_price, display_image,description, is_true))
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
      const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
          setImages(event.target.files[0]);
        }
       }
      useEffect(()=>{
              if(success){
                      swal("congratulations! your Services has been added successfully", "Thanks for believing us", "success")
              }

              dispatch(VendorVenueList())
              dispatch(VenueServices())
             
              
              
      },[dispatch,success])
     
        return(
                <div>{
                        addloading ? <LoadingBox></LoadingBox>
                        :
                        adderror ? <MessageBox variant="danger">{adderror}</MessageBox>
                        :
                        loading_vv ? <LoadingBox></LoadingBox>
                        :
                        error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
                        
                        :
                        loading_vs ?<LoadingBox></LoadingBox>
                        :
                        error_vs ? <MessageBox variant="danger">{error_vs}</MessageBox>
                        :
                        <div className="ven_serv_manage">
                                <form className=" " onSubmit={addServicehandaler}>
                                        <div>
                                                <h2 style={{textAlign:'center'}}>Update Your's venue Details !</h2>
                                        </div>
                                        <div className="form-col-2">
                                                <div>
                                                        <div className="">
                                                                
                                                                <input 
                                                                        type="text" 
                                                                        id="gardenname" 
                                                                        placeholder="Serice Name"
                                                                        onChange={e => setName(e.target.value)}
                                                                        
                                                                ></input>
                                                        </div>
                                        
                                                        <div className="">
                                                        
                                                                <input 
                                                                        type="text" 
                                                                        id="gardenPrice" 
                                                                        placeholder=" service Price"
                                                                        
                                                                        onChange={annotate}
                                                                        
                                                                ></input>
                                                                
                                                                <span>
                                                                <div id='printchatbox'></div>
                                                                </span>
                                                        </div>
                                                </div>
                                                <div className="ser-mng-col-3">
                                                        
                                                        <div className="tooltip">
                                                                <input className="tooltip"
                                                                        type="checkbox"
                                                                        id="isTrue"   
                                                                        onChange={chekcedhandaler} 
                                                                />
                                                        
                                                                <span class="tooltiptext">For Cattering Services and Price is PerPlate </span>
                                                                </div>
                                                        
                                                        <div className=" image_field">
                                                        
                                                        <input 
                                                                type="file" 
                                                                id="image" 
                                                                placeholder="image"

                                                                onChange={onImageChange}
                                                                
                                                        ></input>
                                                        <div>
                                                        <img className='small' src={images} alt="preview " ></img>
                                                        </div>
                                                        </div>
                                                        <div>
                                                        {
                                                        loading_vv ? <LoadingBox></LoadingBox>
                                                        :
                                                        error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
                                                        
                                                        :
                                                        <div className="">
                                                        { VendorVenues ?
                                                                <select  onChange={e =>setVenue(e.target.value)}>
                                                                <option  value="" >Select Your venue</option>
                                                                        {VendorVenues.map((ven) =>(
                                                                        <option key={ven.id} value={ven.id}>{ven.name}</option>
                                                                        ))}
                                                                </select>
                                                                :
                                                                <div>{error_vv}</div>
                                                                        }
                                                        </div>
                                                        }
                                        
                                                </div>
                                                </div>
                                        </div>
                                        
                                        <div className="form-row-2">
                                                <div className="">
                                                        
                                                        <textarea 
                                                        type="text" 
                                                        id="textcontent"
                                                        placeholder="Describe Your Services"
                                                        onChange={e =>setDescription(e.target.value)}
                                                        
                                                        ></textarea>
                                                        <div id="countWord"></div>
                                                </div>
                                                <div className="btn_center">
                                                <button type="submit" className="block secondary">Add Service</button>
                                        </div>
                                        </div>
                                        
                                </form>
                        </div>
}
                        <div>
            {
                    loading_vs ?<LoadingBox></LoadingBox>
                    :
                    error_vs ? <MessageBox variant="danger">{error_vs}</MessageBox>
                    :
                <table>
                    <thead>
                        <tr>
                            
                            <th>
                                id
                            </th>
                            <th>
                                Name of Service
                            </th>
                        
                            <th>
                                price
                            </th>
                           
                            <th>
                                Action
                            </th>
                        </tr>
                    </thead>
                    {vService ?
                        <tbody>
                        
                            {
                                vService.map((vs )=>(
                            
                            <tr key={vs.id}>
                                <td >
                                    {vs.id}
                                </td>
                                <td>
                                    {vs.name}
                                </td>
                                <td>
                                    {vs.actual_price}
                                </td>
                                
                                
                                <td>
                                    <div>
                                        <button className="btn_edit" onClick={() => props.history.push(`/service/${vs.id}/edit`)}>edit</button>
                                        {'    '}
                                        <button className="btn_danger">Delete</button>
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
        )
}