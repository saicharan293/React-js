
import Header from './Header';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Missing from './Missing';
import Footer from './Footer';
import About from './About';

import { Route,Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home';
import { format } from 'date-fns/format';
import api from './api/posts';
import EditPost from './EditPost';

function App() {
  const [search, setsearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const navigate=useNavigate();
  const [postTitle, setpostTitle] = useState('')
  const [editTitle, seteditTitle] = useState('')
  const [postBody, setpostBody] = useState('')
  const [editBody, seteditBody] = useState('')
  const [posts, setposts] = useState([]);
  

  const handleDelete=async(id)=>{
    try {
      await api.delete(`/posts/${id}`)
      const postsList=posts.filter(post=>post.id!==id)
      setposts(postsList);
      navigate('/');
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  const handleEdit=async(id)=>{
    const datetime=format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost={id, title:editTitle, datetime, body:editBody};
    try {
      const response=await api.put(`/posts/${id}`,updatedPost);
      setposts(posts.map(post=>post.id==id?{...response.data}:post));
      seteditTitle('')
      seteditBody('')
      navigate('/')
    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  useEffect(()=>{
    const fetchPosts=async()=>{
      try {
        const response=await api.get('/posts');
        setposts(response.data);
      } catch (error) {
        if(error.response){
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }else{
          console.log(`Error: ${error.message}`);
        }
      }
    }
    fetchPosts();
  },[])

  useEffect(()=>{
    const filteredPosts=posts.filter(post=>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setsearchResult(filteredPosts.reverse())
      
  },[posts,search])

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length - 1].id + 1 : 1;
    const datetime=format(new Date(),'MMMM dd, yyyy pp');
    const newPost={id,title:postTitle,datetime,body:postBody};
    try {
      const response=await api.post('/posts',newPost)
      const allposts=[...posts,response.data];
      setposts(allposts)
      setpostTitle('');
      setpostBody('');
      navigate('/')
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
    
  }

  return (
    <div className="App">
      <Header title="React js Blog"/>
      <Nav search={search} setsearch={setsearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResult} />} />
        <Route path='/post' element={<Newpost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setpostTitle={setpostTitle}
          postBody={postBody}
          setpostBody={setpostBody}
        />} />
        <Route path='/edit/:id' element={<EditPost 
          posts={posts}
          handleEdit={handleEdit}
          editTitle={editTitle}
          seteditTitle={seteditTitle}
          editBody={editBody}
          seteditBody={seteditBody}
        />} />
        <Route path='/post/:id' element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
