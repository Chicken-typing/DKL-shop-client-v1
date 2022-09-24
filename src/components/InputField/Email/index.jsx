import React, { useState } from 'react'
import Validator from 'validator';
import { Form, Input } from 'antd'
import './style.scss'
export default function Email() {
    const [email, setEmail] = useState(<br />)
    const [error, setError] = useState("")
    const handleVaildate = e => {
        if (!Validator.isEmail(e.target.value)) {
            setError("Email is invalid.")
        } 
        else {
            setError(<br />)
            setEmail(e.target.value)
        }
    }
    return (
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input onBlur={handleVaildate} placeholder="nguyenkhang@gmail.com"/>
            <div className="error-email" style={{
                color: "red",
                fontSize:12
            }}>{error}</div>
            </Form.Item>

    )
}
