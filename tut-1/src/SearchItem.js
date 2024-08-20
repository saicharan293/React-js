import React from 'react'

export const SearchItem = ({search,setsearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input 
            type="text"
            id='search'
            role='searchbox'
            placeholder='Search Items'
            value={search}
            onChange={e=>setsearch(e.target.value)}
        />
    </form>
  )
}
