import { HashLink as Link } from 'react-router-hash-link';


const ProgramMap = ({prog}) =>{
    return(
        <div className="programMap-container">
           
             <img className="img-programMap" src={`./${prog.image}.jpg`}  alt='food'/>
             <p>{prog.describe}</p>
             <Link  to={`/program_section/${prog.name}`}>
             <button className="btn-prog">Подробнее</button>
             </Link>
        </div>
    )
}
export default ProgramMap;