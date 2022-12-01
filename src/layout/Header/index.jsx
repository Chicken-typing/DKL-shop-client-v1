import React, { useState, Fragment } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Nike from "../../assets/images/nike.png";
import Adidas from "../../assets/images/adidas.png";
import "./style.scss";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from 'antd';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Header() {


const [isLoged, setIsLoged] = useState(false)

  return (
    
    <div className="top-nav lg:W-[100%] s:w-[375px]">
                <div className="icon-brand">
                    <Link to='/main-page' className='imgNike'><img src={Nike} alt="Nike-icon"/></Link>
                    <Link to='/main-page' className="imgAdidas"><img src={Adidas} alt="" /></Link>
                </div>
              {isLoged ? <div className="singin-singup">
                    <Link to="/Login" className='signin'>Sign In</Link>
                     <Link to="/Register" className='signup'>Sign Up</Link>
            </div>: <Menu as="div" className="relative ml-3 mt-2 text-black">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                    <Menu.Items className="absolute right-0 z-30 mt-2 w-48 origin-top-right rounded-md text-black bg-thin-black drop-shadow-4xl  py-1  focus:outline-none"
                    id="custom">
                      <Menu.Item >
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-light-blue' : '', 'block px-4 py-2 text-sm text-black')}
                            id='profile'
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-light-blue' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            href="#"
                            className={classNames(active ? 'bg-light-blue' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>}
    </div>
  );
}

export default Header;
