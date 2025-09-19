import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import Mainhero from './components/mainhero/mainhero'
import Testing from './components/testing/testing'
import Gradient from './components/gradient/gradient'

const App = () => {
  return (
    <div>
      <Testing />
      <Navbar />
      <Mainhero />
      <Footer /> 
      <Hero />   
      <Gradient />
      <IObserver />
    </div>
  )
}

export default App

