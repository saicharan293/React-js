import React, { useState } from 'react'
import PersonContext from './PersonContext'

const PersonContextProvider = ({children}) => {
    const [person, setperson] = useState(null)

  return (
    <PersonContext.Provider value={{person,setperson}}>
      {children}
    </PersonContext.Provider>
  )
}

export default PersonContextProvider