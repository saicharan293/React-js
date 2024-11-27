import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import ContextApi from './context/ContextApi'

const App = () => {
  return (
    <ContextApi>
      <div className='w-full h-screen bg-zinc-800 relative'>
        <Background />
        <Foreground />
      </div>
    </ContextApi>
  )
}

export default App