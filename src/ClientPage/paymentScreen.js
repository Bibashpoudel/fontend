import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import swal from 'sweetalert';
import { Createorder } from '../Action/OrderAction';


import { pay, Payorder } from '../Action/PayAction';
import LoadingBox from '../components/LoadingBox';
import { CART_ITEM_RESET } from '../Constants/cartConstants';
import { CREATE_ORDER_RESET } from '../Constants/orderConstants';
import { PAY_ORDER_RESET, PAY_RESET } from '../Constants/payConstants';

export default function PaymentScreen(props) {

    const dispatch = useDispatch();
    
    // const location = useLocation()
    const [total_price , setAmounts] = useState();
    const [OrderId , setOrderId] = useState();
    

    const cart = useSelector(state => state.cart);
    const{cartItems } = cart;
    const payOrder = useSelector(state => state.payOrder);
    const {loading:orderloading, orderCreatesuccess}  = payOrder;
    const Razorpay = useSelector(state =>state.Razorpay);
    const {loading:payloading,paysuccess }= Razorpay;
    const order = useSelector(state =>state.order);
    const {loading, OderCreateSuccess }= order;

    const amo =cartItems.reduce((a,c)=> a + c.price,0)
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
            },3000)
      }
     }
     if(paysuccess){
      const orders =cart.cartItems;
      setTimeout((e)=>{
        dispatch(Createorder(amounts,orders))
      },5000)
      if(OderCreateSuccess){

        swal("Order Created Successfully", "We Will Contact You Soon", "success")
        dispatch({
          type:PAY_RESET
        })
        dispatch({
          type:CART_ITEM_RESET
        })
        dispatch({type:CREATE_ORDER_RESET})
        setTimeout(()=>{
          props.location.push('/orders')
        },5000)
      }
      
  }
   
     
 
   }, [OderCreateSuccess, OrderId, amounts, cart.cartItems, dispatch, orderCreatesuccess, paysuccess, props.history, total_price])
   
   
   
  
  const showRazorpay = async () => {
     

   dispatch(pay(total_price, OrderId));  
};   
    
    return (
        <div>
          {loading && <LoadingBox></LoadingBox>}
          {orderloading && <LoadingBox></LoadingBox>}
          {payloading && <LoadingBox></LoadingBox>}
            <div style={{justifyContent:'center'}}>
            <button onClick={showRazorpay} className="btn btn-primary btn-block">
              Pay with razorpay
          </button>

          </div>
        </div>
    )
}
