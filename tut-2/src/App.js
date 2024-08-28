
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

function App() {
  const [search, setsearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const navigate=useNavigate();
  const [postTitle, setpostTitle] = useState('')
  const [postBody, setpostBody] = useState('')

  
  const [posts, setposts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
    }

  ])
  const handleDelete=(id)=>{
    const postsList=posts.filter(post=>post.id!==id)
    setposts(postsList);
    navigate('/');

  }
  useEffect(()=>{
    const filteredPosts=posts.filter(post=>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setsearchResult(filteredPosts.reverse())
      
  },[posts,search])
  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=posts.length?posts[posts.length - 1].id + 1 : 1;
    const datetime=format(new Date(),'MMMM dd, yyyy pp');
    const newPost={id,title:postTitle,datetime,body:postBody}
    const allposts=[...posts,newPost];
    setposts(allposts)
    setpostTitle('');
    setpostBody('');
    navigate('/')
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
        <Route path='/post/:id' element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
