import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { VenueImageadd } from '../../Action/ImageAction';
import { VendorVenueList } from '../../Action/vendorAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';



function UploadImage(){

    const [images, setImage] = useState(null)
    const [media, setMediaImage] = useState();
    const [venue, setVenue] = useState('')

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            setMediaImage(event.target.files[0])
        }
        if(success){
            setImage('')
        }
    }
    const VVenues = useSelector(state =>state.VVenues)
    const{loading:loading_vv,error:error_vv, VendorVenues} = VVenues;
    const imageAdd = useSelector(state => state.imageAdd)
    const {loading, error, success} = imageAdd;

    const dispatch = useDispatch();

    const addImage = (e)=>{
        e.preventDefault();

        dispatch(VenueImageadd(venue, media))
    }



    
    useEffect(()=>{
        if(success){
                swal("congratulations! your image has been added successfully", "Thanks for believing us", "success")
        }
        
        dispatch(VendorVenueList())
        
    },[success,dispatch])
    return (
        <div>
            {
             loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                    
                    :

           <form onSubmit={addImage} enctype="multipart/form-data"> 
               <div>
               
                    <div className="">
                    {
                    loading_vv ? <LoadingBox></LoadingBox>
                    :
                    error_vv ? <MessageBox variant="danger">{error_vv}</MessageBox>
                    
                    :
                    <select  onChange={e =>setVenue(e.target.value)}>
                    <option  value="" >Select Your venue</option>
                            {VendorVenues.map(ven =>(
                            <option key={ven.id} value={ven.id}>{ven.name}</option>
                            ))}
                    </select>
}
                    </div>
                    
               </div>
                <div>
                    <input type="file" onChange={onImageChange} className="filetype" />
                    <img className='small' src={images} alt="preview " ></img>
                </div>
                <div className="btn_center">
                    <button type="submit" className="block secondary">Upload Image</button>
                </div>
           </form>
}
        </div>
    )
}

export default UploadImage;