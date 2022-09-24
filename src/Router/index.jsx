import React from 'react'
import MainPage from '../containers/MainPage'
import { Route, Routes} from 'react-router-dom';
import Login from '../pages/Login';
import ListNavigation from '../containers/ListNavigation';
import Footer from '../layout/Footer';

function Router() {
  return (
    <Routes>   
        {/* <Route path="/(?!Login|Register)" element={<ListNavigation/>}/> */}
        <Route path="/Login" element={<Login/>}/>
        <Route path='/' element={<><ListNavigation/><MainPage/><Footer/></>}/>
        
    </Routes>
  )
}

export default Router