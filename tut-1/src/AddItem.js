import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react';

export const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  //to re--shift focus back to input after clicking on button
  const inputRef = useRef();
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
            ref={inputRef}
            autoFocus
            id='addItem'
            placeholder='Add Item'
            required    
            value={newItem}
            onChange={(e)=>setnewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label='Add Item'
            onClick={()=>inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}
