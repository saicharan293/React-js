
import Header from './Header';
import Nav from './Nav';
import Newpost from './Newpost';
import Postpage from './Postpage';
import Missing from './Missing';
import Footer from './Footer';
import About from './About';

import { Route,Routes,useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home';

function App() {
  const [search, setsearch] = useState('')
  const [searchResult, setsearchResult] = useState([])
  const history=useHistory();
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
    history.push('/');

  }
  return (
    <div className="App">
      <Header title="React js Blog"/>
      <Nav search={search} setsearch={setsearch}/>
      <Routes>
        <Route path='/' element={<Home posts={posts} />} />
        <Route path='/post' element={<Newpost />} />
        <Route path='/post/:id' element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
