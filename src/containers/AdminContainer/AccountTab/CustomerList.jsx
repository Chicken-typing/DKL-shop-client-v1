import { Layout } from 'antd'
import React, { useRef } from 'react'
import AccountItem from '../../../components/AccountItem'
import AppBar from '../../../components/AppBar'
const { Header, Content } = Layout
export default function CustomerList() {
    const mail = {
        data: [
            {
                label: '123'
            },
            {
                label: '123'
            },
            {
                label: '123'
            },
        ]
    }
    const dataUser = [
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
        {
            id: Math.random(),
            Avatar: "",
            userName: "123",
            phoneNumber: "1234"
        },
    ]
    const refSearch = useRef("")
    const handleSearch = () => {
        console.log(refSearch.current.value)
    }
    const search = {
        refSearch: refSearch,
        handleSearch: handleSearch
    }

    return (
        <>
            <Layout>
                <Header style={{ padding: 0 }}><AppBar hasMail={mail} hasSearch={search} /></Header>
                <Content style={{
                    overflow: "auto",
                    maxHeight: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    {dataUser.map(user => <AccountItem user={user} key={user.id} />)}
                </Content>

            </Layout>

        </>
    )
}
