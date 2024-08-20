import React from 'react'
import { FaPlus } from 'react-icons/fa'

export const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input 
            type="text"
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
        >
            <FaPlus />
        </button>
    </form>
  )
}
