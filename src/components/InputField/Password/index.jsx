import React, { useState } from 'react'
import { Input, Form } from 'antd'

export default function Password({ onBlur }) {
    const [errorPassword, setErrorPassword] = useState(<br />)
    return (
        <Form.Item
            id='Password'
            className="input-field"
            label="Password"
            name="password"
            rules={
                [
                    {
                        required: true,
                        message: "Please enter your password!"

                    }
                ]
            }>
            <Input.Password
                id='password'
                onBlur={(e) => {
                    if (e.target.value === "") {
                        setErrorPassword("Password is empty.")
                        document.getElementById('password').focus()
                    } else {
                        onBlur(e.target.value)
                        setErrorPassword(<br />)
                    }
                }} />
            <div className="error-password">{errorPassword}</div>
        </Form.Item>
    )
}
