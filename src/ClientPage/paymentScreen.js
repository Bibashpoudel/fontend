import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Createorder } from '../Action/OrderAction';


import { pay, Payorder } from '../Action/PayAction';

export default function PaymentScreen(props) {

    const dispatch = useDispatch();
    
    // const location = useLocation()
    const [total_price , setAmounts] = useState();
    const [OrderId , setOrderId] = useState();
    const [count , SetCount] = useState(0)

    const cart = useSelector(state => state.cart);
    const{cartItems } = cart;
    const payOrder = useSelector(state => state.payOrder);
    const {orderCreatesuccess}  = payOrder;
    const Razorpay = useSelector(state =>state.Razorpay);
    const {paysuccess }= Razorpay;

    const amo =cartItems.reduce((a,c)=> a + c.price,0)
    const amounts = parseInt(amo)
 
 
    
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
    //  }else{
    //       setAmounts(success.amount);
    //       setOrderId(success.id)
    //       // dispatch(pay(Amounts, OrderId))
    //  }
    // const orders =cart.cartItems;
    //   if(!paysuccess){
      
    //  }
    //  else{
    //    console.log("Bibash")
    //   setrazorpayOrderId(paysuccess.razorpay_order_id);
    //   setrazorpayPaymentId(paysuccess.razorpay_payment_id);
    //   setrazorpaySignature(paysuccess.razorpay_signature);
    //   setTimeout((e)=>{
    //     dispatch(Createorder( amounts, razorpayOrderId, razorpayPaymentId, razorpaySignature, orders))
    //   },5000)
  
    //  }
     
 
   }, [OrderId, amounts, dispatch, orderCreatesuccess, paysuccess, total_price])
   
   const orders =cart.cartItems;
   if(count === 0 && paysuccess){
     
      setTimeout((e)=>{
        dispatch(Createorder(amounts,orders))
      },5000)
      SetCount(1);
  }
  
  const showRazorpay = async () => {
     

   dispatch(pay(total_price, OrderId));  
};   
    
    return (
        <div>
          <button onClick={showRazorpay} className="btn btn-primary btn-block">
        Pay with razorpay
      </button>

        </div>
    )
}
