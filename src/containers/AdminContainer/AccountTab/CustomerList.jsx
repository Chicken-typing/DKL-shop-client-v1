import React, { useRef } from 'react'
import AppBar from '../../../components/AppBar'

export default function CustomerList() {
    const mail = {
        data: [
            {
                label: ''
            }
        ]
    }
    const refSearch = useRef("")
    const handleSearch = () => {
        console.log(refSearch.current.value)
    }
    const search = {
        refSearch: refSearch,
        handleSearch: handleSearch
    }

    return (
        <><AppBar hasMail={mail} hasSearch={search} /></>
    )
}
