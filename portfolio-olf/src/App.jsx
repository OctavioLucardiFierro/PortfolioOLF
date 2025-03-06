import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import ExperienciaYServicios from './Components/Exp/ExperienciaYServicios'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/NavBar/Navbar'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <ExperienciaYServicios/>
        <MyWork/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App