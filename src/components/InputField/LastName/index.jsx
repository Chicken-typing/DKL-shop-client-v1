import React, { useState } from 'react'
import { Form, Input } from 'antd';

export default function LName() {
  let regExp = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\/?]/;
  const [nameError, setNameError] = useState(<br />)
  const handleVaildateName = e => {
    let isContain = regExp.test(e.target.value)
    if (isContain) {
      setNameError("Name can not contain any symbol.")
    } else {
      setNameError(<br />)
    }
  }
  return (
    <Form.Item
      id='LName'
      label="Last name"
      name="lastName"
      rules={
        [
          {
            required: true,
            message: "Please enter your last name!"
          }
        ]
      }>
      <Input onBlur={handleVaildateName} placeholder="Nguyen Khang"/>
      <div className="error-name">{nameError}</div>
    </Form.Item>
  )
}