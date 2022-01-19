import React, { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserOrderList } from '../../Action/OrderAction';
import MessageBox from '../../components/MessageBox';
import LoadingBox from '../../components/LoadingBox';


export function Orders(){


    const UserOrders = useSelector(state => state.UserOrders)
    const {loading, error} =UserOrders;
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(UserOrderList())
    }, [dispatch])
    return (
        <div>
           {loading && <LoadingBox></LoadingBox>}
           {error && <MessageBox>{error}</MessageBox>}
        </div>
    )
}