import React from "react"
import { useSelector } from "react-redux"
import UnAuthPage from '../pages/UnAuthPage'
import checkRole from '../utils/checkRole'
const ProtectedRoute = ({ children }) => {
    const user = useSelector(state => state.User.userInfor)
    if (!checkRole(user)) {
        return <UnAuthPage />
    }
    return children
}

export default ProtectedRoute
