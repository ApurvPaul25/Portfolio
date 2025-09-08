import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import Mainhero from './components/mainhero/mainhero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Mainhero />
      <Hero />
      <Footer />
    </div>
  )
}

export default App