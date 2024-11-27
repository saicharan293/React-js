import React, { createContext, useState } from 'react'

export let DataContext= createContext()

const ContextApi = ({children}) => {

    
    const [docsList, setDocsList] = useState([
        {
        description: "this is first description",
        filesize: ".9mg",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mg",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" },
        },
        {
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
        filesize: ".9mg",
        close: true,
        tag: { isOpen: false, tagTitle: "Upload", tagColor: "red" },
        },
    ]);
    const addDoc = (newDoc) => {
        setDocsList((prev) => [...prev, newDoc]);
    };
  return (
    <DataContext.Provider value={{addDoc, docsList}}>
      {children}
    </DataContext.Provider>
  )
}

export default ContextApi
