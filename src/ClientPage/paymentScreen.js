import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { Createorder } from '../Action/OrderAction';


import { pay, Payorder } from '../Action/PayAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { CART_ITEM_RESET } from '../Constants/cartConstants';
import { CREATE_ORDER_RESET } from '../Constants/orderConstants';
import { PAY_RESET } from '../Constants/payConstants';

export default function PaymentScreen(props) {

    const dispatch = useDispatch();
    
    // const location = useLocation()
    const [total_price , setAmounts] = useState();
    const [OrderId , setOrderId] = useState();
    

    const cart = useSelector(state => state.cart);
    // const{cartItems } = cart;
    const payOrder = useSelector(state => state.payOrder);
    const {loading:orderloading, orderCreatesuccess , error:orderPayError}  = payOrder;
    const Razorpay = useSelector(state =>state.Razorpay);
    const {loading:payloading,paysuccess,error:payError }= Razorpay;
    const order = useSelector(state =>state.order);
    const {loading, OderCreateSuccess, error:orderError }= order;

    // const amo =cartItems.reduce((a,c)=> a + c.price,0)
    const amounts = 26250;
 
 
    
    useEffect(() => {
      
     if(!orderCreatesuccess){
      dispatch(Payorder(amounts))
     }
     else{
      console.log("bibash")
      setAmounts(orderCreatesuccess.amount);
      setOrderId(orderCreatesuccess.id)
      console.log(total_price)
      if(!paysuccess){
        setTimeout((e)=>{
          dispatch(pay(total_price, OrderId))
            },2000)
      }
     }
     if(paysuccess){
      const orders =cart.cartItems;
      setTimeout((e)=>{
        dispatch(Createorder(amounts,orders))
      },5000)
      if(OderCreateSuccess){

        swal("Order Created Successfully", "We Will Contact You Soon", "success")
        props.history.push('/order')
       
        dispatch({
          type:PAY_RESET
        })
        dispatch({
          type:CART_ITEM_RESET
        })
        dispatch({type:CREATE_ORDER_RESET})
      }
  }
   }, [OderCreateSuccess, OrderId, amounts, cart.cartItems, dispatch, orderCreatesuccess, paysuccess, props.history, props.location, total_price])
   
   
   
  
  const showRazorpay = async () => {
     

   dispatch(pay(total_price, OrderId));  
};   
    
    return (
        <div className='main top_center'>
        {loading ? <LoadingBox></LoadingBox>
          :orderError ? <MessageBox>{orderError.message || orderError}</MessageBox>
            : orderloading ? <LoadingBox></LoadingBox>
            :orderPayError ? <MessageBox>{orderPayError.message || orderPayError}</MessageBox>
        : payloading ? <LoadingBox></LoadingBox>
        :payError && <MessageBox>{payError.message || payError}</MessageBox>
        
        }
            <div style={{justifyContent:'center', fontSize:'2rem'}}>
            <button onClick={showRazorpay} className="btn btn-primary btn-block" style={{position:'absolute',top:'40%',left:'40%', fontSize:'2rem'}}>
              Pay with razorpay
          </button>

          </div>
        </div>
    )
}
