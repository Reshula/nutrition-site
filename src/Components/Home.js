import './Component.css';
import avatar from '../Assets/1111.jpg';
import badge from '../Assets/shtamp.png';
import About from '../About/About';
import { HashLink as Link } from 'react-router-hash-link';
import { Accordion } from '../Accordion/Accordion';
import { TypeAnimation } from 'react-type-animation';
import { programContent } from './data';


const Home = () =>{
    return(
        <section>
        <div className='main'>
            <div className='title-name'>
                <h2 className='title-name'>ОЛЕСЯ ШАРАБЧИЕВА</h2>
            </div>
            <div className='main-container'>
            <div className='rigth-container'>
            <div className='title-container'>
            <div className="title">
                <h1>НУТРИЦИОЛОГ, <br></br>
                КОНСУЛЬТАНТ ПО ПИТАНИЮ<br></br>
                И ЗДОРОВОМУ ОБРАЗУ ЖИЗНИ</h1>
            </div>
       
            <div className='par-container'>
                <ul className='ul-list'>
                    <li>
                    помогу <strong><span className='span-color'>подготовиться к беременности </span></strong>и восстановиться после родов
                    </li>
                    <li>
                    расскажу<strong><span className='span-color'>о нутрициологической коррекции</span></strong> хронических заболеваний
                    </li>
                    <li>
                    объясню, как<strong><span className='span-color'> восполнить дефициты </span></strong>питательных веществ
                    </li>
                    <li>
                    подберу <strong><span className='span-color'>индивидуальный план</span></strong> питания
                    
                    дам поддержку и мотивацию
                    
                    </li>
                    <div className='type'>
            <TypeAnimation 
            sequence={[
                '@lesi_nutritionist',3000
            ]}
            speed={10}
            style={{ fontSize: '2em' }}
            repeat={Infinity}
            />
            </div>
            </ul>
            </div>
            </div>
            </div>
        
            <div className='left-container'>
                <div >
                    <img className='avatar-container' src={avatar} alt='avatar' data-aos="fade-up"/>
                </div>
            
            </div>
            </div>
            <div className='bottom-container'>
                <nav>
                    <Link to='/consultation_section'>
                    <button className='glow-on-hover'>ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ</button>
                    </Link>
                </nav>
                <img className='badge-conatiner' src={badge} alt='badge'/>
                </div>
        <div className="img-program-container">
            {programContent.map((item) => (
        <div className="box" key={item.id}>
            <nav>
            <Link to={item.link}>
              <img
                className="img-program"
                src={item.img}
                alt={item.alt}
              />
            </Link>
            </nav>
          <div className="middle">
            <div className="text">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
<About/>
<Accordion/>

        </div>
        </section>
    )
}
export default Home;