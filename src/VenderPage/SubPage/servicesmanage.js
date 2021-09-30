import React from 'react'



function ServicesManage(){




    const annotate =() =>{
        const typed= document.getElementById("gardenPrice").value;

        const price = parseInt(typed);
        const DisplayPrice = price + price *0.05;
        console.log(DisplayPrice)
        if(typed === ''){
            document.getElementById("printchatbox").innerHTML= ' ';
        }
        else{
            document.getElementById("printchatbox").innerHTML= DisplayPrice;
        }

        
      }





    
    return (
        <div className="ven_serv_manage">
            <form className=" ">
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
                                
                                    
                                ></input>
                            </div>
                           
                            <div className="">
                                
                                <input 
                                    type="text" 
                                    id="gardenPrice" 
                                    placeholder="Garden Price"
                                    
                                    onChange={annotate}
                                    
                                ></input>
                                <span>
                                <div id='printchatbox'></div>
                                </span>
                            </div>
                           
                            
                        </div>
                        <div className="ser-mng-col-3">
                            <div className=" image_field">
                                
                                <input 
                                    type="file" 
                                    id="image" 
                                    placeholder="image"
                                
                                    
                                ></input>
                            </div>
                            <div className="">
                                
                                <select>
                                    <option>Available</option>
                                    <option>UnAvailable</option>
                                </select>
                            </div>
                            <div className="">
                                
                                <select>
                                    <option>city1</option>
                                    <option>city2</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-row-2">
                        <div className="">
                            
                            <textarea 
                                type="text" 
                                id="textcontent"
                                placeholder=" About Garden"
                            
                                
                            ></textarea>
                            <div id="countWord"></div>
                        </div>
                        <div className="">
                            
                            <textarea 
                                type="text" 
                                id="garden name" 
                                placeholder="Features of Garden"
                            
                                
                            ></textarea>
                        </div>
                    </div>
                    
            </form>
        </div>
    )
}

export default ServicesManage;