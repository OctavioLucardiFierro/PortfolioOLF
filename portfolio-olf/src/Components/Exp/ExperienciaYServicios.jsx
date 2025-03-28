import React from 'react'
import './Experience.css'
import theme_pattern from '../../assets/logoasset.svg'
import Servicios_Data from '../../assets/serviciosData.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const ExperienciaYServicios = () => {
  return (
        <div id='services' className='services'>
            <div className="services-title">
                <h1>Experiencia laboral</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="services-container">
                {
                    Servicios_Data.map((service, index)=>{
                    return <a target="_blank" href='https://www.linkedin.com/in/octavio-lucardi-fierro-4aba90251/details/experience/'>
                        <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="service-readmore">
                                <p>Ver Más</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    </a> 
                    })
                }
            </div>
        </div>
  )
}

export default ExperienciaYServicios