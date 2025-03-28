import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/logoasset.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const ContactWOF = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contacto</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
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
                        <span>Ciudad Autónoma de Buenos Aires, Argentina</span>
                    </div>
                </div>

        </div>
    </div>
  )
}

export default ContactWOF