import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/logoasset.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Contactame</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Hablemos</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quos deleniti corporis incidunt? Minus placeat voluptatibus tenetur animi tempora at debitis incidunt officiis recusandae inventore, architecto facilis optio voluptatum eos?</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <span>octaviolf2016@gmail.com</span>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <span>+54 11 2712-1689</span>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <span>Ciudad Autonoma de Buenos Aires, Argentina</span>
                    </div>
                </div>
            </div>
            <div className="contact-right">
                <label htmlFor="">Tú nombre</label>
                <input type="text" placeholder='Ingresa tú nombre' name="name"/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Ingresa tú mail' name="email"/>
                <label htmlFor="">Escribe tú mensaje aquí</label>
                <textarea name="message" rows="8" placeholder='Ingresa tu mensaje'></textarea>
                <button type='submit' className="contact-submit">Enviar ahora</button>
            </div>
        </div>
    </div>
  )
}

export default Contact