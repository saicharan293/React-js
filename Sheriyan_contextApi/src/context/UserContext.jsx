import React, { createContext } from 'react'

export let DataContext = createContext()

const UserContext = ({children}) => {

    const userData={
      username:'sai',
      age:23,
      city:'kurnool'
    }

  return (
    <DataContext.Provider value={userData}>
        {children}
    </DataContext.Provider>
  )
}

export default UserContext