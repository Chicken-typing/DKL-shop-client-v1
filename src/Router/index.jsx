import React from 'react'
import MainPage from '../containers/MainPage'
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import ListNavigation from '../containers/ListNavigation';
import Footer from '../layout/Footer';
import Woman from '../containers/Woman';
import Man from '../containers/Man';
import Register from '../pages/Register';
import Customer from '../pages/Customer';
import Kid from '../containers/Kid';

function Router() {
  return (
    <Routes>   
        {/* <Route path="/(?!Login|Register)" element={<ListNavigation/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Customer/>}>
          <Route path='main-page' element={<MainPage/>}/>
          <Route path='woman' element={<Woman/>}/>
          <Route path='man' element={<Man/>}/>
          <Route path='kid' element={<Kid/>}/>
        </Route>

    </Routes>
  )
}

export default Router