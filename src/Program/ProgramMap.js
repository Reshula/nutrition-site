const ProgramMap = ({prog}) =>{
    return(
        <div className="programMap-container">
             <img className="img-programMap" src={`../${prog.image}.jpg`}  alt='food'/>
             <p>{prog.describe}</p>
             <button>Подробнее</button>
        </div>
    )
}
export default ProgramMap;