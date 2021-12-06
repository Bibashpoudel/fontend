import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Payorder } from '../Action/PayAction';

export default function PaymentScreen(props) {

    const dispatch = useDispatch();
    const currency ="INR";
    const receipt = "Sevenoathpay"



    const payOrder = useSelector(state => state.payOrder);
    const {success, error}  = payOrder;
    const amount = props.amount

    useEffect(() => {
       dispatch(Payorder(amount, currency, receipt));
       if(success){
           
       }
       if(error){

       }


    }, [dispatch, amount, currency, receipt, success, error])

    return (
        <div>
            Payment
        </div>
    )
}
