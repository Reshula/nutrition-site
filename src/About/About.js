
import author from '../Assets/Olesa.jpg';
import avacado from '../Assets/avocado_4.png';
import leaf from '../Assets/leaf.png';
import avocadoOne from '../Assets/yellowavocado.jpg';
import './About.css';
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import Content from '../Modal/Content';
import { dataArticle } from '../Data/data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contentData , sectionContent} from './data';

const About = () =>{

    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 2000,
      })

    const [isOpen, setIsOpen ] = useState(false)
  
    return (
        <section id="about_section" >
        <div className="main-about-container">
            <div className="about-title-container">
                <h2 className='title-program'>Обо мне</h2>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img className='img-about-container' src={author} alt='author' data-aos="fade-right"/>
                </div>
                <div className="about-par"data-aos="fade-left" >
                    <p > Я нутрициолог, специалист по питанию и сертифицированный тренер по аутоиммунному протоколу.</p>
                    <p >Еще со<strong><span className='span-color'> школы  интересуюсь химией и биологией, получила высшее биологическое образование</span></strong> и, наконец, нашла себя в прикладной сфере – нутрициологии.</p>
                    <p >Мои знания<strong><span className='span-color'> основаны не только на теоретической части</span></strong> в области биохимии и физиологии, но и на личном опыте управления аутоиммунным заболеванием.</p>
                    <p >У меня нет<strong><span className='span-color'> единого протокола питания </span></strong>или нутрицевтиков для каждого состояния. Все это я буду подбирать индивидуально, исходя из особенностей и состояния конкретного человека.</p>
                    <p className='par' ><strong><span className='span-color'>Я не врач,</span></strong> не назначаю и не отменяю лекарственные препараты, не ставлю диагнозы. Но я знаю, как значительно улучшить качество жизни, замедлить развитие или обернуть вспять хроническое заболевание путем изменения питания и образа жизни. Не допустить появления сопутствующих проблем.</p>
                    
                    <button onClick={() => setIsOpen(true)} className='button'>Мои сертификаты</button>
                    {isOpen && <Modal setIsOpen={setIsOpen}>
                    <Content setIsOpen={setIsOpen} dataArticle={dataArticle}/>
                    </Modal>    
                    }
                </div>
            </div>


            <div className='my-work-about'   >
                <div >
                <h2>Чаще всего ко мне обращаются с проблемами</h2>
                </div>
                <div className='section-about-one'>
                       
        {contentData.map((item) => (
          <div
            key={item.id}
            className="section-par-about"
            data-aos={item.dataAos || ''}
          >
            <img className="section-about-avacado" src={avacado} alt="avacado" />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
                <div className='section-about-div' data-aos="fade-up">
                   
                    <h2>Вопросы, с которыми я НЕ работаю</h2>
                <div className='section-about-two'>
                {sectionContent.map((item) => (
        <div className="section-par-about-two" key={item.id} data-aos="fade-up">
          <img className="section-about-two-leaf" src={leaf} alt="leaf" />
          <p>{item.text}</p>
        </div>
      ))}
                </div>
                
                <div className='section-about-three'>
                    <h2 className='section-par-three'>Если вы питаетесь правильно, то лекарства вам не нужны.</h2>
                    <h2 className='section-par-three'>Если вы питаетесь неправильно, лекарства вам не помогут.</h2>
                    <img className='img-about-three' data-aos="zoom-in" src={avocadoOne} alt='avocado'/>
                </div>
                </div>
                </div>
</div>
       
        </section>
    )
}
export default About;