import React, { useState } from 'react'
import { Input, Form } from 'antd'

export default function RePassword(props) {

    const [errorPassword, setErrorPassword] = useState(<br />)
    return (
        <Form.Item
            id='RePassword'
            className="input-field"
            label="Confirm Password"
            name="confirmPassword"
            rules={
                [
                    {
                        required: true,
                        message: "Please confirm your password!"

                    }
                ]
            }
        >
            <Input.Password
                    id='rePassword'
                    onBlur={e => {
                        if (props.password !== e.target.value) {
                            setErrorPassword("Do not match with password.")
                            e.target.value = ""
                        } else {
                            setErrorPassword(<br />)
                        }
                    }} />
            <div className="error-password">{errorPassword}</div>
        </Form.Item>
    )
}
