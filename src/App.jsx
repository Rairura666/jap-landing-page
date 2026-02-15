import { useState } from 'react'

import './App.css'
import { NavBar } from './NavBar'
import { Header } from './Header'
import {MainInfo} from './MainInfo'

function App() {

  return (
    <div className='main'>
    <NavBar></NavBar>
    <Header></Header>
    <MainInfo></MainInfo>
    </div>
  )
}

export default App
