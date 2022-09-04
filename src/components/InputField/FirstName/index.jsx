import React,{useState} from 'react';
import Star from '../../Start'
const FName = () => {
    let regExp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const [nameError, setNameError]=useState(<br/>)
    return (
        <div id='FName' className="input-field">
            <label htmlFor="Fname">First Name <Star /> </label>
            <input type="text" id='Fname' onBlur={e => {
                let isContain = regExp.test(e.target.value)
                if (isContain) {
                    setNameError("Name can not contain any symbol.")
                } else {
                    setNameError(<br/>)
                }
            }} />
            <div  className="error-name">{ nameError}</div>
        </div>
    );
}

export default FName;
