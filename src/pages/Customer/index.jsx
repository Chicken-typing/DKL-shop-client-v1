
import { Layout } from 'antd';
import React from 'react'
import ListNavigation from '../../containers/ListNavigation'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header';
import { Outlet, Route, useNavigate } from 'react-router-dom';
import ListNavigations from '../../containers/ListNavigations';





function Customer() {
    const navigate = useNavigate()
  return (
    <div>
        <Layout.Header  style={{padding: '0', backgroundColor: 'black'}}><Header/></Layout.Header>
        <Layout.Content>
            <ListNavigations/>
            <div>
                <Outlet/>
            </div>
        </Layout.Content>
        <Layout.Footer><Footer/></Layout.Footer>
    </div>
  )
}

export default Customer