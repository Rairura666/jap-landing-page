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
      <div id="contact">
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
