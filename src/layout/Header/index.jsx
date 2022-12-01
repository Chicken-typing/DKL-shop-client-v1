import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nike from "../../assets/images/nike.png";
import Adidas from "../../assets/images/adidas.png";
import "./style.scss";
import { Button } from 'antd';





function Header() {




  return (
    
    <div className="top-nav lg:W-[100%] s:w-[375px]">
                <div className="icon-brand">
                    <Link to='/main-page' className='imgNike'><img src={Nike} alt="Nike-icon"/></Link>
                    <Link to='/main-page' className="imgAdidas"><img src={Adidas} alt="" /></Link>
                </div>
            <div className="singin-singup">
                    <Link to="/Login" className='signin'>Sign In</Link>
                     <Link to="/Register" className='signup'>Sign Up</Link>
            </div>
    </div>
  );
}

export default Header;
