import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Address = () => {
    const {user} = useContext(UserContext)
    if(!user) return <h1>Not Logged in</h1>
  return (
    <>
        <h1>Password: {user.password}</h1>
    </>
  )
}

export default Address