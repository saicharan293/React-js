import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Postpage = ({posts,handleDelete}) => {
  const {id}=useParams();
  // const post=posts.find(post=>(post.id).toString()===id);
  const post=posts.find(post=> post.id==id);

  return (
    <main className='PostPage'>
      <article className='post' >
        {post && 
          <React.Fragment>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
            <button className="editButton">Edit Post</button></Link>
            <button className='deleteButton' onClick={()=> handleDelete(post.id)}>
              Delete Post
            </button>
          </React.Fragment>
        }
        {!post &&
          <React.Fragment>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to='/'>Visit Our HomePage</Link>
            </p>
          </React.Fragment>
        }
      </article>
    </main>
  )
}

export default Postpage