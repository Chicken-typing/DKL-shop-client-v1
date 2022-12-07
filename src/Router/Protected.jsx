import React from 'react'
import { useSelector } from 'react-redux'
import UnAuthPage from '../pages/UnAuthPage'
function Protected({ children }) {
    const token = useSelector(state => state.User.userInfor)
    if (!token.token) {
        return <UnAuthPage />
    }
    return children
}

export default Protected