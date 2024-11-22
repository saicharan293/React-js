import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <form
             className='flex flex-col items-center justify-center'
             onSubmit={(e)=>submitHandler(e)}>
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    className='border-2 border-emarald-600 py-4 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full' type="email" placeholder='Enter your email' required/>
                <input
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    className='border-2 border-emarald-600 py-4 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 rounded-full mt-3' type="password" placeholder='Enter your password' required/>
                <button className=' bg-emerald-600 mt-5 py-4 px-5 text-xl text-white outline-none  rounded-full'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login