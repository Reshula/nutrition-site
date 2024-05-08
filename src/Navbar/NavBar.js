import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../Assets/logo_avocado.png'

const NavBar = () =>{
    // const [ showNavBar, setShowNavBar] = useState(false);
    return(
        <div>
            <div className='main-container'>
                <div className='logo-container'>
                    <img src={logo} alt='logo' width='50px'/>
                </div>
                <div className='menu-container'>
                  <nav>
                    <ul className='menu'>
                        {/* <li>
                             <Link to="/"className='menu-list'>ПРОГРАММЫ </Link>
                        </li> */}
                          {/* <li>
                             <Link to="/nutritionCal"className='menu-list'>Калькулятор калорий</Link>
                        </li> */}
                          {/* <li>
                             <Link to="/consultation"className='menu-list'>КОНСУЛЬТАЦИИ</Link>
                        </li> */}
                         {/* <li>
                             <Link to="/nutritionCal"className='menu-list'>ФОРМАТ КОНСУЛЬТАЦИЙ</Link>
                        </li> */}
                          {/* <li>
                             <Link to="/nutritionCal"className='menu-list'>БЕСПЛАТНЫЕ МАТЕРИАЛЫЙ</Link>
                        </li> */}
                          {/* <li>
                             <Link to="/about"className='menu-list'>Обо мне</Link>
                        </li> */}
                        {/* <li className='menu-list'>КОНСУЛЬТАЦИИ</li>
                        <li className='menu-list'>ФОРМАТ КОНСУЛЬТАЦИЙ</li>
                        <li className='menu-list'>БЕСПЛАТНЫЕ МАТЕРИАЛЫ</li>
                        <li className='menu-list'>Калькулятор калорий</li> */}
                       
                    </ul>
                  </nav>

                </div>
             </div>

        </div>
    )
}
export default NavBar;