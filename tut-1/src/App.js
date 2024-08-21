
import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { AddItem } from './AddItem';
import React, { useEffect, useState } from "react";
import { SearchItem } from './SearchItem';
function App() {
  // const name='Sai';
  
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('shopping')) || [])
  const [newItem, setnewItem] = useState('')
  const [search, setsearch] = useState('')

  //use effect 
  //-> called after every load , if there is no dependancy
  
  // useEffect(()=>{
  //   console.log("updating items state")
  // })

  //-> called when there is change in value, if there is dependancy
  // console.log("before use effect")
  useEffect(()=>{
    // console.log("inside use effect items state")
    localStorage.setItem('shopping',JSON.stringify(items));
  },[items])
  // console.log('after use effect')

  const addItem=(item)=>{
    const id=items.length?items[items.length - 1].id + 1: 1;
    const myNewItem={id,checked:false,item};
    const listItems=[...items,myNewItem];
    setitems(listItems)

  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //if no item added, 
    if(!newItem) return;
    //addItem
    addItem(newItem);
    setnewItem('');
  }

  const handleCheck =(id)=>{
    const listItems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item);
   setitems(listItems)
  }

  const handleDelete=(id)=>{
    // console.log(id)
    const listItems=items.filter(item=>item.id!==id);
    setitems(listItems)
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

      <Content 
      items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
