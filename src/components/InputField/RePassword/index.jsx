import React,{useState} from 'react'
import open from '../../../assets/symbols/opened-eye.png'
import close from '../../../assets/symbols/closed-eye.png'
import Star from '../../Start'
import './style.scss'
export default function RePassword(props) {
    const [icon, setIcon] = useState(close)
    const [type, setType] = useState('password')
    const [errorPassword,setErrorPassword]=useState(<br/>)
    return (
        <div id='RePassword' className="input-field">
            <label htmlFor="rePassword">Re-password <Star/></label>
            <div className='rePassword-field password-border'>
                <input type={type} id='rePassword' onBlur={e => {
                    if(props.password!==e.target.value){
                        setErrorPassword("Do not match with password.")
                        e.target.value=""
                    } else {
                        setErrorPassword(<br/>)
                    }
                }} />
                <img src={icon} alt="eye" onClick={() => {
                    if (icon === close) {
                        setIcon(open)
                        setType('text')
                    } else {
                        setIcon(close)
                        setType('password')
                    }
                
                    }} />
            </div>
            <div className="error-password">{ errorPassword}</div>
        </div>
    )
}
