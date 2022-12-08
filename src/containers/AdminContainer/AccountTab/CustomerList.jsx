import { Layout, Skeleton, Empty } from 'antd'
import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../action'
import AccountItem from '../../../components/AccountItem'
import AppBar from '../../../components/AppBar'
import { API_USER } from '../../../linkTo'
import deleteUser from '../../../services/deleteUser'
const { Header, Content } = Layout
export default function CustomerList(props) {
    const dispatch = useDispatch()
    const [result, setResult] = useState([])
    const [searching, setSearching] = useState(false)
    const mail = {
        data: []
    }
    useEffect(() => {
        dispatch(fetchUser())
    }, []);
    const dataUser = useSelector(state => state.fetchUser.dataUser.filter(user => user.role === 'customer'))
    useEffect(() => setResult(dataUser), [])
    const handleSearch = (text) => {
        setResult([...dataUser.filter(object => object.username.toLowerCase().includes(text.toLowerCase()))])
        setSearching(true)
    }
    const search = {

        handleSearch: handleSearch
    }
    const handleDeleteUser = (url, id) => {
        deleteUser(url, id)
    }
    const deleteAccount = {
        handleDeleteUser: handleDeleteUser
    }
    return (
        <>
            <Layout>
                <Header style={{ padding: 0 }}>
                    <AppBar hasSearch={search} affix={64} />
                </Header>
                <Content
                    style={{
                        overflow: "auto",
                        minHeight: 500,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: 20
                    }}>
                    {result.length > 0
                        ? result.map(user => <AccountItem user={user} url={API_USER}
                            hasEmail handleDeleteUser={deleteAccount} />)
                        : searching ?
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="The user do not exist." />
                            : <Skeleton active avatar />
                    }
                </Content>

            </Layout>

        </>
    )
}
