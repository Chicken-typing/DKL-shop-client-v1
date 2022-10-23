import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrders } from '../../../action'
const OrderTab = () => {
    const dispatch = useDispatch()
    dispatch(fetchOrders())

    return (
        <div>

        </div>
    );
}

export default OrderTab;
