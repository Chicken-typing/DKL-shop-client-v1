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
import React, { useState } from 'react';
import Account from '../../components/Account';
import DashboardTab from '../../components/DashboardTab'
const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem("Dashboard", '1', <HomeOutlined />),
    getItem('Product', '2', <ShoppingOutlined />, [
        getItem('Product list', '8', <UnorderedListOutlined />),
        getItem('Add product', '3', <PlusCircleOutlined />),
        getItem('Brand', '4', <RocketOutlined />)
    ]),
    getItem("Order", '5', <ShoppingCartOutlined />),
    getItem('Transaction', '6', <DollarOutlined />),
    getItem('Account', '7', <UserOutlined />),
    getItem('Setting', '9', <SettingOutlined />)
];

const Admin = () => {
    const [collapsed, setCollapsed] = useState(false);
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
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
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

                        padding:16
                    }}
                >
                    <DashboardTab/>
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;
