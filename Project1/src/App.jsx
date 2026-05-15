import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Footer from './components/footer/footer'
import Mainhero from './components/mainhero/mainhero'
import Testing from './components/testing/testing'
import Gradient from './components/gradient/gradient'
import IObserver from './components/intersectionObserver/iObserver'
import CatsSsr from './components/cats/catsSsr'
import Location from './components/location'
import AuthForm from './Login/AuthForm'
import Gallery from './components/projects/gallery'

axios.defaults.withCredentials = true

const App = () => {

  const {coords, error} = Location()
  const [showFeature, setShowFeature] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const [user, setUser] =useState(null)

  //refresh logic
  useEffect(()=>{
    axios.get("https://localhost:5000/api/refresh")
    .then(res=> setUser(res.data))
    .catch(()=> console.log("Guest User"))
  },[])
  
  const handleSignup = () =>{
    setIsSignup(true)
  }

  const handleShowMeClick = () => {
      if (error || coords?.latitude == null || coords?.longitude == null) {
          alert("Need location for the surprise element! Please enable in settings");
          return;
        }

      setShowFeature(true);
  };

  //popup cats
  const [showPopup, setShowPopup] = useState(false)
  const [showCats, setShowCats] = useState(false)
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShowPopup(true)
    }, 4000)
    return()=> clearTimeout(timer)
  },[])

  const handleRedirect=()=>{
    setShowCats(true)
    setShowPopup(false)
  }

  if(showCats){
    return <CatsSsr />
  }

  return (
    <div className='app-wrapper'>
      <div className="app-container">
        <nav className='sticky z-20 top-10'>
          <Navbar />
        </nav>
          
          <div className='flex flex-col items-center justify-center gap-10 p-10'>
            <Gallery />
             {/* <AuthForm /> */}
            {/* <button className='p-5 text-white border-2 rounded-4xl border-zinc-5' onClick={handleShowMeClick} >SignUp location</button>
            <button className='p-5 border-2 rounded-4xl text-amber-50' onClick={handleRedirect}>Show Cats</button>
             */}
            
          </div>
          {/* <IObserver /> */}
        {/* <Mainhero /> */}
       
        {/* <Gradient /> */}
        {/* <CatsSsr /> */}
        <Hero />
        {/* <Testing /> */}
        <footer>
          <Footer />
        </footer>
        
      </div>
      {/* 
          {
            showPopup && (
              <div className="popup-overlay">
                <div className="popup-card">
                  <h2>Wanna see lots of Catssss</h2>
                  <p>Click to infinity</p>
                  <button className="primary-btn" onClick={()=> setShowCats(true)}>Infinity</button>
                  <button className="close-btn" onClick={()=> setShowPopup(false)}>Close</button>
                </div>
              </div>
            )
          } */}
      
    </div>






  )
}

export default App

