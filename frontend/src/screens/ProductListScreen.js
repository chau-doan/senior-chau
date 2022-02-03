import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, listProducts} from '../actions/productActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import {PRODUCT_DELETE_RESET} from "../constants/productConstants";


export default function ProductListScreen(props) {
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = productDelete;

    const dispatch = useDispatch();

    useEffect(() => {
        if (successDelete) {
            dispatch({type: PRODUCT_DELETE_RESET});
        }
        dispatch(listProducts());
    }, [ dispatch, successDelete]);

    const deleteHandler = (product) => {
        /// TODO: dispatch delete action
       if (window.confirm('Are you sure to delete?')) {
           dispatch(deleteProduct(product._id));
       }
    };
    const createHandler = () => {
        props.history.push(`/product/create`);
    };
    return (
        <div>
            <div className="row">
                <h1>Products</h1>
                <button type="button" className="primary" onClick={createHandler}>
                    Create Product
                </button>
            </div>
            {loadingDelete && <LoadingBox></LoadingBox>}
            {errorDelete && <MessageBox variant='danger'>{errorDelete}</MessageBox>}
            {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>CATEGORY</th>
                        <th>BRAND</th>
                        <th>ACTIONS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.brand}</td>
                            <td>
                                <button
                                    type="button"
                                    className="small"
                                    onClick={() =>
                                        props.history.push(`/product/${product._id}/edit`)
                                    }
                                >
                                    Edit
                                </button>
                                <button
                                    type="button"
                                    className="small"
                                    onClick={() => deleteHandler(product)}
                                >
                                    Delete
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