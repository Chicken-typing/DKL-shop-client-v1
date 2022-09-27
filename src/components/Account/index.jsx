import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom'
const menu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <Link to="">My account</Link>
                ),
            },
            {
                key: '2',
                label: (
                    <Link to="">Log out</Link>
                ),
            }
        ]}
    />
);
const Account = (props) => {
    return (
        <Dropdown overlay={menu}
        >
            <span>

                {
                    props.image ? <Avatar
                        shape='cirle'
                        src={props.image}
                        style={{
                            width: 48,
                        }}
                    /> : <Avatar size={48} icon={<UserOutlined />} />
                }
            </span>
        </Dropdown>
    );
}

export default Account;
