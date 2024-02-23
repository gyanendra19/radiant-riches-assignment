import { useState } from 'react'
import './styles/style.scss'
import Navbar from './components/navbar'
import Header from './components/Header'
import BodyBottom from './components/BodyBottom'
import Deals from './components/Deals'
import Footer from './components/Footer'
import BodySection from './components/BodySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <Navbar />
        <Header />
        <BodySection/>
        <BodyBottom />
        <Deals />
        <Footer />
      </div>
    </>
  )
}

export default App
