import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavBar.css';
import logo from '../Assets/logo_avocado.png'

const NavBar = () =>{
    // const [ showNavBar, setShowNavBar] = useState(false);
    return(
        <div>
            <div className='main-container'>
                <div className='logo-container'>
                    <img className='logo-avacado' src={logo} alt='logo'/>
                </div>
                <div className='menu-container'>
                  <nav>
                    <ul className='menu'>
                        {/* <li>
                             <Link to="/"className='menu-list'>ПРОГРАММЫ </Link>
                        </li>
                          <li>
                             <Link to="/nutritionCal"className='menu-list'>Калькулятор калорий</Link>
                        </li>
                          <li>
                             <Link to="/consultation"className='menu-list'>КОНСУЛЬТАЦИИ</Link>
                        </li>
                         <li>
                             <Link to="/nutritionCal"className='menu-list'>ФОРМАТ КОНСУЛЬТАЦИЙ</Link>
                        </li>
                          <li>
                             <Link to="/nutritionCal"className='menu-list'>БЕСПЛАТНЫЕ МАТЕРИАЛЫЙ</Link>
                        </li>
                          <li>
                             <Link to="/about"className='menu-list'>Обо мне</Link>
                        </li> */}
                    
                       
                    </ul>
                  </nav>

                </div>
             </div>

        </div>
    )
}
export default NavBar;