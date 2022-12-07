import { MailOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import { API_CHAT_ROOM } from '../linkTo'
import ChatBox from './ChatBox'


export default function ChatButton() {
    // const currentUser=useSelector(state=>state)
    const user = {
        // _id: currentUser._id
        _id: 1,
        avatar: "",
        userName: "Admin"
    }
    const socket = io.connect(API_CHAT_ROOM)
    const [openChat, setOpenChat] = useState(false)
    const handleChat = () => {
        socket.emit("join_room", user._id)
        setOpenChat(!openChat)
    }
    const handleCloseChatbox = () => {
        setOpenChat(!openChat)
    }

    return (
        <>
            <Button onClick={handleChat} type='link'>
                <MailOutlined style={{
                    fontSize: 72,
                    color: 'black'
                }} />
            </Button>
            <ChatBox user={user} handleCloseChatbox={handleCloseChatbox} open={openChat} socket={socket} />

        </>
    )
}
