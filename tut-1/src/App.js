
import './App.css';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';
import React, { useState } from "react";
function App() {
  // const name='Sai';
  
  const [items, setitems] = useState([
    {
      id:1,
      checked:true,
      item:"One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
      id:2,
      checked:false,
      item:"Item 2"
    },
    {
      id:3,
      checked:false,
      item:"Item 3"
    }
  ])

  const handleCheck =(id)=>{
    const listItems=items.map(item=>item.id===id?{...item,checked:!item.checked}:item);
    setitems(listItems);
    localStorage.setItem('shopping',JSON.stringify(listItems));
  }

  const handleDelete=(id)=>{
    console.log(id)
    const listItems=items.filter(item=>item.id!==id);
    setitems(listItems)
    localStorage.setItem('shopping',JSON.stringify(listItems))
  }
 
  

  return (
    <div className="App">
      <Header title="Groceries List"/>
      <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
