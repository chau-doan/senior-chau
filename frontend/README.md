3. Design Website Template
   1. Create amazona folder
   2. create template folder
   3. create index.html 
   4. lass default HTML code
   5. link to style.css
   6. create header, main and footer
   7. style elements
4. Display Products
   1. create products div
   2. add products attributes
   3. add Link, image, name, and price
5. Create React App
   1. npx create-react-app frontend
   2. npm start
   3. remove unused files 
   4. copy index.html content to App.js
   5. copy style.css content to index.js
   6. replace class with className
7. Create Rating and Product Component
   1. create component/Rating.js
   2. create div.rating
   3. style div.rating span and last span 
   4. Create Product component
   5. Use Rating component
8. Build Product Screen
   1. Install react-router-dom
   2. Use BrowserRouter and Router form Home Screen
   3. Create HomeScreen.js
   4. Add Product list code there 
   5. Create ProductScreen.js
   6. Add new Router from product details to App.js
   7. Create 3 columns for product image, info and action
9. Create Node.js Server
   1. run nom init iun root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
10. Load Products From Backend
   1. edit HomeScreen.js
   2. defined products, loading and error
   3. create useEffect
   4. defined async fetchData and call it
   5. install axios
   6. get data from /api/products
   7. show them in the list
   8. create Loading Component
   9. create Message Box Component
   10. use them in HomeScreen 
11. Install ESlint For Code Linting
   1. install VScode eslint extension
   2. npm install -D eslint
   3. run ./node_modules/.bin/eslint --init
   4. Create ./frontend/.env
   5. Add SKIP_PREFLIGHT_CHECK=true
12. Add Redux to Home Screen
   1. npm install redux react-redux
   2. Create store.js
   3. initState={products:[]}
   4. reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
   5. export default createStore(state=>state.products)
   6. Edit HomeScreen.js
   7. shopName = useSelector(state=>state.products)
   8. const dispatch = useDispatch()
   9. useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data)
   10. Add store to index.js
13. Add Redux to Product Screen
   1. create product details constants, actions and reducers
   2. add reducer to store.js
   3. use action in ProductScreen.js 
   4. add /api/product/:id to backend 
14. Handle Add to Cart Button
   1. Handle Add To Cart in ProductScreen.js
   2. create CartScreen.js
15. Implement Add to Cart Action 
   1. create addCart constants, actions, and reducers
   2. add reducer to store.js
   3. use action in CartScreen.js
   4. render cartItems.length
16. Build Cart Screen 
   1. create two columns for cart items and cart action 
   2. cartItems.length === 0 ? cart is empty 
   3. show item image, name, qty, and price
   4. Proceed to Checkout button 
   5. Implement remove from cart action
17. Implement Remove From Cart Action
   1. create removeFromCart constants, actions and reducers
   2. add reducer to store.js 
   3. use action in CartScreen.js
18. Connect To MongoDB
   1. npm install mongoose
   2. connect to mongodb
   3. create config.js
   4. nom install dotenv
   5. export MONGODB_URL
   6. create models/userModel
   7. create userSchema and userModel   
   8. create models/productModel.js
   9. create productSchema and productModel
   10. create userRoute
   11. Seed sample date
19. Create Sample Products In MongoDB
   1. create model/productModel.js
   2. create productSchema and productModel
   3. create productRoute
   4. Seed sample data
20. Create Sign-in Backend
   1. create /signin api
   2. check email and password
   3. generate token 
   4. install json web token 
   5. install dotenv 
   6. return token and data
   7. test it using postman
21. Design SignIn Screen 
   1. create SigninScreen 
   2. render email and password fields 
   3. create signin constants, actions, and reducers
   4. Update Header based on user login 
22. Implement SignIn Action 
   1. create signin constants, actions, and reducers
   2. add reducer to store.js
   3. use action in SigninScreen.js
23. Create Register Screen and Backend API
   1. create API for /api/users/register
   2. insert new user to database
   3. return user info and token 
   4. create RegisterScreen 
   5. Add fields
   7. Add screen to App.js
