import React, { useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

const EditPost = ({
    posts,handleEdit, editBody, seteditBody,editTitle,seteditTitle
}) => {
    const {id}=useParams();
    const post=posts.find(post=>(post.id)==id);
    useEffect(()=>{
        if(post){
            seteditTitle(post.title);
            seteditBody(post.body);
        }
    },[post,seteditTitle,seteditBody])
  return (
    <main className='NewPost'>
        {editTitle && 
            <React.Fragment>
                <h2>Edit post</h2>
                <form className='newPostForm' onSubmit={(e)=>e.preventDefault()}>
                    <label htmlFor="postTitle">Title: </label>
                    <input 
                    type="text" 
                    id="postTitle" 
                    required 
                    value={editTitle} 
                    onChange={e=>seteditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Post: </label>
                    <textarea
                    id="postBody"
                    required
                    value={editBody}
                    onChange={e=>seteditBody(e.target.value)}
                    ></textarea>
                    <button type="submit" onClick={()=> handleEdit(post.id)}>Submit</button>
                </form>
        </React.Fragment>
      } {!editTitle && 
        <React.Fragment>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing..</p>
            <p>
                <Link to='/'>Visit Our Home page</Link>
            </p>
        </React.Fragment>
      }
    </main>
  )
}

export default EditPost