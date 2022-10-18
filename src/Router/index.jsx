import React from 'react'
import MainPage from '../containers/MainPage'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import ListNavigation from '../containers/ListNavigation';
import Footer from '../layout/Footer';
import Admin from '../pages/Admin';
import Register from '../pages/Register';
import {
  AccountTab,
  DasboardTab,
  OrderTab,
  ProductListTab,
  SettingTab,
  TransactionTab,
  AddProductTab
} from '../containers/adminTab'

function Router() {
  return (

    <Routes>
      {/* <Route path="/(?!Login|Register)" element={<ListNavigation/>}/> */}
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<><ListNavigation /><MainPage /><Footer /></>} />
      <Route path="/register" element={<Register />} />


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