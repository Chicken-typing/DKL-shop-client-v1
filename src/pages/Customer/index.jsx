
import { Layout } from 'antd';
import React from 'react'
import ListNavigation from '../../containers/ListNavigation'
import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
<<<<<<< HEAD
import { Outlet, Route, useNavigate } from 'react-router-dom';

=======
import { Outlet, useNavigate } from 'react-router-dom';
>>>>>>> b8bd2ee932d254a538193e3f287ace9cb1c25155




function Customer() {
    const navigate = useNavigate()
  return (
    <div>
        <Layout.Header style={{padding: '0'}}><Header/></Layout.Header>
        <Layout.Content>
            <ListNavigation/>
            <div>
                <Outlet/>
            </div>
        </Layout.Content>
        <Layout.Footer><Footer/></Layout.Footer>
    </div>
  )
}

export default Customer