import React from 'react'
import AppBar from '../../../components/AppBar'

export default function CustomerList() {
    const mail = {
        quantity: 20,
        data: [
        ]
    }

    return (
        <><AppBar hasMail={mail} /></>
    )
}
