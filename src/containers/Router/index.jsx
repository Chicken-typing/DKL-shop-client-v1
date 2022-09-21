import React from 'react'
import MainPage from '../MainPage'
import Login from '../../pages/Login'
import { Route, Routes} from 'react-router-dom';

function Router() {
  return (
    <Routes>
      
        <Route path="/Login" element={<Login/>}/>
        <Route path='/' element={<MainPage/>}/>
    </Routes>
  )
}

export default Router