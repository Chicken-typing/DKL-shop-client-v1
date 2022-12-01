import {
    HomeOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    PlusCircleOutlined,
    UserOutlined,
    UnorderedListOutlined,
    SettingOutlined

} from '@ant-design/icons';
import logo from '../../assets/icons/logo-light.png'
import { Layout, Menu, Affix } from 'antd';
import React, { useEffect, useState } from 'react';
import Account from '../../components/Account';
import { Link, Outlet } from 'react-router-dom';
import './style.scss'
const { Item, SubMenu } = Menu
const { Header, Content, Sider } = Layout;
const Admin = () => {
    return (
        <Layout
            hasSider
        >
            <Sider style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}>

                <div className="logo" >
                    <img
                        src={logo}
                        alt='logo'
                        style={{
                            width: 160,

                        }} />
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Item key="dashboard">
                        <Link to={`/admin/dashboard`}>
                            <HomeOutlined />
                            <div>
                                Dashboard
                            </div>
                        </Link>
                    </Item>
                    <SubMenu key="product" title={
                        <>
                            <ShoppingOutlined /> <div id='product-propdown'>Product</div>
                        </>
                    } className="subItem">
                        <Item key="product-list">
                            <Link to={`/admin/product-list`}>
                                <UnorderedListOutlined />
                                List products
                            </Link>
                        </Item>
                        <Item key="add-product">
                            <Link to={`/admin/add-product`}>
                                <PlusCircleOutlined />
                                Add product
                            </Link>
                        </Item>
                    </SubMenu>
                    <Item key="order">
                        <Link to={`/admin/order`}>
                            <ShoppingCartOutlined />
                            <div>
                                Order
                            </div>
                        </Link>
                    </Item>
                    <Item key="accounts">
                        <Link to={`/admin/accounts`}>
                            <UserOutlined />
                            <div>
                                Accounts
                            </div>
                        </Link>
                    </Item>
                    <Item key="setting">
                        <Link to={`/admin/setting`}>
                            <SettingOutlined />
                            <div>
                                Setting
                            </div>
                        </Link>
                    </Item>
                </Menu>
            </Sider>
            <Layout className="site-layout"
                style={{
                    marginLeft: 200,
                    overflow: "hidden"
                }}
            >
                <Affix offsetTop={0.1}>
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            display: "flex",
                            justifyContent: "end"
                        }}
                    >
                        <Account image={logo} style={{ marginRight: "2%" }} />

                    </Header>
                </Affix>
                <Content
                    style={{
                        backgroundColor: "white",
                        padding: 16,
                        justifyContent: "center"
                    }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;
