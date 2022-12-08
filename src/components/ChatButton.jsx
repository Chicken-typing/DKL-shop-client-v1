import { MailOutlined } from '@ant-design/icons'
import { Button, Divider, message, notification, Tooltip } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatBox from './ChatBox'
import _ from 'lodash'
import { useSelector } from 'react-redux'

export default function ChatButton(props) {
    const currentUser = useSelector(state => state.User.userInfor)
    const user = {
        _id: "dkl_admin",
        avatar: "",
        userName: "DKL store"
    }
    const [openChat, setOpenChat] = useState(false)
    const handleChat = () => {
        setOpenChat(!openChat)
    }
    const handleCloseChatbox = () => {
        setOpenChat(!openChat)
    }
    const userData = JSON.parse(localStorage.getItem('userInfor'))
    const navigate = useNavigate()

    const openNotification = () => {
        const key = `Notice${Date.now()}`;
        const btn = (
            <Button type="primary" size="small" onClick={() => {
                notification.close(key)
                navigate("/login")
            }}>
                Log in
            </Button>
        );
        notification.open({
            message: 'You have not logged in.',
            btn,
            key,
        });
    };
    return (
        <>
            <Divider>
                <Tooltip placement='top' arrowPointAtCenter title='Message to us!'>
                    <Button disabled={props.isDisable}
                        onClick={() => {
                            _.isEmpty(userData)
                                ? openNotification()
                                : handleChat()
                        }} type='link'
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
                <ChatBox user={currentUser} handleCloseChatbox={handleCloseChatbox} open={openChat} />
            </Divider>
        </>
    )
}
