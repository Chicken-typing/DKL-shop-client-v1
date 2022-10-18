import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar, Popconfirm, Button } from 'antd';
import { Link, redirect } from 'react-router-dom'
const confirm = () =>
    new Promise((resolve) => {
        return redirect("/")
    });
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <Link to="/admin/my-account">My account</Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Popconfirm title="Title" onConfirm={confirm}>
                        <div style={{ border: 0, width: "100%" }}>Log out</div>
                    </Popconfirm>
                ),
            }
        ]}
    />
);
const Account = (props) => {
    return (
        <Dropdown overlay={menu}
        >
            <span
                style={{
                    ...props.style
                }}>

                {
                    props.image ? <Avatar
                        shape='cirle'
                        src={props.image}
                        style={{
                            width: 56
                        }}
                    /> : <Avatar size={56} icon={<UserOutlined />} />
                }
            </span>
        </Dropdown>
    );
}

export default Account;
