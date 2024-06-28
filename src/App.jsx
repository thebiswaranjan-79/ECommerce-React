import { Button } from 'reactstrap'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <div className='app-wrapper'>
       <Header color='light' light={true} expand='md' container='md' />
       <Footer/>
    </div>
  )
}

export default App
