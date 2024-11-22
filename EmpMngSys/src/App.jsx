import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './assets/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
  console.log(authData)


  const handleLogin = (email,password) => {
    // console.log(email,password)
    if(email=='admin@me.com' && password == '123'){
      // console.log('this is admin')
      setUser('admin')
    } else if(email=='user@me.com' && password == '123'){
      // console.log('user logged')
      setUser('employee')
    }
    else{
      alert('Invalid Credentials')
    }
  }

  // handleLogin('admin@me.com','123')
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/>:''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* <Login /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </>
  )
}

export default App