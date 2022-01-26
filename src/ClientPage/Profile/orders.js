import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserOrderList } from '../../Action/OrderAction';
import MessageBox from '../../components/MessageBox';
import LoadingBox from '../../components/LoadingBox';
import { Link } from 'react-router-dom';
import './order.scss'
import OrderVCard from './OrderVCard';
import OrderSCard from './OrderSCard';

export function Orders(){


    const UserOrders = useSelector(state => state.UserOrders)
    const {loading, error,userOrder} =UserOrders;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(UserOrderList())
    }, [dispatch])
    return (
        <div className='top_center'>
         
           {loading ? <LoadingBox></LoadingBox>
           :
           error ? <MessageBox>{error.message}</MessageBox>
           :
           <div  >
             <div >Your Orders</div>
             <div className='user-order'>
              <div>{userOrder.length === 0 && <div><MessageBox>You have not Order Yet <Link to='/' style={{color:'dodgerblue'}}>Place Your Order</Link></MessageBox></div>}</div>
              
                {
                  userOrder.map((order) =>(
                    <div key={order.id}  >
                      <div style={{borderBottom:'.1rem solid #c0c0c0', marginBottom:'.4rem'}}>
                        Order <span style={{color:'blue',}}>#{order.razorpayOrderId}</span>
                        <div style={{color:'#c0c0c0',fontSize:'1.2rem',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}}>
                          <div>
                            Placed On
                          </div>
                          <div>
                            Status ; {order.status}
                          </div>
                          
                        </div>
                      </div>
                      
                   {
                    

                    order.detail.map(o =>(
                      <div>
                        {o.service === null ?
                        <div>
                          <OrderVCard  venues={o.venue} key={o.id}></OrderVCard>
                        </div>  
                        :
                        <div>
                         <OrderSCard services={o.service} key={o.id}></OrderSCard>
                          </div>
                      }
                        </div>
                    ))
                   }
                    </div>
                  ))
                }

            </div>
            </div>
}
        </div>
    )
}