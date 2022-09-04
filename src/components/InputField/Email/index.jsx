import React,{useState} from 'react'
import Star from '../../Start'
import Validator from 'validator';
import  './style.scss'
export default function Email() {
    const [email, setEmail] = useState(<br/>)
    const[error,setError]=useState("")
    return (
        <div id="Email" className="input-field" >
            <label htmlFor="email">Email <Star/></label>
            <input type="email" id='email' onBlur={(e) => {
                let mail = e.target.value
                if (!Validator.isEmail(mail)) {
                    setError("Email is invalid.")
                } else {
                    setError(<br/>)
                    setEmail(mail)
                }
            }} />
            <div id="error-email">{ error}</div>
        </div>
    )
}
