import { useState } from 'react'

import './App.css'
import { NavBar } from './NavBar'
import { Header } from './Header'
import { MainInfo } from './MainInfo'
import { Footer } from './Footer'

function App() {

  return (
    <div className='main'>
      <NavBar></NavBar>
      <div className='content'>
        <Header></Header>
        <MainInfo></MainInfo>

      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
