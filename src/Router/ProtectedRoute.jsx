import React from "react"
import UnAuthPage from '../pages/UnAuthPage'
import checkRole from '../utils/checkRole'
const ProtectedRoute = ({ children }) => {
    if (!checkRole()) {
        return <UnAuthPage />
    }
    return children
}

export default ProtectedRoute
