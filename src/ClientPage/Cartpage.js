
import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, reomveFromCart } from '../Action/CartAction';


import MessageBox from '../components/MessageBox';

function CartScreen(props){
    const venueId = props.match.params.id;
    
    
   
    
    const cart = useSelector(state => state.cart);
    const{cartItems } = cart;
    
    

    const dispatch = useDispatch();
    

  

    const removeCartHandaler =(id) =>{
        dispatch(reomveFromCart(id))

    }
    const amount = parseInt(cartItems.reduce((a,c)=> a + c.price,0))
   
    const checkOuthandaler =()=>{
        props.history.push(`/signin?redirect=/payment/${amount}`)
       
       
        // dispatch(Payorder(amount)); // if user is already login it will redirect to shiping
        
    }
    
    
  

    useEffect(() =>{
        
     if(venueId){
        dispatch(addtoCart(venueId));
     }
   
    },[dispatch,venueId]);

    

    return(
        <div className="cart-row top">
            <div className="cart-col-2">
                <h2>  Shopping Cart </h2>
                {cartItems.length === 0?
                <MessageBox>
                    Cart is Empty.
                    <Link to ="/">Go to shop</Link>
                </MessageBox> 
                :(
                    <ul>
                        {
                            cartItems.map((item) =>(
                                <li key={item._id}>
                                    <div className="cart-main">
                                        
                                        {item.service ?
                                            <div>
                                                <div className="min-30">
                                                    <label>Service Name:</label>{' '}
                                                    <Link style={{color:'blue'}}to={`/service/${item.id}`}>{item.name}</Link>

                                                </div>
                                                <div>
                                                    <label>Service Price:</label>{' '}
                                                    {item.price}
                                                </div>
                                                {
                                                    item.no_of_guest === 0 ?
                                                    <div>
                                                    </div>
                                                    :
                                                    <div>
                                                        {item.no_of_guest}
                                                    </div>
                                                }
                                                 {
                                                    item.no_of_days === 0 ?
                                                    <div>
                                                    </div>
                                                    :
                                                    <div>
                                                        {item.no_of_days}
                                                    </div>
                                                }
                                                <div>
                                                    <button type="button" className='btn_danger' onClick={()=> removeCartHandaler(item.service)}>Delete</button>
                                                </div>
                                            
                                                
                                            </div>
                                            :<div>
                                                <div>
                                                    <img src={item.image} alt={item.name} className="small"></img>
                                                </div>

                                            
                                                <div className="min-30">
                                                    <label>Garden Name:</label>{' '}
                                                    <Link style={{color:'blue'}} to={`/venue/${item.id}`}>{item.name}</Link>

                                                </div>
                                                <div>
                                                    <label>Venue Price:</label>{' '}
                                                    {item.price}
                                                </div>
                                                <div>
                                                    <button type="button" className='btn_danger' onClick={()=> removeCartHandaler(item.venue)}>Delete</button>
                                                </div>
                                            </div>
                                        }
                                        
                                        
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )   
            }

            </div>
            <div className="cart-col-1">
                <div className="card card-body">
                    <ul>
                       
                        
                            <li>
                                    
                                                    
                                            
                                    <h2>
                                        Subtotal:
                                        $ ( {cartItems.reduce((a,c)=> a + c.price,0  ) } )

                                    </h2>
                                    
                                    {/* <h2>
                                        Subtotal:
                                        $ ( {cartItems.reduce((a,c)=> a + c.price,0  ) } )

                                    </h2> */}

                                   
                            </li>
                            
                        <li>
                            <button type="button" onClick={checkOuthandaler} className="primary block " disabled={cartItems.length === 0}>Check Out</button>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
export default CartScreen;