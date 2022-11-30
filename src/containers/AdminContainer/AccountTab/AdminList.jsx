import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../action'
import AccountItem from '../../../components/AccountItem'
import { API_USER_ADMIN } from '../../../linkTo'
import deleteUser from '../../../services/deleteUser'
import { Layout, Skeleton, Affix, Modal, Form, Input } from 'antd'
import Button from '../../../components/Button'
import { PlusCircleOutlined } from '@ant-design/icons'
import addUser from '../../../services/addUser'
const { Header, Content } = Layout

const CreateAdminForm = (open, handleFinish) => {
    return (
        <Modal
            title="Add new admin"
            open={open}
            footer={null}
            maskClosable={false}
            closable={false}
            destroyOnClose={true}
        >
            <Form
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
                onFinish={handleFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="User Name"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone number"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: 'Please input phone number!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input address!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default function AdminList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser({
            url: API_USER_ADMIN
        }))
    }, []);
    const dataUser = useSelector(state => state.fetchUser.dataUser)
    const reFetch = () => {
        setTimeout(() => {
            dispatch(fetchUser({
                url: API_USER_ADMIN
            }))
        }, 1000)
    }
    const handleDeleteUser = (url, id) => {
        deleteUser(url, id)
    }
    const deleteAccount = {
        handleDeleteUser: handleDeleteUser
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleFinish = (values) => {
        setIsModalOpen(false);
        addUser({ ...values, role: 'ADMIN' })
        reFetch()
    };

    return (
        <>
            <Layout>
                <Affix offsetTop={64.5}>
                    <Header
                        style={{
                            backgroundColor: '#1976d2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Button type='link'>
                            <PlusCircleOutlined style={{
                                fontSize: 24,
                                color: 'white'
                            }}
                                onClick={() => {
                                    setIsModalOpen(true);

                                }}
                            />
                        </Button>
                    </Header>

                </Affix>
                <Content
                    style={{
                        overflow: "auto",
                        minHeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: 20,
                    }}
                >
                    {dataUser.length > 0
                        ? dataUser.map(user => <AccountItem user={user} url={API_USER_ADMIN} handleDeleteUser={deleteAccount} reFetch={reFetch} />)
                        : <Skeleton active avatar />
                    }
                </Content>
            </Layout>
            {CreateAdminForm(isModalOpen, handleFinish)}
        </>
    )
}

