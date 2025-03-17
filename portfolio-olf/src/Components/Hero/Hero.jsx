import React from 'react'
import './Hero.css'
import profile_image from '../../assets/FotoPerfil.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  const handleDownload = () => {
    const url = "../../assets/OctavioLucardiFierro_CV_2025.pdf"; 
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Curriculum.pdf"; 
    anchor.click();
  };

  return (
    <div id='home' className='hero'>
        <img src={profile_image} alt="" />
        <h1>Soy <span>Octavio Lucardi Fierro,</span> desarrollador frontend y videojuegos en Argentina</h1>
        <p>Soy un desarrollador Argentino, apasionado por la programacion en todas sus formas</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contactame</p> </AnchorLink></div>
            <div className="hero-resume" onClick={handleDownload}>Mi Curriculum</div>
        </div>
        
    </div>
  )
}

export default Hero