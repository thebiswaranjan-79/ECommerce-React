import { Button } from 'reactstrap'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/pages/Home/Home'

function App() {
  

  return (
    <div className='app-wrapper'>
      {/* Common Header for all Pages  */}
       <Header color='light' light={true} expand='md' container='md' />
       <Home/>

      {/* Common Footer for all Pages  */}
       <Footer/>
    </div>
  )
}

export default App
