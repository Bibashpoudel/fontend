import axios from "axios"
import { PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS } from "../Constants/payConstants"


// const username = 'rzp_test_3TZ1rF1R2MSLhG'
// const password = '3LYlYtX0LUxv6CXAApKAEHto'


const authdata = 'cnpwX3Rlc3RfM1RaMXJGMVIyTVNMaEc6M0xZbFl0WDBMVXh2NkNYQUFwS0FFSHRv'



export const Payorder = (amount, currency, receipt)=> async(dispatch )=>{

    dispatch({
        type:PAY_ORDER_REQUEST,
        payload:{amount, currency, receipt}
    })

   try {
    const {data} = await axios.post( 'https://api.razorpay.com/v1/orders',{amount, currency, receipt},{
        headers:{
            'Authorization' : `Basic ${authdata}` ,
            'Content-Type': 'application/json',
            'accept':'application/json'        
        }
    })
    dispatch({
        type:PAY_ORDER_SUCCESS,
        payload:data
    })
   } catch (error) {
       dispatch({
           type:PAY_ORDER_FAIL,
           payload:
           error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       })
       
   }

}