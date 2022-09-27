import {
    HomeOutlined,
    ShoppingOutlined,
    ShoppingCartOutlined,
    PlusCircleOutlined,
    RocketOutlined,
    DollarOutlined,
    UserOutlined,
    UnorderedListOutlined,
    SettingOutlined

} from '@ant-design/icons';
import logo from '../../assets/icons/logo-light.png'
import { Layout, Menu } from 'antd';
import React, { Component, useState } from 'react';
import Account from '../../components/Account';
// component tab
import {
    AccountTab,
    BrandTab,
    DasboardTab,
    OrderTab,
    ProductListTab,
    SettingTab,
    TransactionTab,
    AddProductTab
} from '../../containers/adminTab'
// 
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label
    };
}

const items = [
    getItem("Dashboard", 'DashboarTab', <HomeOutlined />),
    getItem('Product', '2', <ShoppingOutlined />, [
        getItem('Product list', 'ProductListTab', <UnorderedListOutlined />),
        getItem('Add product', 'AddProductTab', <PlusCircleOutlined />),
        getItem('Brand', 'BrandTab', <RocketOutlined />)
    ]),
    getItem("Order", 'OrderTab', <ShoppingCartOutlined />),
    getItem('Transaction', 'TransactionTab', <DollarOutlined />),
    getItem('Account', 'AccountTab', <UserOutlined />),
    getItem('Setting', 'SettingTab', <SettingOutlined />)
];
const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [tabAdmin, setTabAdmin] = useState("DasboardTab")
    const tabRender = (tabAdmin) => {
        switch (tabAdmin) {
            case 'DashboarTab':
    
                return <DasboardTab/>;
            case 'ProductListTab':
    
                return<ProductListTab/>
            case 'AddProductTab':
    
                return <AddProductTab/>
            case 'BrandTab':
    
                return <BrandTab/>
            case 'OrderTab':
    
                return <OrderTab/>
            case 'TransactionTab':
    
                return <TransactionTab/>
            case 'AccountTab':
    
                return <AccountTab />
            case 'SettingTab':
    
                return <SettingTab/>
    
            default:
                break;
        }
    }
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: 80
                    }} />
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={value => setTabAdmin(value.key)} />
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 20
                    }}
                >
                    <Account image={logo} />
                </Header>
                <Content
                    style={{

                        padding: 16
                    }}
                >
                    {tabRender(tabAdmin)}
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;
