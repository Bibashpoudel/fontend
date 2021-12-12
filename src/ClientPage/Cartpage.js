
import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, reomveFromCart } from '../Action/CartAction';


import MessageBox from '../components/MessageBox';

function CartScreen(props){
    const venueId = props.match.params.amount;
    
    
   
    
    const cart = useSelector(state => state.cart);
    const{cartItems } = cart;
    
    

    const dispatch = useDispatch();
    

  

    const removeCartHandaler =(venueId) =>{
        dispatch(reomveFromCart(venueId))

    }
    const amount = parseInt(cartItems.reduce((a,c)=> a + c.price,0))
   
    const checkOuthandaler =()=>{
        props.history.push(`/signin?redirect=/payment/${amount}`)
       
       
        // dispatch(Payorder(amount)); // if user is already login it will redirect to shiping
        
    }
    
    
  

    useEffect(() =>{
        
        dispatch(addtoCart(venueId));
        
        
    
   
   
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
                                        <div>
                                            <img src={item.image} alt={item.name} className="small"></img>
                                        </div>

                                    
                                        <div className="min-30">
                                            <label>Garden Name:</label>{' '}
                                            <Link to={`/venue/${item.id}`}>{item.name}</Link>

                                        </div>
                                        {item.service === '' ?
                                            <div>
                                                
                                            </div>
                                            :<div>
                                            <label>Selected Services:</label>{' '}
                                                {item.service}
                                            </div>
                                        }
                                        {
                                            item.totalPrice === '0' ?
                                            <div>
                                                <label>Venue Price:</label>{' '}
                                                {item.price}
                                            </div>
                                            :
                                            <div>
                                                <label>Total Price:</label>{' '}
                                                {item.totalPrice}
                                            </div>
                                        }
                                        <div>
                                            <button type="button" onClick={()=> removeCartHandaler(item.venue)}>Delete</button>
                                        </div>
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