import React from 'react'
import './About.css'
import profile_img from '../../assets/profileImg.png'
import theme_pattern from '../../assets/logoasset.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>Acerca de mi</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-right">
                <div className="about-para">
                    <p>Soy un estudiante de ingeniería al que le apasiona la programación Web y el desarrollo de videojuegos, tengo experiencia desarrollando varias webs de gestión para utilizarse de manera local, desarrollando videojuegos con Unity usando C#.
                        <br />
                        <br />
                        Durante el transcurso de mis estudios en la escuela técnica, pude participar en la First LEGO League (2019), un evento de robótica en el cual los alumnos 1er, 2do y 3er año buscan soluciones a diferentes problemáticas planteadas en base a un tema, en nuestro caso fue "CITY SHAPERS" en la cual pudimos salir 3ros en el ranking de robótica con 365 puntos y ganamos una mención de Proyecto de Innovación (mejor proyecto de innovación de Argentina). En el último año de la escuela técnica tuve el honor de ser el abanderado que llevaba la bandera nacional.
                    </p>
                    {
                    // post de FLL: https://www.instagram.com/p/B5tIlqohrZp/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D&img_index=1
                    //poner aca otro p si se lo necesita
                    //<hr style={{width:"100%"}}/> estas iban abajo con las aptitudes
                    }
                </div>
                <div className="about-container">
                    <div className="about-skills">
                        <div className="about-habilidad"><p>HTML</p></div>
                        <div className="about-habilidad"><p>CSS</p></div>
                        <div className="about-habilidad"><p>Python </p></div>
                        <div className="about-habilidad"><p>C# </p></div>
                        <div className="about-habilidad"><p>Figma</p></div>
                    </div>
                    <div className="about-skills">
                        <div className="about-habilidad"><p>React JS </p></div>
                        <div className="about-habilidad"><p>Git</p></div>
                        <div className="about-habilidad"><p>Github</p></div>
                        <div className="about-habilidad"><p>Unity</p></div>
                        <div className="about-habilidad"><p>OOP</p></div>
                    </div>
                    <div className="about-skills">
                        <div className="about-habilidad"><p>JavaScript</p></div>
                        <div className="about-habilidad"><p>Visual Studio</p></div>
                        <div className="about-habilidad"><p>Visual Studio Code</p></div>
                        <div className="about-habilidad"><p>Bootstrap</p></div>
                        <div className="about-habilidad"><p>C++ </p></div>
                    </div>
                    <div className="about-skills">
                        <div className="about-habilidad"><p>Tkinter</p></div>
                        <div className="about-habilidad"><p>MySQL</p></div>
                        <div className="about-habilidad"><p>PHP</p></div>
                        <div className="about-habilidad"><p>Trello </p></div>
                        <div className="about-habilidad"><p>PhpMyAdmin</p></div>
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