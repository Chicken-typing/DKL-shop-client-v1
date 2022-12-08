import React, { useState, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nike from "../../assets/images/nike.png";
import Adidas from "../../assets/images/adidas.png";
import "./style.scss";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Avatar, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../action";
import { AccountCircleOutlined } from "@mui/icons-material";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.User.userInfor)

  return (


    <div className="top-nav">
      <Button type="link" onClick={() => navigate('/')} className="icon-brand">
        <img src={Nike} alt="Nike-icon" className="img-logo" />
        <img src={Adidas} alt="Adidas-icon" className="img-logo" />
      </Button>

      {!token.token ? <div className="singin-singup">

        <Link to="/login" className='signin'>Sign In</Link>
        <Link to="/register" className='signup'>Sign Up</Link>
      </div> : <Menu as="div" className="relative ml-3 mt-2 text-black">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="sr-only">Open user menu</span>
            <Avatar icon={<AccountCircleOutlined />} size={32} shape='circle' style={{ color: 'black', backgroundColor: 'white' }} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            id="custom">
            <Menu.Item  >
              {({ active }) => (
                <div
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                >
                  Your Profile
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                >
                  Settings
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer')}
                  onClick={() => {
                    dispatch(logout())
                    navigate('/')
                    localStorage.setItem('userInfor', JSON.stringify({}))
                  }}

                >
                  Sign out
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>}


    </div>
  );
}

export default Header;
