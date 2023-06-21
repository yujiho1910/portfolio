import React from 'react'
import './nav.css'
import {FaHome, FaUserCircle, FaBookOpen, FaPhoneAlt} from 'react-icons/fa'
import {MdAppSettingsAlt} from 'react-icons/md'
import {RiServiceFill} from 'react-icons/ri'

const Nav = () => {
  // const [activeNav, setActiveNav] = useState('#')

  const topFunction =()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <nav>
      <a href="#header" onClick={topFunction} /*onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}*/><FaHome /></a>      
      <a href="#about" /*onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}*/><FaUserCircle /></a>
      <a href="#experience" /*onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}*/><FaBookOpen /></a>
      <a href="#services" /*onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}*/><RiServiceFill /></a>
      <a href="#portfolio" /*onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}*/><MdAppSettingsAlt /></a>
      <a href="#contact" /*onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}*/><FaPhoneAlt /></a>
    </nav>
  )
}

export default Nav