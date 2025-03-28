import React from 'react'
import './Hero.css'
import profile_image from '../../assets/FotoPerfil.jpg'
import pdf from '../../assets/OctavioLucardiFierro_CV_2025.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1><span>Octavio Lucardi Fierro</span>, desarrollador de videojuegos y frontend</h1>
        <p>Soy un desarrollador apasionado por la programación en todas sus formas</p>
        <div className="hero-action">
        <a href="https://www.linkedin.com/in/octavio-lucardi-fierro-4aba90251/" target={'_blank'}><div className="hero-connect">LinkedIn</div></a>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download="CV.pdf"><div className="hero-resume">Mi Curriculum</div> </a>
        </div>
    </div>
  )
}

export default Hero