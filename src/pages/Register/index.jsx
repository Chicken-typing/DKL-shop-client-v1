import React,{useState} from 'react';
import Email from '../../components/InputField/Email'
import Password from '../../components/InputField/Password'
import RePassword from '../../components/InputField/RePassword';
import FName from '../../components/InputField/FirstName';
import LName from '../../components/InputField/LastName';
import './style.scss'
const Register = () => {
    const[password,setPassword]=useState("")
    function onGetPassword (getPassword)  {
        setPassword(getPassword)
        
    }
    return (
        <div className='Register'>
            <div className="Register-field">
                <h1>Register</h1>
                <Email />
                <div className='input-row'>
                    <FName />
                    <LName />
                </div>
                <div className='input-row password-row'>
                    <Password onBlur={onGetPassword}/>
                    <RePassword password={password} />
                </div>
                <div className='input-row'>
                    <button>REGISTER</button>
                    <span className='title'>Already a member,&nbsp;<a href=' '>Sign in</a></span>
                </div>
            </div>
        </div>
    );
}

export default Register;
