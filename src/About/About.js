
import author from '../Assets/yilmaz-akin-FPKtCl74Hfs-unsplash (1).jpg';
import avacado from '../Assets/avocado_4.png';
import leaf from '../Assets/leaf.png';
import avacadoOne from '../Assets/yellowavacado.jpg';
import './About.css';
// import { CAlert } from '@coreui/react';
import { CAccordion ,CAccordionItem, CAccordionHeader, CAccordionBody} from '@coreui/react'
const About = () =>{
  
    return (
        <section id="about_section" >
        <div className="main-about-container">
            <div className="about-title-container">
                <h2 className='title-program'>Обо мне</h2>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img className='img-about-container' src={author} alt='author' />
                </div>
                <div className="about-par">
                    <p > Я нутрициолог, специалист по питанию и сертифицированный тренер по аутоиммунному протоколу.</p>
                    <p >Еще со<strong><span className='span-color'> школы  интересуюсь химией и биологией, получила высшее биологическое образование</span></strong> и, наконец, нашла себя в прикладной сфере – нутрициологии.</p>
                    <p >Мои знания<strong><span className='span-color'> основаны не только на теоретической части</span></strong> в области биохимии и физиологии, но и на личном опыте управления аутоиммунным заболеванием.</p>
                    <p >У меня нет<strong><span className='span-color'> единого протокола питания </span></strong>или нутрицевтиков для каждого состояния. Все это я буду подбирать индивидуально, исходя из особенностей и состояния конкретного человека.</p>
                    <p className='par' ><strong><span className='span-color'>Я не врач,</span></strong> не назначаю и не отменяю лекарственные препараты, не ставлю диагнозы. Но я знаю, как значительно улучшить качество жизни, замедлить развитие или обернуть вспять хроническое заболевание путем изменения питания и образа жизни. Не допустить появления сопутствующих проблем.</p>
                    
                    <button className='button'>МОИ ДИПЛОМЫ</button>
                </div>
                
               

            </div>
            <div className='my-work-about'>
                <div>
                <h2>Чаще всего ко мне обращаются с проблемами</h2>
                </div>
                <div className='section-about-one'>
                    <div className='section-par-about'>
                        <img className='section-about-avacado' src={avacado} alt='avacado' />
                        <p>Любые дисфункции щитовидной железы (АИТ, гипотиреоз, болезнь Грейвса)</p>
                    </div>
                    <div className='section-par-about'>
                        <img className='section-about-avacado'src={avacado} alt='avacado'/>
                        <p>Другие аутоиммунные заболевания</p>
                    </div>
                    <div className='section-par-about'>
                       <img className='section-about-avacado' src={avacado} alt='avacado'/>
                       <p>«Женские» гормональные дисбалансы (СПКЯ, эндометриоз, ПМС, проблемы с циклом)</p>
                    </div>
                    <div className='section-par-about'>
                        <img className='section-about-avacado'src={avacado} alt='avacado'/>
                        <p>Работа с ЖКТ (СИБР, ГЭРБ, СРК, желчеотток и т.д.)</p>
                    </div>
                    <div className='section-par-about'>
                         <img className='section-about-avacado'src={avacado} alt='avacado'/>
                         <p>Метаболический синдром, инсулинорезистентность, коррекция веса</p>
                    </div>
                    <div className='section-par-about'>
                        <img className='section-about-avacado'src={avacado} alt='avacado'/>
                        <p>Подготовка к беременности и восстановление организма после родов</p>
                    </div>
                    <div className='section-par-about'>
                    <img className='section-about-avacado'src={avacado} alt='avacado'/>
                    <p>Неудовлетворительное состояние кожи, волос, ногтей</p>
                        
                    </div>
                    <div className='section-par-about'>
                        <img className='section-about-avacado'src={avacado} alt='avacado'/>
                        <p>Подбор нутрицевтиков и расшифровка «дефицитарных» анализов (органические кислоты в моче, анализы крови)</p>
                    </div>


                </div>
                <div className='section-about-div'>
                   
                    <h2>Вопросы, с которыми я НЕ работаю</h2>
                <div className='section-about-two'>
                    <div className='section-par-about-two'>
                        <img className='section-about-two-leaf' src={leaf} alt='leaf'/>
                        <p>Онкология</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img className='section-about-two-leaf'src={leaf} alt='leaf'/>
                        <p>Консультации детей и беременных женщин</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img className='section-about-two-leaf'src={leaf} alt='leaf'/>
                        <p>Паразитозы</p>
                    </div>
                    <div className='section-par-about-two'>
                        <img className='section-about-two-leaf' src={leaf} alt='leaf'/>
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




        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" i>
      <button class="accordion-button collapsed" type="button" data-coreui-toggle="collapse" data-coreui-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-coreui-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
        </section>
    )
}
export default About;