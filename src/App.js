import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App