import React from 'react'
import './Hero.css'
import profile_image from '../../assets/FotoPerfil.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1>Soy <span>Octavio Lucardi Fierro,</span> desarrollador frontend y videojuegos en Argentina</h1>
        <p>Soy un desarrollador Argentino, apasionado por la programacion en todas sus formas</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contactame</p> </AnchorLink></div>
            <div className="hero-resume">Mi Curriculum</div>
        </div>
        
    </div>
  )
}

export default Hero