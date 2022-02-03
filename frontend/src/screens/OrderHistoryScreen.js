import React, {useEffect} from 'react';
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {cancelOrder, deleteOrder, listOrderMine} from "../actions/orderActions";

export default function OrderHistoryScreen(props) {
    const orderMineList = useSelector((state) => state.orderMineList);
    const {loading, error, orders} = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);
    const cancelHandler = (order) => {
        // TODO: delete handler
        if (window.confirm('Are you sure to cancel?')) {
            dispatch(cancelOrder(order._id));
        }
    };
    return (
        <div>
            <h1>Order History</h1>
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant='danger'>{error}</MessageBox>
            ) : (
                <table className='table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>TOTAL</th>
                        <th>PAID</th>
                        <th>DELIVERED</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}
                                {order.isCancel &&
                                <span className='del'> Cancel </span>}</td>
                            <td>{order.createdAt.substring(0, 10)}</td>
                            <td>{order.totalPrice.toFixed(2)}</td>
                            <td>{order.isPaid ? order.paidAt.substring(0, 10): 'No'}</td>
                            <td>
                                {order.isDelivered
                                    ? order.deliveredAt.substring(0, 10)
                                    : 'No'}
                            </td>
                            <td>
                                <button
                                    type='button'
                                    className='small'
                                    onClick={() => {
                                        props.history.push(`/order/${order._id}`);
                                    }} >
                                    Details
                                </button>
                                <button
                                    type='button'
                                    className='small'
                                    onClick={() => cancelHandler(order)} >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

