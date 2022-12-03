
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from "../pages/Admin"
import Customer from '../pages/Customer'
import { MainPage, Woman, Man, Kid, Brand } from '../containers/CustomerContainer'
import {
  AccountTab,
  DasboardTab,
  OrderTab,
  ProductListTab,
  SettingTab,
  AddProductTab
} from '../containers/AdminContainer'
import ProductDetail from '../containers/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Shipping from '../components/Shipping';
import Payment from '../components/Payment';
function Router() {


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Customer />}>
        <Route path="" element={<Navigate to="home" replace />} />
        <Route path='home' element={<MainPage />} />
        <Route path='woman' element={<Woman />} />
        <Route path='man' element={<Man />} />
        <Route path='kid' element={<Kid />} />
        <Route path='brand' element={<Brand/>} />
        <Route path="/products/:productName" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path='/checkout' element={<Checkout/>}>
            <Route path='shippingAddress' element={<Shipping/>}/>
            <Route path='payment' element={<Payment/>}/>
        </Route>
        

        
      </Route>
      {/* admin page */}
      <Route path="/admin" element={<Admin />} >
        <Route path="" element={<Navigate to="dashboard" replace />} />
        <Route path="product-list" element={<ProductListTab />} />
        <Route path="setting" element={<SettingTab />} />
        <Route path="add-product" element={<AddProductTab />} />
        <Route path="accounts" element={<AccountTab />} />
        <Route path="dashboard" element={<DasboardTab />} />
        <Route path="order" element={<OrderTab />} />
      </Route>
    </Routes>
  )
}

export default Router