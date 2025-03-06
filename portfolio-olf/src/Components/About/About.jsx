import React from 'react'
import './About.css'
import profile_img from '../../assets/profileImg.png'
import theme_pattern from '../../assets/logoasset.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>Sobre mi</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Soy un estudiante universitario al que le apasiona la programación Web y el desarrollo de videojuegos, tengo experiencia desarrollando varias webs de gestión para utilizarse de manera local, desarrollando videojuegos con Unity usando C#</p>
                    {
                    //poner aca otro p si se lo necesita
                    //<hr style={{width:"100%"}}/> estas iban abajo con las aptitudes
                    }
                </div>
                <div className="about-container">
                    <div className="about-skills">
                        <div className="about-habilidad"><p>HTML y CSS </p></div>
                        <div className="about-habilidad"><p>Python </p></div>
                        <div className="about-habilidad"><p>C# </p></div>
                        <div className="about-habilidad"><p>C++ </p></div>
                    </div>
                    <div className="about-skills">
                        <div className="about-habilidad"><p>JavaScript </p></div>
                        <div className="about-habilidad"><p>React JS </p></div>
                        <div className="about-habilidad"><p>Git y GitHub </p></div>
                        <div className="about-habilidad"><p>Unity</p></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about-logros">
            <div className="logro">
                <h1>+2</h1>
                <p>Años de experiencia</p>
            </div>
            <hr />
            <div className="logro">
                <h1>3</h1>
                <p>Proyectos completos</p>
            </div>
            <hr />
            <div className="logro">
                <h1>2</h1>
                <p>Proyectos en proceso</p>
            </div>
        </div>
    </div>
  )
}

export default About