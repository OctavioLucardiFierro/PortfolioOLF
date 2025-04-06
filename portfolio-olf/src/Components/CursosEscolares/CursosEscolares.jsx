import React from 'react'
import './Escuela.css'
import Cursos_Data from '../../assets/cursos_data'
import theme_pattern from '../../assets/logoasset.svg'


const CursosEscolares = () => {
  return (
    <div className='school' id='school'>
        <div className="school-title">
            <h1>Mis Cursos Oficiales</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="school-container">
            {Cursos_Data.map((curso, index)=>{
                return <div className="curso">
                    <img key={index} src={curso.c_img} alt="" />
                    <h1>{curso.c_name + " [" + curso.c_ano + "]"} </h1>
                    <p>{curso.c_desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default CursosEscolares