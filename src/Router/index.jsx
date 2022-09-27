import React from 'react'
import MainPage from '../containers/MainPage'
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import ListNavigation from '../containers/ListNavigation';
import Footer from '../layout/Footer';
import Admin from '../pages/Admin';
import Register from '../pages/Register';


function Router() {
  return (
    <Routes>   
        {/* <Route path="/(?!Login|Register)" element={<ListNavigation/>}/> */}
        <Route path="/login" element={<Login/>}/>
        <Route path='/' element={<><ListNavigation/><MainPage/><Footer/></>}/>
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register/>}/>
      
    </Routes>
  )
}

export default Router