24. Create Shipping Screen
   1. create CheckoutSteps.js component
   2. create shipping fields
   3. implement shipping constant, action and reducers
25. Create Payment Screen 
   1. create payment fields
   2. implement shipping constant, actions, and reducers
26. Design Place Oder Screen
   1. design oder summary fields
   2. design order action
27. Create Place Oder API
   1. createOder api
   2. create orderModel
   3. create orderRoute
   4. create post order route
28. Implement Place Order Action
   1. handle place order button click
   2. create place order constants, action, and reducer
29. Create Order Screen
   1. build order api for /api/orders/:id
   2. create OrderScreen.js
   3. dispatch oder detail action in useEffect 
   4. load data with useSelector
   5. show data like place order screen 
   6. create order details constants, action, and reducer
30. Add Paypal Button 
   1. get client id from paypal
   2. set it in .env file
   3. create route form api/paypal/clientId
   4. create getPaypalClientId in api.js
   5. add paypal checkout script in OderScreen.js
   6. show paypal button
31. Implement Order Payment
   1. update order after payment 
   2. create payOder in api.js
   3. create route for /:id/pay in orderRouter.js
   4. rerender after pay order
32. Display Orders History
   1. create customer orders api
   2. create api for getMyOrders
   3. show orders in profile screen 
   4. style orders
33. Display User Profile
   1. create user details api
   2. show user information 
34. Update User profile
   1. create user api
   2. update user info
35. Create Admin View
   1. Create admin menu
   2. create admin Middleware in backend
   3. create admin route in frontend
36. List Products
   1. Create product list screen
   2. add reducer to store
   3. show products on the screen
37. Create Product
   1. build create product api
   2. build create product button
   3. defined product create constant, action, and reducer
   4. use action in Product List Screen
38. BUild Product Edit Screen
   1. create edit screen
   2. defined state
   3. create fields
   4. load product details
   5. add to routes 
39. Update Product
   1. defined update api
   2. defined product update constant, action, and reducer
   3. use action in Product Edit Screen 
40. Upload Product Image
   1. npm install multer 
   2. defined upload router
   3. create upload folder
   4. handle frontend
41. Delete Product
   1. create delete api in backend
   2. create delete constants, action, and reducer
   3. use it in product list screen
42. List Orders
   1. create order list api
   2. create Order List Screen
   3. add reducer to store
   4. show product on screen
43. Delete Order
   1. create delete order action and reducer
   2. add order delete action to order list
44. Deliver Order
   1. create constant, actions, and reducers for deliver order
   2. add order deliver action to order details screen 
45. Publish To Heroku
   1. create git repository
   2. create heroku account
   3. install heroku CLI
   4. heroku login 
   5. heroku app:create <yourname>chtq
   6. edit apkage.json for build script
   7. create profile 
   8. create mongodb atlas database
   9. set database connection in heroku env variables
   10. commit and push
46. List Users
   1. build api for list users
   2. create userlist screen
   3. create order details constant, action, and reducer
47. Delete User
   1. build app for delete users
   2. create order details constant, action, and reducer
   3. use action in UserListScreebn
48. Edit Users
   1. build app for edit users
   2. create edit screen UI
49. Create Search Box and Search Screen 
   1. create search bar in Header.js
   2. add style
   3. handle submit form 
   4. edit parse url to get query string  
   5. update product list api for search by name
50. Add Advance Search Filter
   1. filter by category
   2. filter by price range
   3. filter by average reting
51. Complete Advance Search
   1. filter by price
   2. filter by rating 
   3. sort by price, rating, ...
52. Rate and Review Products
   1. rate products
   2. create actions and reducers
53. Choose Address On Google Map
   1. create google map credential
   2. update .env file with Google Api Key
   3. create api to send google api to frontend 
   4. create map screen
   5. fetch google api
   6. getUserLocation 
   7. install @react-google-map/api
   8. use it in the shipping screen
   9. apply map to the checkout screen 