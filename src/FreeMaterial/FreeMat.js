import cabage from '../Assets/cabege.jpg';
import spices from '../Assets/spices.png';
import spinach from '../Assets/spinach.jpg';
import desert from '../Assets/desert.jpg';
import './FreeMat.css'

const FreeMat = () =>{

    return(
        <section id='freeMat_section'>
            <div>
                <h2 className='title-program'>
                Бесплатные материалы
                </h2>
            </div>
            <div>
                <p>
                Ознакомиться с бесплатными материалами вы можете в личном кабинете сайта. Для этого нужно нажать на кнопку «Зарегистрироваться в личном кабинете» ниже.
                </p>
                <p>
                После регистрации в личном кабинете вы получите доступ к полезным материалам и сможете их скачать для личного использования.
                </p>
            </div>
            <div className='free-mat-container'>

                <div>
                <img src={cabage}alt='food'/>
                <h3>
                    АИП замены
                </h3>
                </div>
                 <div>
                <img src={spices} alt='food'/>
                <h3>
                    АИП специи
                </h3>
                </div>
             
               
                <div>
                <img src={spinach} alt='food'/>
                <h3>
                    Магний - какой, сколько, когда
                </h3>
                </div>

                <div>
                <img src={desert} alt='food'/>
                <h3>
                    Рецепты летних котейлей
                </h3>
                </div>    
  </div>
  <div>
                <button className="sing-up-btn">Зарегистрироваться в личном кабинете </button>
            </div>
        </section>
    )
}
export default FreeMat;