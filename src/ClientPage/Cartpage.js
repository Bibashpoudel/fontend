
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, reomveFromCart } from '../Action/CartAction';


import MessageBox from '../components/MessageBox';

function CartScreen(props){
    const productId = props.match.params.id;
    const  qty = props.location.search ? Number(props.location.search.split('=')[1]):1;

    const cart = useSelector(state => state.cart);
    const{cartItems } = cart;

    const dispatch = useDispatch();

    useEffect(() =>{
        if(productId){
            dispatch(addtoCart(productId, qty));
        }
    },[dispatch, productId, qty]);

    const removeCartHandaler =(productId) =>{
        dispatch(reomveFromCart(productId))

    }
    const checkOuthandaler =()=>{
        props.history.push('/signin?redirect=shipping') // if user is already login it will redirect to shiping
    }
    

    return(
        <div className="row top">
            <div className="col-2">
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
                                    <div className="row">
                                        <div>
                                            <img src={item.images} alt={item.name} className="small"></img>
                                        </div>

                                    
                                    <div className="min-30">
                                        <Link to={`/product/${item.vendors}`}>{item.name}</Link>

                                    </div>
                                    <div>
                                        
                                        
                                    </div>
                                    <div>
                                        {item.price}
                                    </div>
                                    <div>
                                        <button type="button" onClick={()=> removeCartHandaler(item.product)}>Delete</button>
                                    </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                )   
            }

            </div>
            <div className="col-1">
                <div className="card card-body">
                    <ul>
                        
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