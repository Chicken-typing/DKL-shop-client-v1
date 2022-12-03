
import { Layout } from 'antd';
import React from 'react'
import ListNavigation from '../../containers/ListNavigation'
import Footer from '../../layout/Footer'

import Header from '../../layout/Header';






function Customer() {
    const navigate = useNavigate()
  return (
    <div>
        <Header/>

            <ListNavigations/>
            <div>
                <Outlet/>
            </div>
        <Footer/>
        
    </div>
  )
}

export default Customer
