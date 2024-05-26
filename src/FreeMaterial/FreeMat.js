
import './FreeMat.css';
import FreeItem from './FreeItem';
import { freeMaterial } from '../Data/data';
import { HashLink as Link } from 'react-router-hash-link';

const FreeMat = () =>{
    const openNewWindow = () => {
        window.open('http://localhost:3000/freeMat_section/loginForm_section', '_blank');
      };

    return(
        <section id='freeMat_section'>
             <div>
                <h2 className='title-program'>
                Бесплатные материалы
                </h2>
            </div>
            <div className='par-freeMat' >
                <p>
                Ознакомиться с бесплатными материалами вы можете в личном кабинете сайта. Для этого нужно нажать на кнопку «Зарегистрироваться в личном кабинете» ниже.
                </p>
                <p>
                После регистрации в личном кабинете вы получите доступ к полезным материалам и сможете их скачать для личного использования.
                </p>
            </div>
            <div className='free-mat-container' >
            
                {freeMaterial.map((item, id) =>
                <FreeItem  key={item.id} item={item}/>
            )}
            </div>

          
   
            
                {/* <nav>
                    <Link to='loginForm_section'>
                       
                    </Link>
                </nav> */}
                <div>
                <button onClick={openNewWindow} className="sing-up-btn">Зарегистрироваться в личном кабинете </button>
                </div>
            
        </section>
    )
}
export default FreeMat;