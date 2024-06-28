import { Button } from 'reactstrap'
import './App.css'
import Header from './components/Header/Header'

function App() {
  

  return (
    <div>
       <Header color='light' light={true} expand='md' container='md' fixed='top' />
    </div>
  )
}

export default App
