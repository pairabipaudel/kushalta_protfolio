import React, { useState } from 'react'
import './App.css'
import Main_content from './Main_content'
import Start_animation from './Start_animation'

function App() {
  const [showMain, setShowMain] = useState(false)

 
     setTimeout(() => {
      setShowMain(true)
    }, 2500)



  return (
    <div>
      {showMain ? <Main_content /> : <Start_animation />}
    </div>
  )
}

export default App
