import React from 'react';
import { DeleteOutlined, SettingOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Card } from 'antd';
const { Meta } = Card;
const AccountItem = ({ user, key }) => {
    return (
        <Card
            style={{
                width: "85%",
                marginTop: 16,
            }}
            actions={[
                <SettingOutlined key="setting" />,
                <DeleteOutlined key="delete" />,
                <Badge key="mail" count={5}>
                    <Button type="text">
                        <MailOutlined />
                    </Button>
                </Badge>
            ]}
            key={key}
        >
            <Meta
                avatar={<Avatar src={user.avatar} />}
                title={user.userName}
                description={user.phoneNumber}
            />
        </Card>
    );
}

export default AccountItem;
