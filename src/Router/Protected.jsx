import React from 'react'
import { useSelector } from 'react-redux'
import UnAuthPage from '../pages/UnAuthPage'
import _ from 'lodash'
function Protected({ children }) {
    const user = useSelector(state => state.User.userInfor)
    if (_.isEmpty(user)) {
        return <UnAuthPage />

    }
    return children
}

export default Protected