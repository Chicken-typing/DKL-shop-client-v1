import React, { useState } from 'react';
import {Input,Form} from 'antd';

const FName = () => {
    let regExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const [nameError, setNameError] = useState(<br />)
    const handleValidateName = e => {
        let isContain = regExp.test(e.target.value)
                if (isContain) {
                    setNameError("Name can not contain any symbol.")
                } else {
                    setNameError(<br />)
                }
    }
    return (
        <Form.Item
            id='FName'
            label="First Name"
            name="firstname"
            rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
            ]}>
            <Input onBlur={handleValidateName} placeholder="Huynh"/>
            <div className="error-name">{nameError}</div>
        </Form.Item>
    );
}

export default FName;
