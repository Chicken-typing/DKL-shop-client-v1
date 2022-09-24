import React from 'react'
import MainPage from '../MainPage'
import Login from '../../pages/Login'
import Register from'../../pages/Register'
import {Switch, Route, Routes} from 'react-router-dom';
import Admin from '../../pages/Admin';

function Router() {
  <Switch>
      <Route exec path="/login" element={<Login />} />
      <Route exec path='/' element={<MainPage />} />
      <Route exec path='/admin' element={<Admin />} />
      <Route exec path='/register' element={<Register />} />
  </Switch>
}

export default Router