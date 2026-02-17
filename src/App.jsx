import { useState } from 'react'

import './App.css'
import { NavBar } from './NavBar'
import { Header } from './Header'
import { MainInfo } from './MainInfo'

function App() {

  return (
    <div className='main'>
      <NavBar></NavBar>
      <div className='content'>
        <Header></Header>
       
        <MainInfo></MainInfo>
      </div>
    </div>
  )
}

export default App
