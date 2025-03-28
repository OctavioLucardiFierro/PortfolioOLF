import React, { useRef } from 'react'
import { useState } from "react";

import './Navbar.css'
import logo from '../../assets/logo.svg'
import theme_pattern from '../../assets/underline.svg'
import menu_open from '../../assets/menu-open.svg'
import menu_close from '../../assets/menu-close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const[menu,setMenu] =useState("home");
  const menuRef = useRef();
  const nav_open = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
    nav_open.current.classList.add("hidden"); // Oculta el botón
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    nav_open.current.classList.remove("hidden"); // Vuelve a mostrarlo
  };

  return (
    <div className='navbar'>
        <div className="navbar-title">
            <h1>Octavio</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <img ref={nav_open}src={menu_open} onClick={openMenu} alt="" className='nav-menu-open' />
        <ul ref={menuRef} className="nav-menu">
          <img className='nav-mov-close'onClick={closeMenu} src={menu_close} alt="" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Inicio</p></AnchorLink> {menu==="home"? <img alt = '' src={theme_pattern}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>Sobre mi</p> </AnchorLink>{menu==="about"? <img alt = '' src={theme_pattern}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("Service")}>Experiencia</p> </AnchorLink>{menu==="Service"? <img alt = '' src={theme_pattern}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p> </AnchorLink>{menu==="work"? <img alt = '' src={theme_pattern}/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contacto</p> </AnchorLink>{menu==="contact"? <img alt = '' src={theme_pattern}/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contactame</p> </AnchorLink></div>
    </div>
  )
}

export default Navbar