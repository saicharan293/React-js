
import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { AddItem } from './AddItem';
import React, { useEffect, useState } from "react";
import { SearchItem } from './SearchItem';
import apiRequest from './apiRequest';
function App() {
  // const name='Sai';
  const API_URL="http://localhost:3500/items"
  
  const [items, setitems] = useState([]);
  const [newItem, setnewItem] = useState('');
  const [search, setsearch] = useState('');
  const [fetchError, setfetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  //use effect 
  //-> called after every load , if there is no dependancy
  
  // useEffect(()=>{
  //   console.log("updating items state")
  // })

  //-> called when there is change in value, if there is dependancy
  // console.log("before use effect")


  //[] => only load (once) at the app start
  useEffect(()=>{
    // console.log("inside use effect items state")
    const fetchItems=async ()=>{
      try{
        const response=await fetch(API_URL);
        if(!response.ok) throw Error('Did not receive expected data')
        const listItems=await response.json();
        // console.log('list items',listItems)
        setitems(listItems);
        setfetchError(null);
      }catch(err){
        // console.log(err.message)
        setfetchError(err.message)
      }finally{
        setisLoading(false);
      }
    }

    setTimeout(()=>{
      
      fetchItems()
    },2000)
  },[])
  // console.log('after use effect')

  const addItem=async(item)=>{
    const id=items.length?items[items.length - 1].id + 1: 1;
    const myNewItem={id,checked:false,item};
    const listItems=[...items,myNewItem];
    setitems(listItems);

    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
    const result=await apiRequest(API_URL,postOptions);
    if(result) setfetchError(result);

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //if no item added, 
    if(!newItem) return;
    //addItem
    addItem(newItem);
    setnewItem('');
  }

  const handleCheck = async (id)=>{
    const listItems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item);
    setitems(listItems)
    const myItem=listItems.filter(item=>item.id===id);
    const updateOptions = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({checked:myItem[0]}.checked)
    };
    const reqUrl=`${API_URL}/${id}`;
    const result=await apiRequest(reqUrl,updateOptions);
    if(result) setfetchError(result);
  }

  const handleDelete=async(id)=>{
    // console.log(id)
    const listItems=items.filter(item=>item.id!==id);
    setitems(listItems);

    const deleteOption={
      method:'DELETE'
    }
    const reqUrl=`${API_URL}/${id}`;
    const result= await apiRequest(reqUrl,deleteOption);
    if(result) setfetchError(result);
  }
 
  

  return (
    <div className="App">
      <Header title="Groceries List"/>
      
      <AddItem 
        newItem={newItem} 
        setnewItem={setnewItem}
        handleSubmit={handleSubmit}
        />

      <SearchItem 
        search={search} 
        setsearch={setsearch}
      />
      <main>
      {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        />}
      </main>

      <Footer length={items.length}/>
    </div>
  );
}

export default App;
