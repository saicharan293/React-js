
import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import { AddItem } from './AddItem';
import React, { useState } from "react";
import { SearchItem } from './SearchItem';
function App() {
  // const name='Sai';
  
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('shopping')))
  const [newItem, setnewItem] = useState('')
  const [search, setsearch] = useState('')

  const setAndSave=(newItems)=>{
    setitems(newItems);
    localStorage.setItem('shopping',JSON.stringify(newItems));
  }

  const addItem=(item)=>{
    const id=items.length?items[items.length - 1].id + 1: 1;
    const myNewItem={id,checked:false,item};
    const listItems=[...items,myNewItem];
    setAndSave(listItems)

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
   setAndSave(listItems)
  }

  const handleDelete=(id)=>{
    // console.log(id)
    const listItems=items.filter(item=>item.id!==id);
    setAndSave(listItems)
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
