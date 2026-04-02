import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import Mainhero from './components/mainhero/mainhero'
import Testing from './components/testing/testing'
import Gradient from './components/gradient/gradient'
import IObserver from './components/intersectionObserver/iObserver'
import AuthForm from './backend/AuthForm'

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <Navbar />
        <IObserver />
      {/* <Mainhero /> */}
      {/* <AuthForm /> */}
      <Gradient /> 
      {/* <Hero /> */}
      {/* <Testing /> */}
      {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App

