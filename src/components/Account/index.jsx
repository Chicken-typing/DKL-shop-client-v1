import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Avatar, Button } from 'antd';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../action';

const Account = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
        localStorage.setItem('userInfor', JSON.stringify({}))
    }

    const items = [
        {
            key: '1',
            label: (
                <Button style={{ color: 'black' }} type='link'>My account</Button>
            ),
        },
        {
            key: '2',
            label: (
                <Button style={{ color: 'red' }} type='link' onClick={handleLogout}>Log out</Button>
            ),
        }
    ]

    return (
        <Dropdown menu={{ items }}>
            <span
                style={{
                    ...props.style
                }}>

                {
                    props.image ? <Avatar
                        shape='cirle'
                        src={props.image}
                        style={{
                            width: 56
                        }}
                    /> : <Avatar size={56} icon={<UserOutlined />} />
                }
            </span>
        </Dropdown>
    );
}

export default Account;
