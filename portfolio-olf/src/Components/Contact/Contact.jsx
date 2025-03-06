import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/logoasset.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a91c0466-3abb-4ef3-bbbf-51083e7233dc");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Contactame</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Hablemos</h1>
                <p>¡Me encantaría escucharte! Si estás interesado en contratar o tenes alguna pregunta, contáctame con alguno de estos metodos o dejame un mensaje</p>
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
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="">Tú nombre</label>
                <input type="text" placeholder='Ingresa tú nombre' name="name"/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Ingresa tú mail' name="email"/>
                <label htmlFor="">Escribe tú mensaje aquí</label>
                <textarea name="message" rows="8" placeholder='Ingresa tu mensaje'></textarea>
                <button type='submit' className="contact-submit">Enviar ahora</button>
            </form>
        </div>
    </div>
  )
}

export default Contact