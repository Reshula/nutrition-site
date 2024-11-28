import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConsultationMap = ({ consult}) =>{
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 2000,
      })

return(
    <div className='consult-container'>
        <img className="img-consultMap" src={`./${consult.img}.jpg`} data-aos="flip-up" alt='food'/>
        <div className='title-par'>
        <h3>{consult.name}</h3>
        <p>{consult.shortDes}</p>
        </div>
        <Link className="btn-consult" to={`/consultation_section/${consult.titleC}`}>
            Подробнее
        </Link>

    </div>
)

}
export default ConsultationMap;