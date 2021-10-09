import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { VendorTypeList } from '../Action/vendorAction';
import { VenueTypeList } from '../Action/VenueAction';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';


export default function Categories() {


    const VendorTypes = useSelector((state) => state.VendorTypes);
    const {loading:loading_types, error:error_types, types} =VendorTypes;
    const venueTypeList = useSelector(state =>state.venueTypeList)
    const {loading, error, venueType} = venueTypeList;

    const dispatch = useDispatch();
    useEffect(()=>{
          
        dispatch(VendorTypeList())
        dispatch(VenueTypeList())
        

        
    },[dispatch])
    const [checkedState, setCheckedState] = useState([false, false, false,false])
 
    console.log(checkedState)
    
    // console.log(services)
    const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : false
     
    );
    console.log(position)

    setCheckedState(updatedCheckedState);
    }
    console.log(checkedState)
    
    
    return (
        <div>
            {
                loading_types ? <LoadingBox></LoadingBox>
                :      
                error_types ? <MessageBox variant="danger">{error_types}</MessageBox>
                :
                loading ?<LoadingBox></LoadingBox>
                :
                error ? <MessageBox>{error}</MessageBox>
                :
                <div className="main center margin">
            
                     {
                        types.map((t, index) =>(
                            <div className="row center" key={t.id}>
                                <div  className={`items type-${t.id} `} >
                                   <div className="items-data" onClick={() => handleOnChange(index)}>
                                        {t.type} {
                                                checkedState[index] ?
                                                <i className="fa fa-angle-up"></i>
                                                :
                                                <i className="fa fa-angle-down"></i>
                                            }
                                   </div>
                                   <div>
                                   <img className="custom" src="../images/vendorregister.jpg" alt="registerimg"></img>
                                   </div>
                                </div>
                             
                                
                              { checkedState[index] ?
                                   <div class="sub-item">
                                   {
                                       t.type === "Marriage Gardens" ?
                                       venueType.map(VT =>(
                                           <div className={`display-${index}`}>
                                               {VT.type}
                                           </div>
                                       ))
                                       
                                       :<div></div>
                                   }   
                                   </div>
                                   :<span></span>
                              }
                           
                        </div>

                        ))
                    }
                </div>
            }
        </div>
    )
}
