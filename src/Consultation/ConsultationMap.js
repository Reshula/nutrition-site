import { HashLink as Link } from 'react-router-hash-link';

const ConsultationMap = ( consult) =>{



return(
    <div className='consult-container'>
        <img className="img-programMap" src={`./${consult.image}.jpg`}  alt='food'/>
        <h3>{consult.name}</h3>
        <p>{consult.shortDes}</p>
        <Link  to={`/consultation_section/${consult.name}`}>
            <button className="btn-consult">Подробнее</button>
        </Link>

    </div>
)

}
export default ConsultationMap;