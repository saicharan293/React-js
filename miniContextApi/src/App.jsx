import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import Address from './components/Address'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React video for context API</h1>
      <Login />
      <Profile />
      <Address />
    </UserContextProvider>
  )
}

export default App