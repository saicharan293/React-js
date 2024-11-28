import React, { createContext, useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
export let DataContext = createContext();

const ContextApi = ({ children }) => {
  const [docsList, setDocsList] = useState(() => {
    const savedDocs = localStorage.getItem('docsList');
    return savedDocs ? JSON.parse(savedDocs) : [
      {
        id: uuidv4(),
        description: "this is first description",
        filesize: "10mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        id: uuidv4(),
        description: "This is second doc",
        filesize: "5mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "sky" },
      },
      {
        id: uuidv4(),
        description: "This is third doc",
        filesize: "6mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Upload", tagColor: "red" },
      },
    ];
  });

  // Sync docsList with localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('docsList', JSON.stringify(docsList));
  }, [docsList]);

    // Add new document
    const addDoc = (newDoc) => {
        setDocsList((prev) => [...prev, { ...newDoc, id: uuidv4() }]);
    };

    // Update an existing document
    const updateDoc = (updatedDoc) => {
      console.log('updateddoc',updatedDoc)
      setDocsList((prevDocs) => 
        prevDocs.map((doc) => 
          doc.id === updatedDoc.id ? { ...doc, ...updatedDoc } : doc
        )
      );
    };
    
  

    return (
        <DataContext.Provider value={{ addDoc, updateDoc, docsList }}>
            {children}
        </DataContext.Provider>
    );
};

export default ContextApi;
