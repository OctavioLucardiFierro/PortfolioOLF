import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/logoasset.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <div className="footer-title">
                    <h1>Octavio</h1>
                    <img src={theme_pattern} alt="" />
                </div>
                <p>Desarrollador Argentino, especializado en Frontend y videojuegos</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">
            © 2025 Octavio Lucardi Fierro. Todos los derechos reservados.
            </p>
            <div className="footer-bottom-right">
                <p>Terminos de servicio</p>
                <p>Policticas de privacidad</p>
                <p>Contacta conmigo</p>
            </div>
        </div>
    </div>
  )
}

export default Footer