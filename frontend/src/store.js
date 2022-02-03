import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {
    productCategoryListReducer,
    productCreateReducer, productDeleteReducer,
    productDetailsReducer,
    productListReducer, productReviewCreateReducer,
    productUpdatedReducer
} from "./reducer/productReducers";
import {cartReducer} from "./reducer/cartReducers";
import {
    userAddressMapReducer,
    userDeleteReducer,
    userDetailsReducer, userListReducer,
    userRegisterReducer,
    userSigninReducer,
    userUpdateProfileReducer, userUpdateReducer
} from "./reducer/userReducers";
import {
    orderCancelReducer,
    orderCreateReducer, orderDeleteReducer, orderDeliverReducer,
    orderDetailsReducer,
    orderListReducer,
    orderMineListReducer,
    orderPayReducer
} from "./reducer/orderReducers";


const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
    cart:{
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingAddress: localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
        paymentMethod: 'Paypal',
    },
};
const reducer = combineReducers( {
    productList: productListReducer,
    productDetails : productDetailsReducer,
    cart: cartReducer,
    userSignin : userSigninReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    productCategoryList: productCategoryListReducer,
    productReviewCreate: productReviewCreateReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdatedReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderMineList: orderMineListReducer,
    orderDelete: orderDeleteReducer,
    orderCancel: orderCancelReducer,
    orderDeliver: orderDeliverReducer,
    userAddressMap: userAddressMapReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =  createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;