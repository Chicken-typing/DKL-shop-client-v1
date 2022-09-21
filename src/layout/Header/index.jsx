import React from 'react'
import { Link, Route, Routes} from 'react-router-dom';
import Nike from '../../assets/images/nike.png'
import Adidas from '../../assets/images/adidas.png'
import './style.scss'

function Header() {
  return (
    <div className="top-nav">
                <div className="icon-brand">
                    <Link to='/' className='imgNike'><img src={Nike} alt="Nike-icon"/></Link>
                    <img src={Adidas} alt="" />
                </div>
            <div className="singin-singup">
                    
                    <Link to="/Login" className='signin'>Sign In</Link>
                     <a href="../Pages/Register" className='signup'>Sign Up</a>
            </div>


    </div>
  )
}

export default Header