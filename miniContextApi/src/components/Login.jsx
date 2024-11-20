import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const {setuser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setuser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Usename'/>
        {" "}
        <input type="password" value={password} onChange={e=>setpassword(e.target.value)} placeholder='Password' />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login