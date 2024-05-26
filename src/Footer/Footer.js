import React from 'react';
import './Footer.css';
import avocado from '../Assets/avocado_4.png';
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="footer">
                <div className="row">
                <div className="footer-columb">
                        <img className='footer-img' src={avocado} alt='avocado'/>
                        <p><strong>Дисклеймер: консультации проводятся <br></br> с образовательной целью и<br></br> не заменяют обращение к врачу.</strong></p>
                </div>
                    <div className="footer-columb">
                            <ul className='footer-ul'>
                            <h3>Kонтакты:</h3>
                               <li className='footer-list'>E-mail:olesya.bukova@gmail.com</li>
                               <li className='footer-list'>Phone:+994505496757</li>
                            </ul>   
                    </div>
                    <div className="footer-columb">
                            <ul className="social-icons">
                            <h3>Подписывайтесь:</h3>
                               <li ><a className="footer-icon" href="https://www.instagram.com/lesi_nutritionist/"><IoLogoInstagram /></a></li>
                               <li ><a className="footer-icon" href="https://www.facebook.com/lesi.sharabchiyeva"> <RiFacebookCircleLine /></a></li>
                               
                            </ul>
                    </div>
                
            </div>
            <div className="bottom-footer">
                    <div className="col">
                        <p>&copy; 2024 Разработано Рейханой Мусаевой.В образовательных целях.Все права защищены.</p>
                    </div>
                  
            </div>
        </footer>
    );
};

export default Footer;
