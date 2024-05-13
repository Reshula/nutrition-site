// 
import { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {  IoMenu} from "react-icons/io5";
import './NavBar.css';
import logo from '../Assets/logo_avocado.png'

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const [fixNav, setFixNav] =useState(false);
  const setFixNavbar = () => {
    if (window.scrollY > 0 ) {
      setFixNav(true);
    }
    else setFixNav(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixNavbar);
    return () => window.removeEventListener("scroll", setFixNavbar);
  }, []);

  return (
    <div className={fixNav ? 'header fixed' : 'header'}>
    <nav className="navbar">
    
       
        <div className="menu-icon" onClick={handleShowNavbar}>
          <IoMenu />
        </div>
       
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        
          <ul className='ul-nav'>
        
            <li>
            <NavLink to="/"> <img className='logo-nav' src={logo}alt='logo'/></NavLink>
            </li>
            <li>
              <NavLink to="/program_section">Программы</NavLink>
            </li>
           
            <li>
              <NavLink to="/nutritionCal_section">Калькулятор</NavLink>
            </li>
            <li>
              <NavLink to="/consultation_section">Консультации</NavLink>
            </li>
            <li>
              <NavLink to="/about_section">Обо мне</NavLink>
            </li>
            <li>
              <NavLink to="/cart_section ">Покупки</NavLink>
             
            </li>
          
          </ul>
        </div>
     
    </nav>
    </div>
  )
}

export default NavBar;





