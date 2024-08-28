import React from 'react'

const Newpost = ({handleSubmit,postTitle,setpostTitle,postBody, setpostBody}) => {
  console.log('new post')
  return (
    <main className='NewPost'>
      <h2>New post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title: </label>
        <input 
          type="text" 
          id="postTitle" 
          required 
          value={postTitle} 
          onChange={e=>setpostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post: </label>
        <textarea
         id="postBody"
         required
         value={postBody}
         onChange={e=>setpostBody(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default Newpost