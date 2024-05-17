import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProgramMap = ({prog}) =>{
    useEffect(() => {
        AOS.init();
      }, [])
      AOS.init({
        duration: 2000,
      })

    return(
        <div className="programMap-container" data-aos="fade-up">
             <img className="img-programMap" src={`./${prog.image}.jpg`}  alt='food'/>
             <p>{prog.describe}</p>
             <Link  to={`/program_section/${prog.name}`}>
             <button className="btn-prog">Подробнее</button>
             </Link>
        </div>
    )
}
export default ProgramMap;