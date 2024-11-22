import React, { useContext } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import { DataContext } from './context/UserContext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data)
  return (
    <div>
      <h1>This is app {data.username}</h1>
      <Header data={data.city}/>
      <Section />
      <Footer data={data}/>
      
    </div>
  )
}

export default App