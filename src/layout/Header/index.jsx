import React from 'react'
import { Link, Route, Routes} from 'react-router-dom';
import Nike from '../../assets/images/nike.png'
import Adidas from '../../assets/images/adidas.png'
import './style.scss'

function Header() {
  return (
    <div className="top-nav">
                <div className="icon-brand">
                    <img src={Nike} alt="Nike-icon" />
                    <img src={Adidas} alt="" />
                </div>
            <div className="singin-singup">
                     <a href='' className='signin'>Sign In</a>
                    
                    {/* <Link to="/Login" className='signin'>Sign In</Link> */}
                     <a href="../Pages/Register" className='signup'>Sign Up</a>
            </div>


            {/* <Routes>
                <Route path="/Login" element={Login}/>
            </Routes> */}
    </div>
  )
}

export default Header