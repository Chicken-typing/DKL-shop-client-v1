import React,{useState} from 'react'
import Star from '../../Start'
export default function LName() {
  let regExp = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\/?]/;
  const [nameError, setNameError]=useState( <br/>)
  return (
    <div id='LName' className="input-field">
    <label htmlFor="Lname">Last Name <Star /> </label>
    <input type="text" id='Lname'  onBlur={e => {
                let isContain = regExp.test(e.target.value)
                if (isContain) {
                    setNameError("Name can not contain any symbol.")
                } else {
                    setNameError(<br/>)
                }
            }} />
            <div  className="error-name">{ nameError}</div>
</div>
  )
}