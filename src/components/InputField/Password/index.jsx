import React,{useState} from 'react'
import open from '../../../assets/symbols/opened-eye.png'
import close from '../../../assets/symbols/closed-eye.png'
import {EyeOutlined, EyeInvisibleOutlined} from 'antd'
import Star from '../../Start'
import './style.scss'
export default function Password({onBlur}) {
    const [icon, setIcon] = useState(close)
    const [type, setType] = useState('password')
    const [errorPassword,setErrorPassword]=useState(<br/>)
    const handleShowPassword = () => {
        if (icon === close) {
            setIcon(open)
            setType('text')
        } else {
            setIcon(close)
            setType('password')
        }
    
        
    }
    return (
        <div id='Password' className="input-field">
            <label htmlFor="password">Password <Star/></label>
            <div className='password-field password-border'>
                <input type={type} id='password' onBlur={(e) => {
                    if (e.target.value === "") {
                        setErrorPassword("Password is empty.")
                        document.getElementById('password').focus()
                    } else {
                        onBlur(e.target.value)
                        setErrorPassword(<br/>)

                    }
                }}/>
                <img src={icon} alt="eye" onClick={handleShowPassword} />
            </div>
            <div className="error-password">{ errorPassword}</div>
        </div>
    )
}
