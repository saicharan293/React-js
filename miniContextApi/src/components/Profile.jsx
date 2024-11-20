import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user}=useContext(UserContext)
    if(!user) return <h1>Not Logged in</h1>
  return (
    <div>
        {/* Profile : {user.username} */}
        {/* More component */}
        <h1> Profile : {user.username}</h1>
    </div>
  )
}

export default Profile