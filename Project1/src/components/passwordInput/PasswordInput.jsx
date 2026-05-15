import { useState } from 'react'
import React from 'react'
import "./PasswordInput.css"

export default function PasswordInput({placeholder}){

    const [isPassword, setIsPassword] = useState(true)

  return (
    <div className='pwd'>
        <input type={isPassword? "password": "text"} placeholder={placeholder} />
        <span onClick={()=> setIsPassword(!isPassword)}>
            {isPassword? "show": "hide"}
        </span>
    </div>
  )
}
