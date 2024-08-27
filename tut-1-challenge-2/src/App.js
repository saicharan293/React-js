import { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";
import Table from "./Table";



function App() {
  const API_URL='https://jsonplaceholder.typicode.com/';
  const [reqType, setreqType] = useState('users');
  const [items, setitems] = useState([]);

  useEffect(()=>{
    const fetchItems=async()=>{
      try{
        const response=await fetch(`${API_URL}${reqType}`);
        const data=await response.json();
        // console.log(data)
        setitems(data);
        // if(!response.ok) 
      }catch(err){
        console.log(err);
      }
    }
    fetchItems();
  },[reqType])
  return (
    <div className="App">
      <Form reqType={reqType} setreqType={setreqType} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
