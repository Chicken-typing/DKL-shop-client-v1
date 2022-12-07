import { MailOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { Button, Divider, Tooltip } from 'antd'
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
        userName: "DKL store"
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
            <Divider>
                <Tooltip placement='top' arrowPointAtCenter title='Message to us!'>
                    <Button onClick={handleChat} type='link'
                        icon={
                            <>
                                <MailOutlined style={{ fontSize: 74 }} />

                            </>}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            justifyContent: 'center',
                            color: 'black',
                            height: 100,
                            width: 100
                        }}>
                    </Button>
                </Tooltip>
                <ChatBox user={user} handleCloseChatbox={handleCloseChatbox} open={openChat} socket={socket} />
            </Divider>
        </>
    )
}
