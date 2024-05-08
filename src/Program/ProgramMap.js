const ProgramMap = ({prog,describe}) =>{
    return(
        <div>
             <img src={`../${prog.image}.jpg`}  alt='food'/>
             <p>{describe}</p>

        </div>
    )
}
export default ProgramMap;