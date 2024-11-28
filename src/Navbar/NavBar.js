import { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
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
          <span className="toggle-icon">{showNavbar ?  <AiOutlineClose /> : <AiOutlineBars />}</span>
    </div>
    
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
      
        <ul className='ul-nav'>
         
            <nav>
            <NavLink to="/"> <img className='logo-nav' src={logo}alt='logo'/></NavLink>
            </nav>
            <nav>
              <NavLink to="/program_section">Программы</NavLink>
            </nav>
           
            <nav>
              <NavLink to="/nutritionCal_section">Калькулятор</NavLink>
            </nav>
            <nav>
              <NavLink to="/consultation_section">Консультации</NavLink>
            </nav>
            <nav>
              <NavLink to="/about_section">Обо мне</NavLink>
            </nav>
            <nav>
              <NavLink to="/cart_section ">Покупки</NavLink>
             
            </nav>
            </ul>
          
         
        </div>
     
    </nav>
    </div>
  )
}

export default NavBar;





