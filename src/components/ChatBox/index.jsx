import React, { useState, useEffect } from 'react';
import { Card, Layout, Avatar, Button, Drawer, Input, Typography } from 'antd';
import { UserOutlined, CloseCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { SendOutlined } from '@mui/icons-material';
import MessagePiece from '../MessagePiece';
import sendMessage from '../../services/sendMessage';
import ScrollToBottom from 'react-scroll-to-bottom';
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
        <Drawer closable={false} open={open} bodyStyle={{ padding: 0 }} size='large'>
            <Layout id='chatbox'>
                <Header id='chatbox-header'>
                    <Meta
                        avatar={user.avatar ? <Avatar src={user.avatar} size={32} /> : <Avatar size={32} icon={<UserOutlined />} />}
                        title={<Text strong style={{ color: "white" }}>{user.userName}</Text>}
                        description={user.phoneNumber}
                        style={{ color: "white" }}
                    />
                    <Button type='text' onClick={handleCloseChatbox}><CloseCircleOutlined style={{ fontSize: 24, color: "white" }} /></Button>
                </Header>
                <Content id='chatbox-body'>
                    <ScrollToBottom className="chatbox-content">
                        {
                            messageList.map(item => <MessagePiece userID={item.author} message={item.message} />)
                        }
                    </ScrollToBottom>
                </Content>
                <Footer id='chatbox-footer'>
                    <TextArea
                        autoSize={{
                            minRows: 1,
                            maxRows: 3,
                        }}
                        style={{
                            padding: "5px 10px",
                            borderRadius: 25,
                            justifyItems: ' center'
                        }} onChange={e => {
                            if (e.keyCode === 13 && e.keycode === 52) {
                                console.log(e.keyCode, e.shiftKey)
                                setCurrentMessage(currentMessage + " <br/>")
                            } else {
                                if (e.keyCode === 13) return;
                                setCurrentMessage(e.target.value)
                            }

                        }} onPressEnter={sendNewMessage} />
                    <Button type='link' onClick={sendNewMessage}><SendOutlined /></Button>
                </Footer>
            </Layout>
        </Drawer>
    );
}

export default ChatBox;
