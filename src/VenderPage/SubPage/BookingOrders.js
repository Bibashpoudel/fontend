import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { VendorOrderList } from '../../Action/OrderAction';
import Loading from '../../components/LoadingBox.js'
import MessageBox from '../../components/MessageBox.js'
import OrderServiceCard from './OrderServiceCard';
import OrdervenueCard from './OrdervenueCard';

function Bookingorder() {
  const orderList = useSelector(state => state.orderList)
  const { loading, error, orders } = orderList;

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(VendorOrderList())
  },[dispatch])
  
    return (
        <div>
        <div>Orders</div>
        {
          loading ? <Loading></Loading>
          :
          error ? <MessageBox varient={'danger'}>{error}</MessageBox>
          : 
          <div>
            <div>
              <table>
                <tr>
                    
                    <th>
                        Customer
                    </th>
                    <th>
                        From
                    </th>
                    <th>
                        To
                    </th>
                    <th>
                        Services
                    </th>
                    <th>
                      Status
                    </th>
                    <th>
                       Amount  
                    </th>
                </tr>
                
                 
                    {
                      orders.venues ?
                      <>
                      {
                        orders.venues.map(venue => (
                          <OrdervenueCard venue={venue} key={venue.id} />
                        ))
                      }
                        </>
                        :''
                    }
                
                
              </table>
            </div>
          </div> 
       }
      </div>
    )
}

export default Bookingorder;