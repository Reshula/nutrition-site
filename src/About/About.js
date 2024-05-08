
import author from '../Assets/yilmaz-akin-FPKtCl74Hfs-unsplash (1).jpg';
import avacado from '../Assets/avocado_4.png';
import leaf from '../Assets/___17_2.png';
import avacadoOne from '../Assets/2shutterstock_111489.jpg'
import './About.css'
const About = () =>{
  
    return (
        <div className="main-about-container">
            <div className="about-title-container">
                <h2>Обо мне</h2>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img className='img-about-container' src={author} alt='author' />
                </div>
                <div className="about-par">
                    <p > Я нутрициолог, специалист по питанию и сертифицированный тренер по аутоиммунному протоколу.</p>
                    <p >Еще со<strong><span className='span-color'> школы  интересуюсь химией и биологией, получила высшее биологическое образование</span></strong> и, наконец, нашла себя в прикладной сфере – нутрициологии.</p>
                    <p >Мои знания<strong><span className='span-color'> основаны не только на теоретической части</span></strong> в области биохимии и физиологии, но и на личном опыте управления аутоиммунным заболеванием.</p>
                    <p ><strong><span className='span-color'>Я не врач,</span></strong> не назначаю и не отменяю лекарственные препараты, не ставлю диагнозы. Но я знаю, как значительно улучшить качество жизни, замедлить развитие или обернуть вспять хроническое заболевание путем изменения питания и образа жизни. Не допустить появления сопутствующих проблем.</p>
                    <p >У меня нет<strong><span className='span-color'> единого протокола питания </span></strong>или нутрицевтиков для каждого состояния. Все это я буду подбирать индивидуально, исходя из особенностей и состояния конкретного человека.</p>
                    <button className='button'>МОИ ДИПЛОМЫ</button>
                </div>
                
               

            </div>
            <div className='my-work-about'>
                <div>
                <h2>Чаще всего ко мне обращаются с проблемами</h2>
                </div>
                <div className='section-about-one'>
                    <div className='section-par-about'>
                        <img src={avacado} alt='avacado' width='70px'/>
                        <p>Любые дисфункции щитовидной железы (АИТ, гипотиреоз, болезнь Грейвса)</p>
                    </div>
                    <div className='section-par-about'>
                        <img src={avacado} alt='avacado'width='70px'/>
                        <p>Другие аутоиммунные заболевания</p>
                    </div>
                    <div className='section-par-about'>
                       <img src={avacado} alt='avacado'width='70px'/>
                       <p>«Женские» гормональные дисбалансы (СПКЯ, эндометриоз, ПМС, проблемы с циклом)</p>
                    </div>
                    <div className='section-par-about'>
                        <img src={avacado} alt='avacado'width='70px'/>
                        <p>Работа с ЖКТ (СИБР, ГЭРБ, СРК, желчеотток и т.д.)</p>
                    </div>
                    <div className='section-par-about'>
                         <img src={avacado} alt='avacado'width='70px'/>
                         <p>Метаболический синдром, инсулинорезистентность, коррекция веса</p>
                    </div>
                    <div className='section-par-about'>
                        <img src={avacado} alt='avacado'width='70px'/>
                        <p>Подготовка к беременности и восстановление организма после родов</p>
                    </div>
                    <div className='section-par-about'>
                    <img src={avacado} alt='avacado'width='70px'/>
                    <p>Неудовлетворительное состояние кожи, волос, ногтей</p>
                        
                    </div>
                    <div className='section-par-about'>
                        <img src={avacado} alt='avacado'width='70px'/>
                        <p>Подбор нутрицевтиков и расшифровка «дефицитарных» анализов (органические кислоты в моче, анализы крови)</p>
                    </div>


                </div>
                <div className='section-about-div'>
                   
                    <h2>Вопросы, с которыми я НЕ работаю</h2>
                <div className='section-about-two'>
                    <div className='section-par-about-two'>
                        <img src={leaf} alt='leaf'width='50px'/>
                        <p>Онкология</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img src={leaf} alt='leaf'width='50px'/>
                        <p>Консультации детей и беременных женщин</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img src={leaf} alt='leaf'width='50px'/>
                        <p>Паразитозы</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img src={leaf} alt='leaf'width='50px'/>
                        <p>Обострения хронических заболеваний, требующие медицинского вмешательства</p>
                    </div>
                </div>
                
                <div className='section-about-three'>
                    <h2 className='section-par-three'>Если вы питаетесь правильно, то лекарства вам не нужны.</h2>
                    <h2 className='section-par-three'>Если вы питаетесь неправильно, лекарства вам не помогут.</h2>
                    <img className='img-about-three' src={avacadoOne} alt='avacado'/>
                </div>
                </div>
</div>
        </div>
    )
}
export default About;