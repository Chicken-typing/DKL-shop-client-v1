
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Admin from "../pages/Admin"
import Customer from '../pages/Customer'
import { MainPage, Woman, Man, Kid } from '../containers/CustomerContainer'
import {
  AccountTab,
  DasboardTab,
  OrderTab,
  ProductListTab,
  SettingTab,
  TransactionTab,
  AddProductTab
} from '../containers/AdminContainer'
function Router() {


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/'element={<Customer/>} >    
      <Route path="" element={<Navigate to="/main-page" replace />} />      
       <Route path='main-page' element={<MainPage />} />
        <Route path='woman' element={<Woman />} />
        <Route path='man' element={<Man />} />
        <Route path='kid' element={<Kid />} />
      </Route>
      {/* admin page */}
      <Route path="/admin" element={<Admin />} >
        <Route path="product-list" element={<ProductListTab />} />
        <Route path="setting" element={<SettingTab />} />
        <Route path="transaction" element={<TransactionTab />} />
        <Route path="add-product" element={<AddProductTab />} />
        <Route path="accounts" element={<AccountTab />} />
        <Route path="dashboard" element={<DasboardTab />} />
        <Route path="order" element={<OrderTab />} />
      </Route>
    </Routes>
  )
}

export default Router