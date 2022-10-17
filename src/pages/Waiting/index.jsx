import React from 'react'
import './style.scss'
export default function Waiting(props) {
    return (
        <div className="waiting"><span className="title">{props.label}</span></div>
    )
}

