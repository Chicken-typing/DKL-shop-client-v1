import { Layout, Skeleton, Empty } from 'antd'
import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../../action'
import AccountItem from '../../../components/AccountItem'
import AppBar from '../../../components/AppBar'
import { API_USER_CUSTOMER } from '../../../linkTo'
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
        dispatch(fetchUser({
            url: API_USER_CUSTOMER
        }))
    }, []);

    const dataUser = useSelector(state => state.fetchUser.dataUser)
    useEffect(() => {
        setResult(dataUser)
    }, [dataUser])

    const handleSearch = (text) => {
        setResult([...dataUser.filter(object => object.userName.toLowerCase().includes(text.toLowerCase()))])
        setSearching(true)
    }
    const search = {

        handleSearch: handleSearch
    }
    const reFetch = () => {
        setTimeout(() => {
            dispatch(fetchUser({
                url: API_USER_CUSTOMER
            }))
        }, 1000)
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
                    <AppBar hasMail={mail} hasSearch={search} affix={64} />
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
                        ? result.map(user => <AccountItem user={user} url={API_USER_CUSTOMER} hasEmail handleDeleteUser={deleteAccount} reFetch={reFetch} />)
                        : searching ?
                            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="The user do not exist." />
                            : <Skeleton active avatar />
                    }
                </Content>

            </Layout>

        </>
    )
}
