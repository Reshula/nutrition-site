import { useState , useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {  IoMenu } from "react-icons/io5";
import './NavBar.css';
import logo from '../Assets/logo_avocado.png';


const NavBar = () =>{

  const [showNavbar, setShowNavbar] = useState(false);
  const toggleShowNavbar = () => {
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
  <div  className={fixNav ? 'header fixed' : 'header'} >
  <nav className="navbar">
    <div className="container">
      <div className="logo">
      
      </div>
      <div className="menu-icon" onClick={toggleShowNavbar}>
        <IoMenu />
      </div>
      <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
          
          <li>
          <Link to="/"className='menu-list'><img className='logo-avacado' src={logo} alt='avacado'/></Link>
          </li>
          <li>
          <Link to="/program_section"className='menu-list'>Программы </Link>
          </li>
          <li>
            
            <Link to="/nutritionCal_section"className='menu-list'>Калькулятор </Link>
          </li>
          <li>
          <Link to="/consultation_section"className='menu-list'>Консультации</Link>
          </li>
          <li>
       <Link to="/about_section"className='menu-list'>Обо мне</Link>
       </li>
          
        </ul>
      </div>
    </div>
  </nav>
  </div>
)
}
export default NavBar;