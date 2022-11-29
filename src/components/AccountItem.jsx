import React, { useState, useEffect } from 'react';
import { DeleteOutlined, SettingOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Card, Space, Popconfirm, Modal, Form, Input, Switch } from 'antd';
import Button from './Button'
import updateUser from '../services/updateUser';
import ChatBox from './ChatBox';
import { io } from 'socket.io-client';
import { API_CHAT_ROOM,API_USER_CUSTOMER } from '../linkTo';
const { Meta } = Card;
const { Item } = Form;
const AccountItem = ({ url,user, hasEmail, handleDeleteUser, reFetch,key }) => {
    const socket = io.connect(API_CHAT_ROOM)
    const [form] = Form.useForm();
    const [openChat, setOpenChat] = useState(false)
    const handleCheckMail = () => {
        socket.emit("join_room", user.id)
        setOpenChat(!openChat)
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
        setIsModalOpen(true);
        form.resetFields()
    };
    const handleOk = () => {
        setIsModalOpen(false);
        form.submit()
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        updateUser(url,user.id, values)
        reFetch()
    };
    const handleCloseChatbox = () => {
        setOpenChat(!openChat)
    }
    //TODO: fetch newest message
    // const [message, setMessage] = useState()
    return (
        <>
            <Card
                style={{
                    width: "85%",
                    marginTop: 16,
                }}
                key={user.id}
                extra={
                    <Space>
                        <Popconfirm
                            placement="bottom"
                            title="Do you want to delete this account?"
                            onConfirm={() => {
                                handleDeleteUser.handleDeleteUser(API_USER_CUSTOMER, user.id);
                                reFetch()
                            }}
                            okText="Accept"
                            cancelText="Cancel"
                        >
                            <Button title="Delete" type='link'>
                                <DeleteOutlined />
                            </Button>
                        </Popconfirm>
                        <Button title="Edit" type='link' onClick={showModal}>
                            <SettingOutlined />
                        </Button>
                        {
                            hasEmail ?
                                <Badge dot={!(user.sentEmail === 0)}>
                                    <Button title="Email" type='link' onClick={() => handleCheckMail(user)}>
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
            <Modal title="Edit account" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off">
                    <Item label="Password" name="password" initialValue={user.password} rules={[
                        {
                            required: true,
                            message: 'Password must not be empty.',
                        },
                    ]}>
                        <Input />
                    </Item>
                    <Item label="Active" name="isActive" valuePropName='checked' initialValue={user.isActive}>
                        <Switch />
                    </Item>
                </Form>
            </Modal>
            <ChatBox user={user} handleCloseChatbox={handleCloseChatbox} open={openChat} socket={socket} />

        </>
    );
}
AccountItem.defaultProps = {
    hasEmail: false
}
export default AccountItem;
