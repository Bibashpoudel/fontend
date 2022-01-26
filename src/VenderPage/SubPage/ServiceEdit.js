import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { ServiceUpdateAction, vendorServiceDetails } from '../../Action/ServicesAction';
import { VendorVenueList } from '../../Action/vendorAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { SERVICE_UPDATE_RESET } from '../../Constants/servicesConstants';

export default function ServiceEdit(props) {

    const serviceId = props.match.params.id;
    const [name, setName] = useState('');
    const [actual_price, setPrice] = useState('');
    const [display_price, SetDisplayPrice] =useState('');
    const [display_image, setImage] =useState('');
    const [description, setDescription] =useState('');
    const [ is_true ,setisChecked] = useState(false);
    const [venue, setVenue] = useState('');



    const vsDetails = useSelector(state => state.vsDetails)
    const {loading, error, vService} = vsDetails;
    const updateService = useSelector(state => state.updateService);
    const {loading:updateLoading,error:updateError, success:updateSuccess} = updateService;
    const VVenues = useSelector(state =>state.VVenues)
    const{loading:loading_vv,error:error_vv, VendorVenues} = VVenues;
    const typeService = useSelector(state => state.typeService);
    const {loading:serv_loading, error:serv_error, servicetype} = typeService;


    const updateServicehandaler =(e) =>{
        e.preventDefault();
        dispatch(ServiceUpdateAction(
            {
                id:serviceId,
                name,
                actual_price, 
                display_price,
                venue, 
                is_true,
                description
        }))
    }
    const chekcedhandaler = ()=>{
             
        setisChecked(!is_true)
        }
    const annotate =() =>{
        const typed= document.getElementById("gardenPrice").value;

        const price = parseInt(typed);
        const DisplayPrice = parseInt(price + price * 0.05);
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
      const dispatch = useDispatch()
      useEffect(() => {
        if(updateSuccess){
            
            swal("congratulations! your services has been  successfully updated", "Thank you for believing us", "success");
            props.history.push('/serviceManage');
            
        }

      
        if(!vService){
                dispatch({
                        type:SERVICE_UPDATE_RESET
                    })
            dispatch(vendorServiceDetails(serviceId))
        }else{
               
            setName(vService.name);
            setPrice(vService.actual_price);
            setisChecked(vService.is_true);
            setImage(vService.display_image);
            setDescription(vService.description);
            SetDisplayPrice(vService.display_price);
            setVenue(vService.venue)
        }
        dispatch(VendorVenueList())

      }, [dispatch, vService,serviceId,updateSuccess,props.history])
      console.log(display_price)
    return (
        <div>{
            loading ? <LoadingBox></LoadingBox>
            :
            error ? <MessageBox variant="danger">{error}</MessageBox>
            :
            updateLoading ? <LoadingBox></LoadingBox>
            :
            updateError ? <MessageBox variant="danger">{updateError}</MessageBox>
            :
            
            <div className="ven_serv_manage">
                    <form className=" " onSubmit={updateServicehandaler}>
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
                                                            value={name}
                                                    ></input>
                                            </div>
                            
                                            <div className="">
                                            
                                                    <input 
                                                            type="text" 
                                                            id="gardenPrice" 
                                                            placeholder=" service Price"
                                                            value={actual_price}
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
                                                            checked={is_true}
                                                            onChange={chekcedhandaler} 
                                                    />
                                            
                                                    <span class="tooltiptext">For Cattering Services and Price is PerPlate </span>
                                                </div>
                                            
                                                <div className=" image_field">
                                                
                                                        <input 
                                                                type="text" 
                                                                id="image" 
                                                                placeholder="image"
                                                                value={display_image}
                                                                onChange={e =>setImage(e.target.value)}
                                                                
                                                        ></input>
                                                </div>
                                                <div>
                                                {loading_vv ? <LoadingBox></LoadingBox>
                                                        :
                                                        error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
                                                        
                                                        :
                                                        <div className="">
                                                        
                                                        <select value={venue} onChange={e =>setVenue(e.target.value)}>
                                                        <option  value="">Select Your venue</option>
                                                                {VendorVenues.map(ven =>(
                                                                <option key={ven.id} value={ven.id}>{ven.type}</option>
                                                                ))}
                                                        </select>
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
                                            value={description}
                                            ></textarea>
                                            <div id="countWord"></div>
                                    </div>
                                    <div className="btn_center">
                                    <button type="submit" className="block secondary">Update Service</button>
                            </div>
                            </div>
                            
                    </form>
            </div>
}
            
        </div>
    )
}
