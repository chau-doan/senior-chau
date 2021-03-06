import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import {useDispatch, useSelector} from "react-redux";
import SigninScreen from "./screens/SigninScreen";
import {signout} from "./actions/userActions";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOderScreen from "./screens/PlaceOderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PrivateRoute from "./component/PrivateRoute";
import AdminRoute from "./component/AdminRoute";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import CreateProductScreen from "./screens/CreateProductScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import SearchBox from "./component/SearchBox";
import SearchScreen from "./screens/SearchScreen";
import {listProductCategories} from "./actions/productActions";
import MessageBox from "./component/MessageBox";
import LoadingBox from "./component/LoadingBox";
import MapScreen from "./screens/MapScreen";

function App() {
    const cart = useSelector((state) => state.cart);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const {cartItems} = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo} = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };
    const productCategoryList = useSelector((state) => state.productCategoryList);
    const {
        loading: loadingCategories,
        error: errorCategories,
        categories,
    } = productCategoryList;
    useEffect(() => {
        dispatch(listProductCategories());
    },[dispatch]);

  return (
      <BrowserRouter>
      <div className="grid-container">
          <header className="row">
              <div>
                  <button
                      type='button'
                      className='open=sidebar'
                      onClick={() => setSidebarIsOpen(true)}>
                  </button>
                  <Link className="brand" to="/"> CHTQ_SHOPPING </Link>
              </div>
              <div>
                  <Route render={({history}) => (
                      <SearchBox history={history}></SearchBox>
                      )}>
                  </Route>
              </div>
              <div>
                  <Link to="/cart">
                      <i className='fa fa-shopping-cart icon'/> Cart
                      {cartItems.length > 0 && (
                          <span className='badge'>{cartItems.length}</span>
                      )}
                  </Link>
                  {userInfo ? (
                      <div className='dropdown'>
                          <Link to='#'>
                              {userInfo.name} <i className='fa fa-caret-down'>
                          </i>{''}
                          </Link>
                          <ul className='dropdown-content'>
                              <li>
                                  <i className='fa fa-users icon'/>
                                  <Link to='/profile'>User Profile</Link>
                              </li>
                              <li>
                                  <i className='fa fa-cart-arrow-down icon'/>
                                  <Link to='/orderhistory'>Order History</Link>
                              </li>
                              <li>
                                  <i className='fa fa-arrow-left icon'/>
                                  <Link to='#signout' onClick={signoutHandler}>
                                      Sign Out
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  ) : (
                      <Link to="/signin"> Sign In</Link>
                  )}
                  {userInfo && userInfo.isAdmin && (
                      <div className="dropdown">
                          <Link to="#admin">
                              Admin <i className="fa fa-caret-down"></i>
                          </Link>
                          <ul className="dropdown-content">
                              <li>
                                  <i className='fa fa-align-left icon'/>
                                  <Link to="/dashboard">Dashboard</Link>
                              </li>
                              <li>
                                  <i className='fa fa-product-hunt icon'/>
                                  <Link to="/productlist">Products</Link>
                              </li>
                              <li>
                                  <i className='fa fa-cart-plus icon'/>
                                  <Link to="/orderlist">Orders</Link>
                              </li>
                              <li>
                                  <i className='fa fa-user-plus icon'/>
                                  <Link to="/userlist">Users</Link>
                              </li>
                          </ul>
                      </div>
                  )}
              </div>
          </header>
          <aside className={sidebarIsOpen ? 'open' : ''}>
              <ul className="categories">
                  <li>
                      <strong>Categories</strong>
                      <button
                          onClick={() => setSidebarIsOpen(false)}
                          className="close-sidebar"
                          type="button"
                      >
                          <i className="fa fa-close"></i>
                      </button>
                  </li>
                  {loadingCategories ? (
                      <LoadingBox>
                      </LoadingBox>
                  ) : errorCategories ? (
                      <MessageBox variant="danger">{errorCategories}</MessageBox>
                  ) : (
                      categories.map((c) => (
                          <li key={c}>
                              <Link
                                  to={`/search/category/${c}`}
                                  onClick={() => setSidebarIsOpen(false)}
                              >
                                  {c}
                              </Link>
                          </li>
                      ))
                  )}
              </ul>
          </aside>
          <main>
              <Route path ='/signin' component={SigninScreen}>
              </Route>
              <Route path ='/register' component={RegisterScreen}>
              </Route>
              <Route path ='/shipping' component={ShippingAddressScreen}>
              </Route>
              <Route path ='/payment' component={PaymentMethodScreen}>
              </Route>
              <Route path ='/placeorder' component={PlaceOderScreen}>
              </Route>
              <Route path ='/order/:id' component={OrderScreen}>
              </Route>
              <Route path ='/orderhistory' component={OrderHistoryScreen}>
              </Route>
              <Route path = '/search/name/:name?' component={SearchScreen}>
              </Route>
              <Route path="/search/category/:category" component={SearchScreen} exact>
              </Route>
              <Route path="/search/category/:category/name/:name" component={SearchScreen} exact>
              </Route>
              <Route
                  path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
                  component={SearchScreen}
                  exact
              >
              </Route>
              <PrivateRoute path = '/profile' component={ProfileScreen}>
              </PrivateRoute>
              <PrivateRoute path = '/map' component={MapScreen}>
              </PrivateRoute>
              <AdminRoute path= '/productlist' component={ProductListScreen}>
              </AdminRoute>
              <Route path='/cart/:id?' component={CartScreen}>
              </Route>
              <AdminRoute path ='/product/:id/edit' component={ProductEditScreen}>
              </AdminRoute>
              <AdminRoute path="/orderlist" component={OrderListScreen}>
              </AdminRoute>
              <AdminRoute path="/user/:id/edit" component={UserEditScreen}>
              </AdminRoute>
              <AdminRoute path='/userlist' component={UserListScreen}>
              </AdminRoute>
              <Route path='/' component={HomeScreen} exact>
              </Route>
              <Switch>
                  <AdminRoute path ='/product/create' component={CreateProductScreen} exact>
                  </AdminRoute>
                  <Route path='/product/:id' component={ProductScreen} exact>
                  </Route>
              </Switch>
          </main>
          <footer className="row center">Copyright @ 2022 CHTQ_Shopping.com All Rights Reserved.
          </footer>
          </div>
      </BrowserRouter>
  );
}

export default App;
