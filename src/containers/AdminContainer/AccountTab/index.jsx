import { Tabs } from 'antd';
import React from 'react';
import CustomerList from './CustomerList';
import AdminList from './AdminList';
import moment from 'moment';
import './style.scss'
import { AUTH_ROLE } from '../../../consts/status'
const onChange = (key) => {
};
const AccountTab = () => {
    const [refresh, setRefesh] = React.useState(moment())
    const refreshPage = () => {
        setRefesh(moment())
    }
    const isMAdmin = JSON.parse(localStorage.getItem('userInfor')).role === AUTH_ROLE.MASTER_ADMIN

    return (
        <Tabs
            defaultActiveKey="1"
            onChange={onChange}
            animated={
                {
                    tabPane: true
                }
            }
            tabPosition='top'
            centered={true}
            items={[
                {
                    label: `Customer accounts`,
                    key: '1',
                    children: <CustomerList refreshPage={refreshPage} />,
                },
                {
                    label: `Admin accounts`,
                    key: '2',
                    children: <AdminList />,
                    disabled: !isMAdmin
                },
            ]}
        />
    );
}
export default AccountTab;
