import React, {useEffect} from 'react'
import MainPage from '../MainPage'
import Login from '../../pages/Login'
import { Route, Routes} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import ListNavigation from '../ListNavigation';
import Footer from '../../layout/Footer';



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