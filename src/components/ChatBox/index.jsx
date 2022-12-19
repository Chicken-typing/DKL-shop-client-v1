import React, { useState, useEffect, useRef } from 'react';
import { Card, Layout, Avatar, Button, Drawer, Input, Typography, Form } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { SendOutlined } from '@mui/icons-material';
import MessagePiece from '../MessagePiece';
import ScrollToBottom from 'react-scroll-to-bottom';
import { io } from 'socket.io-client';
import _ from 'lodash'
import { useSelector } from 'react-redux';
const { Text } = Typography
const { Meta } = Card
const { Header, Footer, Content } = Layout;
const { TextArea } = Input;
let socket
const ChatBox = ({ user, handleCloseChatbox, open }) => {
    const currentUser = useSelector(state => state.User.userInfor)
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const [form] = Form.useForm()
    const account = {
        name: currentUser.username,
        email: currentUser.email,
        room: user._id
    }
    useEffect(() => {
        socket = io(`${process.env.REACT_APP_API_URL}`)
        socket.emit('join', account)
    }, [open])

    useEffect(() => {
        socket.on('message', message => setMessageList( [...messageList, ...message]))
    })
    const sendMessage = (value) => {
        if (value) {
            socket.emit('sendMessage', value)
            form.resetFields()
        }
    }
    return (
        <Drawer
            closable
            closeIcon={
                <CloseCircleOutlined style={{ fontSize: 24, color: "white" }} />
            }
            open={open}
            bodyStyle={{ padding: 0 }}
            onClose={handleCloseChatbox}
            maskClosable={false}
            headerStyle={{
                padding: 0,
                position: 'fixed',
                right: 0,
                marginTop: 20,
                border: 0,
            }}
        >
            <Layout id='chatbox'>
                <Header id='chatbox-header'>
                    <Meta
                        avatar={user.avatar ? <Avatar src={user.avatar} size={32} /> : <Avatar size={32} icon={<UserOutlined />} style={{ backgroundColor: 'black' }} />}
                        title={<Text strong style={{ color: "white" }}>{currentUser.role === 'customer' ? "DKL Store" : user.username}</Text>}
                        style={{ color: "white" }}
                    />
                </Header>
                <Content id='chatbox-body'>
                    <ScrollToBottom className="chatbox-content">
                        {
                            _.isEmpty(messageList)
                                ? <></>
                                : messageList.map((item, index) => <MessagePiece piece={item} key={index} />)
                        }
                    </ScrollToBottom>
                </Content>
                <Footer id='chatbox-footer'>
                    <Form
                        form={form}
                        id='chatbox-input'
                        onFinish={(value, e) => sendMessage(value, e)}
                        layout='inline'>
                        <Form.Item name="message">
                            <TextArea
                                bordered={false}
                                autoSize={{
                                    minRows: 1,
                                    maxRows: 3,
                                }}
                                style={{
                                    justifyItems: ' center',
                                }}
                                onPressEnter={(e) => form.submit()} />
                        </Form.Item>
                        <Form.Item>
                            <Button type='link' onClick={() => form.submit()}>
                                <SendOutlined />
                            </Button>
                        </Form.Item>
                    </Form>
                </Footer>
            </Layout>
        </Drawer>
    );
}

export default ChatBox;