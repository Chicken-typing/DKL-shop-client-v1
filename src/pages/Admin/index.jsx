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
import React, { useEffect, useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { API_ADMIN_STATIC } from '../../linkTo';
import { fetchAPI } from '../../action'
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
    getItem("Dashboard", 'DashboardTab', <HomeOutlined />),
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
    const [isScroll, setIsScroll] = useState(false);
    window.onscroll = () => {
        window.scrollY > 1 ? setIsScroll(true) : setIsScroll(false)

    }
    // console.log(isScroll)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAPI({
            url: API_ADMIN_STATIC
        }));
    }, []);


    const [collapsed, setCollapsed] = useState(false);
    const [tabAdmin, setTabAdmin] = useState("DashboardTab")
    const tabRender = (tabAdmin) => {
        switch (tabAdmin) {
            case 'DashboardTab':

                return <DasboardTab />;
            case 'ProductListTab':

                return <ProductListTab />
            case 'AddProductTab':

                return <AddProductTab />
            case 'BrandTab':

                return <BrandTab />
            case 'OrderTab':

                return <OrderTab />
            case 'TransactionTab':

                return <TransactionTab />
            case 'AccountTab':

                return <AccountTab />
            case 'SettingTab':

                return <SettingTab />

            default:
                break;
        }
    }
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
                <img
                    src={logo}
                    alt='logo'
                    style={{
                        width: 80
                    }} />
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={'DashboardTab'} mode="inline" items={items} onClick={value => setTabAdmin(value.key)} />
            </Sider>
            <Layout className="site-layout"
                style={{
                    marginLeft: 200,
                    overflow:"hidden"
                }}>
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

                        padding: 16,
                        justifyContent: "center"
                    }}
                >
                    {tabRender(tabAdmin)}
                </Content>
            </Layout>
        </Layout>
    );
}

export default Admin;
