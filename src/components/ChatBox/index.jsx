import React, { useState, useEffect, useRef } from 'react';
import { Card, Layout, Avatar, Button, Drawer, Input, Typography } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { SendOutlined } from '@mui/icons-material';
import MessagePiece from '../MessagePiece';
import sendMessage from '../../services/sendMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
import moment from 'moment';
import { keyboard } from '@testing-library/user-event/dist/keyboard';
const { Text } = Typography
const { Meta } = Card
const { Header, Footer, Content } = Layout;
const { TextArea } = Input;

const ChatBox = ({ user, handleCloseChatbox, open, socket }) => {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const sendNewMessage = () => {
        if (currentMessage !== "") {
            sendMessage(user, currentMessage, socket, (messageData) => {
                setMessageList([...messageList, messageData])
            })
        }
    }
    useEffect(() => {
        socket.on("recieve_message", (data) => {
            setMessageList([...messageList, data])
        })
    }, [socket])
    return (
        <Drawer
            closable
            closeIcon={
                <CloseCircleOutlined style={{ fontSize: 24, color: "white" }} />
            }
            open={open}
            bodyStyle={{ padding: 0 }}
            onClose={() => {
                // setMessageList([])
                handleCloseChatbox()
                setCurrentMessage("")
            }}
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
                        avatar={user.avatar ? <Avatar src={user.avatar} size={32} /> : <Avatar size={32} icon={<UserOutlined />} />}
                        title={<Text strong style={{ color: "white" }}>{user.userName}</Text>}
                        description={user.phoneNumber}
                        style={{ color: "white" }}
                    />
                </Header>
                <Content id='chatbox-body'>
                    <ScrollToBottom className="chatbox-content">
                        {
                            messageList.map(item => <MessagePiece message={item.message} userRole={item.author} />)
                        }
                    </ScrollToBottom>
                </Content>
                <Footer id='chatbox-footer'>
                    <div id='chatbox-input'>
                        <TextArea
                            bordered={false}
                            value={currentMessage}
                            autoSize={{
                                minRows: 1,
                                maxRows: 3,
                            }}
                            style={{
                                justifyItems: ' center',
                            }}
                            onChange={e => {
                                setCurrentMessage(e.target.value)
                            }}
                            onPressEnter={(e) => {
                                sendNewMessage()
                                setCurrentMessage("")
                                e.preventDefault()
                            }}
                        />
                    </div>
                    <Button type='link' onClick={() => {
                        sendNewMessage()
                        setCurrentMessage("")
                    }}><SendOutlined /></Button>
                </Footer>
            </Layout>
        </Drawer>
    );
}

export default ChatBox;