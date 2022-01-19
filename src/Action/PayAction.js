import axios from "axios"
import { PAY_FAIL, PAY_ORDER_FAIL, PAY_ORDER_REQUEST, PAY_ORDER_SUCCESS, PAY_REQUEST, PAY_SUCCESS } from "../Constants/payConstants"


// const username = 'rzp_test_3TZ1rF1R2MSLhG'
// const password = '3LYlYtX0LUxv6CXAApKAEHto'





export const Payorder = (amount)=> async(dispatch, getState )=>{

    dispatch({
        type:PAY_ORDER_REQUEST,
        payload:{amount}
    })

   try {
    const {userSignin:{userInfo}} = getState();
    console.log("useringo " +userInfo )
    const {data} = await axios.post( '/api/order/create/',{amount},{
        headers:{
            'Authorization': 'Bearer '+ userInfo

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
            : error
       })
       
   }

}
export const pay = (amounts, orderid) => async(dispatch)=>{
    dispatch({
        type:PAY_REQUEST,
        payload:{amounts, orderid}
        
    })
    try {
        const options = {
            key_id: "rzp_test_3TZ1rF1R2MSLhG", // in react your environment variable must start with REACT_APP_
            key_secret: "3LYlYtX0LUxv6CXAApKAEHto",
            amount: amounts,
            currency: "INR",
            name: "Org. Name",
            description: "Test teansaction",
            image: "", // add image url
            order_id: orderid,
            handler: function (response) {
             
            dispatch({
                type:PAY_SUCCESS,
                payload:response
            })
            localStorage.setItem('Razorpay', JSON.stringify(response)); 
            },
           
            prefill: {
              name: "Sevenoath",
              email: "pdlbibash77@gmail.com",
              contact: "9863025214",
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#3399cc",
            },
          };
        
          
            const rzp1 = new window.Razorpay(options);
            rzp1.open();
          
            
    } catch (error) {
        dispatch({
            type:PAY_FAIL,
            payload:
            error.response && error.response.data.message
            ? error.response.data.message
            : error

        })
        
    }
}