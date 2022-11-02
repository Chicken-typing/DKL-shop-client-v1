import { Tabs } from 'antd';
import React from 'react';
import CustomerList from './CustomerList';
import AdminList from './AdminList';
const onChange = (key) => {
    console.log(key);
};
const AccountTab = () => (
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
                children: <CustomerList />,
            },
            {
                label: `Admin accounts`,
                key: '2',
                children: <AdminList />,
            },
        ]}
    />
);
export default AccountTab;
