import React, { useState, useEffect } from 'react';
import { DeleteOutlined, SettingOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Space, Tooltip } from 'antd';
import Button from './Button'
const { Meta } = Card;
const AccountItem = ({ user, hasEmail }) => {
    const handleCheckMail = () => {

    }
    return (
        <Card
            style={{
                width: "85%",
                marginTop: 16,
            }}
            key={user.id}
            extra={
                <Space>
                    <Button title="Delete" type='link' >
                        <DeleteOutlined />
                    </Button>
                    <Button title="Edit" type='link'>
                        <SettingOutlined />
                    </Button>
                    {
                        hasEmail ?
                            <Badge dot={!(user.sentEmail === 0)}>
                                <Button title="Email" type='link' onClick={handleCheckMail}>
                                    <MailOutlined />
                                </Button>
                            </Badge> : ""
                    }
                </Space>
            }
        >
            <Meta
                avatar={user.avatar ? <Avatar src={user.avatar} size={76} /> : <Avatar size={76} icon={<UserOutlined />} />}
                title={user.userName}
                description={user.phoneNumber}
            />
        </Card>
    );
}
AccountItem.defaultProps = {
    hasEmail: false
}
export default AccountItem;
