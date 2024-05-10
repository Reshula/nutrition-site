import { useState , useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import logo from '../Assets/logo_avocado.png';
import Hamburger from 'hamburger-react';

const NavBar = () =>{
 
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


 
  
    return(
        <div  className={fixNav ? 'header fixed' : 'header'}>
            <div >
               
            
                </div>
             
              
                  <nav  >
                    <ul className='menu'>
                  <li>  <img className='logo-avacado' src={logo} alt='logo'/></li>
                      
                
                          <li>
                             <Link to="/"className='menu-list'>Home </Link>
                          </li>
                        <li>
                             <Link to="/program_section"className='menu-list'>ПРОГРАММЫ </Link>
                        </li>
                          <li>
                             <Link to="/nutritionCal_section"className='menu-list'>Калькулятор калорий</Link>
                        </li>
                          <li>
                             <Link to="/consultation_section"className='menu-list'>КОНСУЛЬТАЦИИ</Link>
                        </li>
                         {/* <li>
                             <Link to="/#formatConsult_section"className='menu-list'>ФОРМАТ КОНСУЛЬТАЦИЙ</Link>
                        </li> */}
                          {/* <li>
                             <Link to="/#freeMatirial_section"className='menu-list'>БЕСПЛАТНЫЕ МАТЕРИАЛЫЙ</Link>
                        </li> */}
                          <li>
                             <Link to="/about_section"className='menu-list'>Обо мне</Link>
                        </li>
                    
                       
                    </ul>
                  
                  </nav>

        </div>
    )
}
export default NavBar;