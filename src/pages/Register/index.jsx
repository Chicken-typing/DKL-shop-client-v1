import React, { useState } from 'react';
import Email from '../../components/InputField/Email'
import Password from '../../components/InputField/Password'
import RePassword from '../../components/InputField/RePassword';
import FName from '../../components/InputField/FirstName';
import LName from '../../components/InputField/LastName';
import { Form, Button } from 'antd'
import './style.scss'
const Register = () => {
    const [password, setPassword] = useState("")
    function onGetPassword(getPassword) {
        setPassword(getPassword)

    }
    return (
        <div className='Register'>
            <Form
                name="basic"
                labelCol={{
                    span: 16,
                }}
                wrapperCol={{
                    span: 150,
                }}
                autoComplete="off"
                layout="vertical"            
            >

                <h1>Register</h1>
                <Email />
                <div className='input-row'>
                    <FName />
                    <LName />
                </div>
                <div className='input-row '>
                    <Password onBlur={onGetPassword} />
                    <RePassword password={password} />
                </div>
                <div className='input-row'>
                    <Button type='primary' block danger >REGISTER</Button>
                    <span className='title'>Already a member,&nbsp;<a href=' '>Sign in</a></span>
                </div>
            </Form>
        </div>
    );
}

export default Register;
